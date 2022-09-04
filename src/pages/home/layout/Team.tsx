import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Container, Grid, Theme, useMediaQuery } from '@mui/material';
import { SubHeader, TeamBlock } from '../../../components';
import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';

import volbil from '../../../assets/team/volbil.png';
import olexh from '../../../assets/team/olexh.png';
import olexb from '../../../assets/team/olexb.png';
import yaroslav from '../../../assets/team/yaroslav.jpg';
import khadai from '../../../assets/team/khadai.jpg';
import vlad from '../../../assets/team/vlad.jpeg';
import team_back from '../../../assets/team_back.png';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const mobile = useMediaQuery(({ breakpoints }: Theme) => breakpoints.down('md'));
    const team = [
        <TeamBlock
            key={0}
            img={volbil}
            firstName="Volodymyr"
            lastName="Biloshytskyi"
            description="Blockchain Engineer"
        />,
        <TeamBlock key={1} img={olexb} firstName="Oleh" lastName="Basystiuk" description="ML Engineer" />,
        <TeamBlock key={2} img={olexh} firstName="Oleh" lastName="Nykoliak" description="React Native Engineer" />,
        <TeamBlock
            key={3}
            img={yaroslav}
            firstName="Yaroslav"
            lastName="Biloshytskyi"
            description="Back-end Engineer"
        />,
        <TeamBlock key={4} img={vlad} firstName="Vladyslav" lastName="Vereskun" description="UI/UX Designer" />,
        <TeamBlock key={5} img={khadai} firstName="Mykhailo" lastName="Khadai" description="React Engineer" />,
    ];

    const subheader = (
        <SubHeader
            title="Team"
            description="Our goal is to cover customer needs in great-designed and reliable software."
        >
            Our{' '}
            <Box component="span" fontStyle="italic">
                team
            </Box>
        </SubHeader>
    );

    return (
        <Element name="team" className={className}>
            {!mobile && (
                <Container>
                    {subheader}
                    <Grid container spacing={3} marginTop={6.5}>
                        {team.map((t, index) => (
                            <Grid key={index} item md={4} sm={6}>
                                {t}
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            )}
            {mobile && (
                <>
                    <Container>{subheader}</Container>
                    <Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={30}>
                        {team.map((t, index) => (
                            <SwiperSlide key={index}>{t}</SwiperSlide>
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
        background: url(${team_back}) no-repeat;
        background-size: contain;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 150%;
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
