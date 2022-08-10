import React, { FC } from 'react';
import styled from 'styled-components';
import { About, Clients, Contact, Header, Projects, Team, Technologies } from './layout';

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
            <Projects />
            <Team />
            <Contact />
        </div>
    );
};

export default styled(Component)``;
