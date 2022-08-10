import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Button, Container, Grid } from '@mui/material';
import { ProjectBlock, SubHeader } from '../components';
import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import test from '../../../assets/projects/test.png';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const buttons = (
        <Grid container spacing={1} justifyContent={{ md: 'flex-end', xs: 'flex-start' }}>
            <Grid item md="auto">
                <Button variant="contained" color="secondary">
                    Web
                </Button>
            </Grid>
            <Grid item md="auto">
                <Button variant="contained" color="secondary">
                    MOBILE
                </Button>
            </Grid>
            <Grid item md="auto">
                <Button variant="contained" color="secondary">
                    BLOCKCHAIN
                </Button>
            </Grid>
            <Grid item md="auto">
                <Button variant="contained" color="secondary">
                    AI
                </Button>
            </Grid>
        </Grid>
    );

    const subheader = (
        <SubHeader title="Projects" content={buttons}>
            Our fields of{' '}
            <Box component="span" fontStyle="italic">
                knowledge
            </Box>
        </SubHeader>
    );

    return (
        <Element name="project" className={className}>
            <Container>{subheader}</Container>
            <Swiper slidesPerView={'auto'} loop centeredSlides={true} spaceBetween={30}>
                <SwiperSlide>
                    <ProjectBlock img={test} />
                </SwiperSlide>
            </Swiper>
        </Element>
    );
};

export default styled(Component)`
    padding: ${({ theme }) => theme.spacing(8, 0)};

    .swiper {
        margin-top: ${({ theme }) => theme.spacing(6.5)};
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 815px;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        .swiper-slide {
            width: 500px;
        }
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        .swiper-slide {
            width: 319px;
        }
    }
`;
