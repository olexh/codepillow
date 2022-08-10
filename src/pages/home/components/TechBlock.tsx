import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

interface Props {
    className?: string;
    title: string;
    description: string;
    img: string;
    size?: 'small' | 'large';
}

const Component: FC<Props> = ({ className, title, description, size }) => {
    return (
        <div className={className}>
            <div className="block" />
            <Typography variant={size === 'large' ? 'h3' : 'h4'}>{title}</Typography>
            <Typography variant={size === 'large' ? 'body1' : 'body2'} color="textSecondary">
                {description}
            </Typography>
        </div>
    );
};

export default styled(Component)`
    .block {
        margin-top: ${({ size }) => (size === 'large' ? '70px' : '12px')};
        position: relative;
        width: 72px;
        height: 72px;
        background: linear-gradient(142.61deg, rgba(255, 255, 255, 0.2) -135.14%, rgba(217, 217, 217, 0) 116.14%);
        border-radius: 10px;

        &:after {
            content: '';
            position: absolute;
            width: 114px;
            height: 114px;
            background: radial-gradient(50% 50% at 50% 50%, rgba(93, 79, 255, 0.4) 0%, rgba(179, 172, 255, 0) 100%);
            filter: blur(30px);
        }

        &:before {
            content: '';
            position: absolute;
            width: ${({ size }) => (size === 'large' ? '106px' : '48px')};
            height: ${({ size }) => (size === 'large' ? '106px' : '48px')};
            background: url(${({ img }) => img}) no-repeat;
            background-size: contain;
            left: 50%;
            bottom: 50%;
        }
    }
`;
