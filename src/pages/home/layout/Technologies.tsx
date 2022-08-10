import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Container, Grid } from '@mui/material';
import { SubHeader, TechBlock } from '../components';
import { Element } from 'react-scroll';
import kotlin from '../../../assets/technologies/kotlin.png';
import tech_back from '../../../assets/tech_back.png';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const tech = [
        <TechBlock
            key={0}
            title="Engineering"
            description="Gamebreaking inconsistency in card collection"
            img={kotlin}
        />,
        <TechBlock
            key={1}
            title="Engineering"
            description="Gamebreaking inconsistency in card collection"
            img={kotlin}
        />,
        <TechBlock
            key={2}
            title="Engineering"
            description="Gamebreaking inconsistency in card collection"
            img={kotlin}
        />,
        <TechBlock
            key={3}
            title="Engineering"
            description="Gamebreaking inconsistency in card collection"
            img={kotlin}
        />,
        <TechBlock
            key={4}
            title="Engineering"
            description="Gamebreaking inconsistency in card collection"
            img={kotlin}
        />,
        <TechBlock
            key={5}
            title="Engineering"
            description="Gamebreaking inconsistency in card collection"
            img={kotlin}
        />,
    ];

    const subheader = (
        <SubHeader
            title="Technologies"
            description="Above all, we are engineers, and our mission is to find the most elegant and economical solutions to business problems in our "
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
                <Grid container columnSpacing={46} rowSpacing={3} marginTop={6.5}>
                    <Grid item container md xs={12} spacing={6}>
                        {tech.map((t, index) => (
                            <Grid item md={6} xs={6} sm={4} key={index}>
                                {t}
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item md xs={12}>
                        <TechBlock
                            size="large"
                            title="Engineering"
                            description="AppleCare+ benefits are in addition to a consumer’s right to a free-of-charge repair or replacement, by the seller, of goods that do not conform with the contract of sale. Under English law, consumers have up to six years from the date of delivery to exercise their rights; however, various factors may impact your eligibility to receive these remedies. For more details, click here(opens in a new window)."
                            img={kotlin}
                        />
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
    }
`;
