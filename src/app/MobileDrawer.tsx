import React, { FC } from 'react';
import { Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { scroller } from 'react-scroll';

interface Props {
    className?: string;
    isDrawerOpened: boolean;
    setIsDrawerOpened: (arg1: boolean) => void;
}

const Component: FC<Props> = ({ className, isDrawerOpened, setIsDrawerOpened }) => {
    const onClose = () => setIsDrawerOpened(false);

    const scrollTo = (name: string) => {
        scroller.scrollTo(name, {
            duration: 300,
            delay: 0,
            smooth: true,
            offset: -100,
        });
        onClose();
    };

    return (
        <Drawer
            anchor="top"
            open={isDrawerOpened}
            className={className}
            onClose={onClose}
            PaperProps={{ className: 'paper' }}
        >
            <Container>
                <div className="close-box">
                    <IconButton color="inherit" size="large" onClick={onClose}>
                        <MdOutlineClose size={24} />
                    </IconButton>
                </div>
            </Container>
            <List className="mobile-list">
                <ListItem className="link">
                    <ListItemButton onClick={() => scrollTo('about')}>
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    About
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className="link">
                    <ListItemButton onClick={() => scrollTo('clients')} href="#">
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    Clients
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className="link">
                    <ListItemButton onClick={() => scrollTo('technologies')} href="#">
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    Technologies
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className="link">
                    <ListItemButton onClick={() => scrollTo('project')} href="#">
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    Projects
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default styled(Component)`
    .mobile-list {
        color: ${({ theme }) => theme.palette.common.white};
    }

    .link-text {
        display: flex;
        justify-content: center;
    }

    .paper {
        height: 100%;
        background: transparent;
        backdrop-filter: blur(10px);
    }

    .close-box {
        display: flex;
        justify-content: flex-end;
        height: 75px;
        color: ${({ theme }) => theme.palette.common.white};
    }
`;
