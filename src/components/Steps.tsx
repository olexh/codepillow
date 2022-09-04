import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import tech_back from '../assets/tech_back.png';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const steps = [
        {
            title: 'Understand',
            description:
                'The key step of all projects, our product team establish with your meeting and try to understand your needs and plans, simultaneously try to provide our ideas on how to overcome your pains with software solutions.',
        },
        {
            title: 'Design',
            description:
                'The design team goes through all customer business requirements and recreates everything into beautiful app mockups, and keeps working until all needs would be covered fully.',
        },
        {
            title: 'Prototype',
            description:
                'The development team goes through app mockups and meetings backlog to create initial prototype of the future app.',
        },
        {
            title: 'Test',
            description:
                'Validation phase of the project, at this phase dev team continue development process fix bugs and make updates.',
        },
        {
            title: 'Release',
            description:
                'After finalizing the test phase, the web product is ready to be release for users, our team provides all required deployment services to make your web app run smoothly.',
        },
    ];

    return (
        <Element name="steps" className={className}>
            <Container>
                <Grid container spacing={4} paddingX={{ xs: 0, md: 11.25 }}>
                    {steps.map((s, index) => (
                        <Grid
                            item
                            md={12}
                            xs={12}
                            sm={12}
                            key={index}
                            display="flex"
                            justifyContent={index % 2 ? 'flex-end' : 'flex-start'}
                        >
                            <Box maxWidth={432}>
                                <Typography variant="h1" fontFamily="Poppins" fontStyle="italic">
                                    #0{index + 1}
                                </Typography>
                                <Typography variant="h3">{s.title}</Typography>
                                <Typography variant="body1" color="textSecondary">
                                    {s.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
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
