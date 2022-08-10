import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

interface Props {
    className?: string;
    img: string;
    title: string;
    description: string;
}

const Component: FC<Props> = ({ className, title, description }) => {
    return (
        <div className={className}>
            <div className="block" />
            <Typography variant="h3" marginTop={3}>
                {title}
            </Typography>
            <Typography color="textSecondary">{description}</Typography>
        </div>
    );
};

export default styled(Component)`
    .block {
        margin-top: 20px;
        margin-right: 20px;
        position: relative;
        background: linear-gradient(142.61deg, rgba(255, 255, 255, 0.2) -135.14%, rgba(217, 217, 217, 0) 116.14%);
        border-radius: 10px;
        width: 252px;
        height: 252px;

        &:before {
            content: '';
            position: absolute;
            width: 336px;
            height: 336px;
            background: radial-gradient(50% 50% at 50% 50%, rgba(93, 79, 255, 0.4) 0%, rgba(179, 172, 255, 0) 100%);
            filter: blur(50px);
            top: -42px;
            left: -42px;
        }

        &:after {
            content: '';
            position: absolute;
            width: 252px;
            height: 252px;
            border-radius: 10px;
            background: url(${({ img }) => img}) no-repeat;
            background-size: cover;
            background-position: center;
            top: -20px;
            left: 20px;
        }
    }
`;
