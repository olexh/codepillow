import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Button, Container, Grid, SvgIcon, Typography } from '@mui/material';
import { Logo } from '../components';
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Container>
                <Grid container alignItems="center" spacing={4} justifyContent="space-between">
                    <Grid item md={3} sm={3} xs={12} textAlign={{ md: 'left', xs: 'center' }}>
                        <Logo />
                    </Grid>
                    <Grid item container md="auto" sm="auto" xs={12} spacing={2} justifyContent="center">
                        <Grid item md>
                            <Button
                                variant="contained"
                                href="https://www.facebook.com/codepillow/"
                                target="_blank"
                                color="secondary"
                                className="media-btn"
                            >
                                <SvgIcon>
                                    <FaFacebookF />
                                </SvgIcon>
                            </Button>
                        </Grid>
                        <Grid item md>
                            <Button
                                variant="contained"
                                href="https://www.linkedin.com/company/codepillow/"
                                color="secondary"
                                target="_blank"
                                className="media-btn"
                            >
                                <SvgIcon>
                                    <FaLinkedinIn />
                                </SvgIcon>
                            </Button>
                        </Grid>
                        <Grid item md>
                            <Button
                                variant="contained"
                                href="https://t.me/codepillow/"
                                color="secondary"
                                target="_blank"
                                className="media-btn"
                            >
                                <SvgIcon>
                                    <FaTelegramPlane />
                                </SvgIcon>
                            </Button>
                        </Grid>
                        <Grid item md>
                            <Button
                                variant="contained"
                                href="https://twitter.com/codepillow/"
                                color="secondary"
                                target="_blank"
                                className="media-btn"
                            >
                                <SvgIcon>
                                    <FaTwitter />
                                </SvgIcon>
                            </Button>
                        </Grid>
                        <Grid item md>
                            <Button
                                variant="contained"
                                href="mailto:codepillow@pm.me"
                                color="secondary"
                                target="_blank"
                                className="media-btn"
                            >
                                <SvgIcon>
                                    <HiMail />
                                </SvgIcon>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={3} xs={12}>
                        <Box display="flex" justifyContent={{ md: 'flex-end', xs: 'center' }}>
                            <Typography
                                fontWeight="bold"
                                onClick={() => null}
                                fontFamily="Space Mono"
                                className="link btn"
                            >
                                Privacy Policy
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default styled(Component)`
    padding: ${({ theme }) => theme.spacing(8, 0)};

    .btn {
        cursor: pointer;
    }

    .media-btn {
        padding: 10px;
        min-width: 0;
    }
`;
