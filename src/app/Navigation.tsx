import React, { FC, useState } from 'react';
import { AppBar, Container, IconButton, Theme, Typography, useMediaQuery, useScrollTrigger } from '@mui/material';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import MobileDrawer from './MobileDrawer';
import { Link as ScrollLink } from 'react-scroll';
import { Logo } from '../components';

interface Props {
    className?: string;
}

const ElevationScroll = ({ ...props }) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        style: {
            transition: 'all 0.2s ease',
            background: trigger ? 'rgba(18, 18, 18, 0.5)' : 'transparent',
            backdropFilter: trigger ? 'blur(10px)' : 'none',
        },
    });
};

const Component: FC<Props> = ({ className, ...props }) => {
    const [isDrawerOpened, setIsDrawerOpened] = useState(false);
    const mobile = useMediaQuery(({ breakpoints }: Theme) => breakpoints.down('sm'));

    const scrollLinkProps = {
        smooth: true,
        href: '#',
        duration: 300,
        spy: true,
        offset: -100,
        activeClass: 'active-link',
    };

    return (
        <ElevationScroll {...props} mobile={mobile}>
            <AppBar className={className} color="transparent" elevation={0}>
                <MobileDrawer isDrawerOpened={isDrawerOpened} setIsDrawerOpened={setIsDrawerOpened} />
                <Container>
                    <div className="nav">
                        <ScrollLink
                            to="header"
                            className="link"
                            {...scrollLinkProps}
                            offset={0}
                            activeClass={undefined}
                        >
                            <Logo />
                        </ScrollLink>
                        {!mobile && (
                            <div className="links">
                                <ScrollLink to="about" className="nav-link link" {...scrollLinkProps} offset={-150}>
                                    <Typography fontWeight="bold">About</Typography>
                                </ScrollLink>
                                <ScrollLink to="clients" className="nav-link link" {...scrollLinkProps}>
                                    <Typography fontWeight="bold">Clients</Typography>
                                </ScrollLink>
                                <ScrollLink to="technologies" className="nav-link link" {...scrollLinkProps}>
                                    <Typography fontWeight="bold">Technologies</Typography>
                                </ScrollLink>
                                <ScrollLink to="project" className="nav-link link" {...scrollLinkProps}>
                                    <Typography fontWeight="bold">Projects</Typography>
                                </ScrollLink>
                            </div>
                        )}
                        {mobile && (
                            <IconButton color="inherit" size="large" onClick={() => setIsDrawerOpened(true)}>
                                <AiOutlineMenu size={24} />
                            </IconButton>
                        )}
                    </div>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
};

export default styled(Component)`
    padding: ${({ theme }) => theme.spacing(3.5625, 0)};

    .links {
        padding: ${({ theme }) => theme.spacing(3, 0)};
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active-link {
        &:before {
            transform: scaleX(1);
        }
    }

    .nav-link {
        margin: ${({ theme }) => theme.spacing(0, 2)};
    }

    .nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
