import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';

interface Props {
    className?: string;
    title: string;
    description?: string;
    content?: ReactNode | ReactNode[];
}

const Component: FC<Props> = ({ className, title, description, content, children }) => {
    return (
        <Grid
            container
            className={className}
            paddingX={{ xs: 0, md: 11.25 }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item md={6} xs={12}>
                <Typography variant="body2" color="textSecondary" textTransform="uppercase" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h2">{children}</Typography>
            </Grid>
            <Grid item md={content ? 6 : 4} xs={12}>
                {content ? content : <Typography>{description}</Typography>}
            </Grid>
        </Grid>
    );
};

export default styled(Component)``;
