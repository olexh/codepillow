import React, { FC, useState } from 'react';
import styled from 'styled-components';
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slider,
    TextField,
    Typography,
} from '@mui/material';
import { Element } from 'react-scroll';
import NumberFormat from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [budget, setBudget] = useState<number[]>([10000, 15000]);
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        setBudget(newValue as number[]);
    };

    const submit = () => {
        setIsLoading(true);

        if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setIsLoading(false);
            return;
        }

        if (!message || message === '') {
            setIsLoading(false);
            return;
        }

        axios
            .post('https://feedback.codepillow.io/submit', {
                email,
                message,
                budget: budget.toString(),
                'h-captcha-response': 'RESPONSE',
                offers: false,
            })
            .then(() => {
                setBudget([10000, 15000]);
                setMessage('');
                setName('');
                setEmail('');
                setIsLoading(false);
                setOpen(true);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };

    return (
        <Element name="contact" className={className}>
            <Container maxWidth="sm">
                <Typography variant="h2">Let`s talk!</Typography>
                <Typography color="textSecondary">Let's discuss what you need and how we can help you!</Typography>
                <Box>
                    <Box marginY={3}>
                        <TextField
                            InputProps={{
                                disableUnderline: true,
                            }}
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            variant="filled"
                            fullWidth
                            margin="normal"
                            label="Your name"
                        />
                        <TextField
                            required
                            type="email"
                            variant="filled"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            label="Your email"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                        <TextField
                            required
                            variant="filled"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            fullWidth
                            margin="normal"
                            label="How can we help?"
                            multiline
                            InputProps={{
                                disableUnderline: true,
                            }}
                            minRows={3}
                        />
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            marginBottom={5}
                            marginTop={1}
                        >
                            <Typography>Project Budget</Typography>
                            <Typography fontWeight={700}>
                                {/* @ts-ignore */}
                                <NumberFormat
                                    prefix="$"
                                    thousandSeparator
                                    value={budget[0]}
                                    displayType={'text'}
                                /> - {/* @ts-ignore */}
                                <NumberFormat
                                    prefix="$"
                                    thousandSeparator
                                    suffix={budget[1] === 100000 ? '+' : undefined}
                                    value={budget[1]}
                                    displayType={'text'}
                                />
                            </Typography>
                        </Box>
                        <Slider
                            min={10000}
                            max={100000}
                            step={5000}
                            value={budget}
                            onChange={handleChange}
                            valueLabelFormat={(v) => (
                                <Typography>
                                    {/* @ts-ignore */}
                                    <NumberFormat
                                        prefix="$"
                                        thousandSeparator
                                        suffix={v === 100000 ? '+' : undefined}
                                        value={v}
                                        displayType={'text'}
                                    />
                                </Typography>
                            )}
                            marks
                            valueLabelDisplay="auto"
                        />
                    </Box>
                    <LoadingButton
                        loading={isLoading}
                        loadingPosition="start"
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={submit}
                    >
                        Submit
                    </LoadingButton>
                </Box>
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Congratulations!</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        We received your message. Our manager will contact with you as soon as possible. Thank you for
                        choosing us!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Element>
    );
};

export default styled(Component)`
    padding: ${({ theme }) => theme.spacing(8, 0)};
`;
