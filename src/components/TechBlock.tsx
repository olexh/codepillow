import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Link, SvgIcon, Typography } from '@mui/material';
import { animated } from 'react-spring';
import { SpringValue } from '@react-spring/web';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

interface Props {
    className?: string;
    title: string;
    description: string;
    img: string;
    URL: string;
    enableURL?: boolean;
    size?: 'small' | 'large';
    style?: {
        opacity: SpringValue<number>;
        transform?: SpringValue<string>;
    };
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const Component: FC<Props> = ({ className, title, description, size, enableURL, URL, ...props }) => {
    return (
        <animated.div className={className} {...props}>
            <div className="block" />
            <Typography variant={size === 'large' ? 'h3' : 'h4'}>{title}</Typography>
            <Typography variant={size === 'large' ? 'body1' : 'body2'} color="textSecondary">
                {description}
            </Typography>
            {Boolean(enableURL) && (
                <Link
                    display="flex"
                    width="fit-content"
                    href={URL}
                    marginTop={7}
                    variant="button"
                    className="link"
                    underline="none"
                    target="_blank"
                >
                    More info
                    <SvgIcon>
                        <MdOutlineArrowRightAlt />
                    </SvgIcon>
                </Link>
            )}
        </animated.div>
    );
};

export default styled(Component)`
    transition: 0.2s all;

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

    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

    &:hover {
        transform: ${({ onClick }) => (onClick ? 'scale(1.1)' : 'none')};
    }
`;
