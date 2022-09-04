import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

interface Props {
    className?: string;
    title: string;
    img: string;
    description: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const Component: FC<Props> = ({ className, title, description, img, ...props }) => {
    return (
        <div className={className} {...props}>
            <div className="client-img">
                <img src={img} alt={title} />
            </div>
            <Typography variant="h4" marginBottom={1} marginTop={2}>
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {description}
            </Typography>
        </div>
    );
};

export default styled(Component)`
    transition: 0.2s all;

    .client-img {
        transition: 0.2s all;
        padding: ${({ theme }) => theme.spacing(20 / 8, 52 / 8)};
        background: ${({ theme }) => theme.palette.secondary.main};
        border: 1px solid ${({ theme }) => theme.palette.secondary.main};
        border-radius: ${({ theme }) => theme.shape.borderRadius}px;
        display: flex;
        justify-content: center;

        img {
            height: 60px;
        }
    }

    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    ${({ theme }) => theme.breakpoints.up('sm')} {
        &:hover {
            .client-img {
                border-color: rgba(256, 256, 256, 0.16);
                background: ${({ theme }) => theme.palette.secondary.light};
            }

            transform: translateY(${({ theme }) => theme.spacing(-3)});
        }
    }
`;
