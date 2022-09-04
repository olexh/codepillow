import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    img: string;
}

const Component: FC<Props> = ({ className }) => {
    return <div className={className} />;
};

export default styled(Component)`
    background: url(${({ img }) => img}) no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 544px;
    width: 815px;

    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 500px;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
        width: 319px;
    }
`;
