import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

interface Props {
    className?: string;
    title: string;
    img: string;
    description: string;
}

const Component: FC<Props> = ({ className, title, description, img }) => {
    return (
        <div className={className}>
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
    .client-img {
        padding: ${({ theme }) => theme.spacing(20 / 8, 52 / 8)};
        background: ${({ theme }) => theme.palette.secondary.main};
        border-radius: ${({ theme }) => theme.shape.borderRadius}px;

        img {
            width: 100%;
        }
    }
`;
