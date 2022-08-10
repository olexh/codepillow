import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Container, Grid, Theme, useMediaQuery } from '@mui/material';
import { AboutBlock, SubHeader } from '../components';
import design from '../../../assets/about/1.png';
import usability from '../../../assets/about/2.png';
import engineering from '../../../assets/about/3.png';
import back_about from '../../../assets/about_back.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Element } from 'react-scroll';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const mobile = useMediaQuery(({ breakpoints }: Theme) => breakpoints.down('md'));

    const designBlock = (props?: Record<string, any>) => (
        <AboutBlock
            img={design}
            title="Solid Design"
            description="We create a timeless design, it doesn't get out of date after one-week usage"
            {...props}
        />
    );

    const usabilityBlock = (props?: Record<string, any>) => (
        <AboutBlock
            img={usability}
            variant="secondary"
            title="Usability"
            description="It's important for us to create a perfect app user experience for future customers"
            {...props}
        />
    );

    const engineeringBlock = (props?: Record<string, any>) => (
        <AboutBlock
            img={engineering}
            title="Engineering"
            description="We've hands-on experience in lots of technology and gain new all the time"
            {...props}
        />
    );

    const subheader = (
        <SubHeader title="About Us">
            Why do{' '}
            <Box component="span" fontStyle="italic">
                you
            </Box>{' '}
            need to select us?
        </SubHeader>
    );

    return (
        <Element name="about" className={className}>
            {!mobile && (
                <Container>
                    {subheader}
                    <Grid container spacing={4} marginTop={6.5} alignItems="flex-end">
                        <Grid item md>
                            {designBlock()}
                        </Grid>
                        <Grid item md marginBottom={2}>
                            {usabilityBlock()}
                        </Grid>
                        <Grid item md>
                            {engineeringBlock()}
                        </Grid>
                    </Grid>
                </Container>
            )}
            {mobile && (
                <>
                    <Container>{subheader}</Container>
                    <Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={30}>
                        <SwiperSlide>{designBlock()}</SwiperSlide>
                        <SwiperSlide>{usabilityBlock({ variant: 'primary' })}</SwiperSlide>
                        <SwiperSlide>{engineeringBlock()}</SwiperSlide>
                    </Swiper>
                </>
            )}
        </Element>
    );
};

export default styled(Component)`
    position: relative;
    padding: ${({ theme }) => theme.spacing(0, 0, 8, 0)};

    &:before {
        content: ' ';
        background: url(${back_about}) no-repeat;
        background-size: contain;
        position: absolute;
        top: -50%;
        left: 0;
        width: 100%;
        height: 200%;
        z-index: -1;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        &:before {
            width: 100%;
            top: 0;
        }

        padding: ${({ theme }) => theme.spacing(8, 0)};
    }

    .swiper {
        margin-top: ${({ theme }) => theme.spacing(6.5)};
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
    }
`;
