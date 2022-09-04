import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Container, Grid, Theme, useMediaQuery } from '@mui/material';
import { ClientBlock, SubHeader } from '../../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Element } from 'react-scroll';

import clients_back from '../../../assets/clients_back.png';
import onston from '../../../assets/clients/onston.svg';
import rapids from '../../../assets/clients/rapids.svg';
import aok from '../../../assets/clients/aok.png';
import paladeum from '../../../assets/clients/pldm.png';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const mobile = useMediaQuery(({ breakpoints }: Theme) => breakpoints.down('md'));
    const clients = [
        <ClientBlock
            key={0}
            title="AOK"
            description="Unique blockchain-based business platform, that help make crypto transformation smoothly."
            img={aok}
            onClick={() => window.open('http://www.aok.network/', '_blank')}
        />,
        <ClientBlock
            key={1}
            title="Rapids"
            description="Platform for payments across social media through a secure network driven by community. "
            img={rapids}
            onClick={() => window.open('https://www.rapidsnetwork.io/', '_blank')}
        />,
        <ClientBlock
            key={2}
            title="Onston"
            description="Virtual reality metaverse ecosystem, reinforeced with 3D virtual world and VR/AR devices."
            img={onston}
            onClick={() => window.open('https://onston.network/', '_blank')}
        />,
        <ClientBlock
            key={3}
            title="Paladeum"
            description="Next-generation payment platform, that links blockchain and banking system."
            img={paladeum}
            onClick={() => window.open('https://paladeum.io/', '_blank')}
        />,
    ];

    const subheader = (
        <SubHeader title="Clients">
            <Box component="span" fontStyle="italic">
                Clients
            </Box>{' '}
            we work with
        </SubHeader>
    );

    return (
        <Element name="clients" className={className}>
            {!mobile && (
                <Container>
                    {subheader}
                    <Grid container spacing={3} marginTop={6.5}>
                        {clients.map((c, index) => (
                            <Grid item md={3} key={index}>
                                {c}
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            )}
            {mobile && (
                <>
                    <Container>{subheader}</Container>
                    <Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={30}>
                        {clients.map((c, index) => (
                            <SwiperSlide key={index}>{c}</SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </Element>
    );
};

export default styled(Component)`
    padding: ${({ theme }) => theme.spacing(8, 0)};
    position: relative;

    &:before {
        content: ' ';
        background: url(${clients_back});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 200%;
        z-index: -1;
    }

    .swiper {
        margin-top: ${({ theme }) => theme.spacing(52 / 8)};
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
    }
`;
