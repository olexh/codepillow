import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Button, Container, Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import header from '../../../assets/header.png';
import back_header from '../../../assets/back_header.png';
import { Element, scroller } from 'react-scroll';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const mobile = useMediaQuery(({ breakpoints }: Theme) => breakpoints.down('sm'));
    const [imgLoad, setImgLoad] = useState(false);

    return (
        <Element name="header" className={className}>
            <Container>
                <div className="full-width">
                    <Grid
                        container
                        rowSpacing={4}
                        alignItems="center"
                        justifyContent={{ md: 'flex-start', xs: 'center' }}
                        textAlign={{ xs: 'center', md: 'left' }}
                    >
                        <Grid item md={7} order={{ xs: 2, md: 1 }}>
                            <Typography
                                textTransform="uppercase"
                                className={`smooth ${imgLoad ? 'visible' : 'hidden'}`}
                                variant="h1"
                                marginBottom={4.25}
                            >
                                Blockchain
                            </Typography>
                            <Typography
                                maxWidth={550}
                                className={`smooth ${imgLoad ? 'visible' : 'hidden'}`}
                                marginBottom={11.4285}
                            >
                                The main challenges in blockchain are: security, software infrastructure scalability,
                                API connectivity. Our production team will provide efficient decentralized solution for
                                you.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                className={`smooth ${imgLoad ? 'visible' : 'hidden'}`}
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
                            <img
                                className={`smooth ${imgLoad ? 'visible' : 'hidden'}`}
                                onLoad={() => setImgLoad(true)}
                                src={header}
                                width={mobile ? '75%' : '80%'}
                            />
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
        z-index: -1;
    }

    .smooth {
        transition: all 0.4s;
    }

    .visible {
        opacity: 1;
        transform: translateY(0);
    }

    .hidden {
        opacity: 0;
        transform: translateY(25%);
    }
`;
