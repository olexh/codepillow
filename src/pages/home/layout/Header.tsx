import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Button, Container, Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import header from '../../../assets/header.png';
import back_header from '../../../assets/back_header.png';
import { Element, scroller } from 'react-scroll';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const mobile = useMediaQuery(({ breakpoints }: Theme) => breakpoints.down('sm'));

    return (
        <Element name="header" className={className}>
            <Container>
                <div className="full-width">
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                        justifyContent="center"
                        textAlign={{ xs: 'center', md: 'left' }}
                    >
                        <Grid item md={8} order={{ xs: 2, md: 1 }}>
                            <Typography variant="h1">
                                We turn{' '}
                                <Box component="span" fontStyle="italic">
                                    your
                                </Box>
                            </Typography>
                            <Typography variant="h1">
                                <Box component="span" fontStyle="italic">
                                    ideas
                                </Box>{' '}
                                into
                            </Typography>
                            <Typography variant="h1" marginBottom={4.25}>
                                beautiful products
                            </Typography>
                            <Typography marginBottom={11.4285}>And we are ready to collaborate with you!</Typography>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() =>
                                    scroller.scrollTo('contact', {
                                        duration: 300,
                                        delay: 0,
                                        smooth: true,
                                        offset: -100,
                                    })
                                }
                            >
                                Start Building
                            </Button>
                        </Grid>
                        <Grid item md order={{ xs: 1, md: 2 }}>
                            <img src={header} width={mobile ? '75%' : '100%'} />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Element>
    );
};

export default styled(Component)`
    position: relative;

    .full-width {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    &:before {
        content: ' ';
        background: url(${back_header});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top right;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
`;
