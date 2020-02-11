import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    padding: 0;
    margin: 0;
    clear: both;
`;

const ContainerFluid = ({children}) => (
    <StyledContainer>{children}</StyledContainer>
);

export default ContainerFluid;