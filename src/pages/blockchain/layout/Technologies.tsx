import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, Container, Grid } from '@mui/material';
import { SubHeader, TechBlock } from '../../../components';
import { Element } from 'react-scroll';
import flask from '../../../assets/technologies/flask.png';
import tech_back from '../../../assets/tech_back.png';
import { useTransition } from 'react-spring';
import bitcoin from '../../../assets/technologies/bitcoin.png';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const tech = [
        {
            title: 'Blockchain',
            description:
                'Blockchain is a decentralized database technology that is mostly used for developing cryptocurrencies like Bitcoin or Ethereum.',
            img: bitcoin,
            URL: 'https://en.wikipedia.org/wiki/Blockchain',
        },
        {
            title: 'Flask',
            description:
                'Flask is a back-end micro web framework written in Python and used for building web applications and API services.',
            img: flask,
            URL: 'https://flask.palletsprojects.com/',
        },
    ];

    const [activeTech, setActiveTech] = useState<number>(0);
    const transitions = useTransition(activeTech, {
        from: { transform: 'translateY(125%)', opacity: 0, position: 'absolute' },
        enter: { transform: 'translateY(0%)', opacity: 1, position: 'relative' },
        leave: { transform: 'translateY(-125%)', opacity: 0, position: 'absolute' },
        delay: 0,
        config: {
            duration: 100,
        },
    });

    const subheader = (
        <SubHeader
            title="Technologies"
            description="Above all, we are engineers, and our mission is to find the most elegant and economical solutions for business problems."
        >
            The{' '}
            <Box component="span" fontStyle="italic">
                technologies
            </Box>{' '}
            that we use
        </SubHeader>
    );

    return (
        <Element name="technologies" className={className}>
            <Container>
                {subheader}
                <Grid container columnSpacing={16} rowSpacing={3} marginTop={6.5}>
                    <Grid item container md xs={12} spacing={6}>
                        {tech.map((t, index) => (
                            <Grid item md={6} xs={6} sm={4} key={index}>
                                <TechBlock {...t} onClick={() => setActiveTech(index)} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item md={5} xs={12} position="relative">
                        {transitions((style, item) => (
                            <TechBlock enableURL size="large" {...tech[item]} style={style} />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Element>
    );
};

export default styled(Component)`
    padding: ${({ theme }) => theme.spacing(8, 0)};
    position: relative;

    &:before {
        content: ' ';
        background: url(${tech_back});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center right;
        position: absolute;
        top: 15%;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;
