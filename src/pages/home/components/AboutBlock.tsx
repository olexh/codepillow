import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

interface Props {
    className?: string;
    title: string;
    description: string;
    img: string;
    variant?: 'primary' | 'secondary';
}

const Component: FC<Props> = ({ className, title, description, img }) => {
    return (
        <div className={className}>
            <img src={img} alt={title} />
            <Typography variant="h3" marginBottom={3} marginTop={6}>
                {title}
            </Typography>
            <Typography color="textSecondary">{description}</Typography>
        </div>
    );
};

export default styled(Component)`
    img {
        width: 100%;
        height: 214px;
        object-fit: contain;
    }

    background: ${({ theme, variant }) =>
        variant === 'secondary' ? theme.palette.secondary.light : theme.palette.secondary.main};
    border-radius: 20px;
    padding: ${({ theme }) => theme.spacing(67 / 8, 43 / 8)};
    border: ${({ variant }) => variant === 'secondary' && '1px solid rgba(256, 256, 256, 0.16)'};
`;
