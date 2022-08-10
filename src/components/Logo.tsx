import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <Typography
            fontSize="1.5625rem"
            fontFamily="Space Mono"
            fontWeight={700}
            textTransform="uppercase"
            className={className}
        >
            Code(Pillow)
        </Typography>
    );
};

export default styled(Component)``;
