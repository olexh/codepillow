import React, { FC } from 'react';
import { Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { scroller } from 'react-scroll';

interface Props {
    className?: string;
    isDrawerOpened: boolean;
    setIsDrawerOpened: (arg1: boolean) => void;
}

const Component: FC<Props> = ({ className, isDrawerOpened, setIsDrawerOpened }) => {
    const onClose = () => setIsDrawerOpened(false);
    const history = useHistory();

    const scrollTo = (name: string) => {
        scroller.scrollTo(name, {
            duration: 300,
            delay: 0,
            smooth: true,
            offset: -100,
        });
        onClose();
    };

    const goTo = (name: string) => {
        history.push(name);
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
                    <ListItemButton onClick={() => goTo('/')}>
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    Home
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className="link">
                    <ListItemButton onClick={() => goTo('/web')} href="#">
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    Web
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className="link">
                    <ListItemButton onClick={() => goTo('/mobile')} href="#">
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    Mobile
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className="link">
                    <ListItemButton onClick={() => goTo('/blockchain')} href="#">
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    Blockchain
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className="link">
                    <ListItemButton onClick={() => goTo('/ai')} href="#">
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    AI
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className="link">
                    <ListItemButton onClick={() => scrollTo('contact')} href="#">
                        <ListItemText
                            className="link-text"
                            primary={
                                <Typography variant="h6" textTransform="uppercase">
                                    Contact Us
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
