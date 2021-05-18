import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
    border-radius: 50%;
    border: solid 5px rgba(15, 19, 83, 0.7);
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    align-self: center;
    margin: 1rem auto;
`;

const Loader = () => {
    return <StyledLoader className='loader' />;
};

export default Loader;
