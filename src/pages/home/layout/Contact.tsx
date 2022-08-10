import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Element } from 'react-scroll';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <Element name="contact" className={className}>
            <Container maxWidth="sm">
                <Typography variant="h2">Let`s talk!</Typography>
                <Typography color="textSecondary">
                    Above all, we are engineers, and our mission is to find the most elegant and economical solutions to
                </Typography>
                <Box>
                    <Box marginY={3}>
                        <TextField type="email" variant="filled" fullWidth margin="normal" label="Your email" />
                        <TextField type="phone" variant="filled" fullWidth margin="normal" label="Your number" />
                        <TextField
                            variant="filled"
                            fullWidth
                            margin="normal"
                            label="How can we help?"
                            multiline
                            minRows={3}
                        />
                    </Box>
                    <Button type="submit" variant="contained" size="large" fullWidth>
                        Submit
                    </Button>
                </Box>
            </Container>
        </Element>
    );
};

export default styled(Component)`
    padding: ${({ theme }) => theme.spacing(8, 0)};
`;
