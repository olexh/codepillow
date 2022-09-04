import React, { FC } from 'react';
import styled from 'styled-components';
import { About, Clients, Header, Team, Technologies } from './layout';
import { Contact } from '../../components';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Header />
            <About />
            <Clients />
            <Technologies />
            {/*<Projects />*/}
            <Team />
            <Contact />
        </div>
    );
};

export default styled(Component)``;
