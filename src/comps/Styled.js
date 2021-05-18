import styled from "styled-components";

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Row = styled.div`
    display: flex;
`;
export const WrapRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const TextInput = styled.input`
    border-radius: 16px;
    border: solid 2px rgba(15, 19, 83, 0.7);
    background-color: rgba(15, 19, 83, 0.3);
    padding: 0.5rem 0.8rem;
    color: white;
    opacity: 0.7;
    transition: all 0.8s;
    :hover,
    :focus {
        opacity: 1;
    }
`;
export const Button = styled.button`
    border-radius: 16px;
    border: none;
    background-color: rgb(15, 19, 83);
    opacity: 0.7;
    padding: 0.5rem 0.8rem;
    color: white;
    transition: all 0.8s;
    :hover {
        opacity: 1;
    }
`;
export const NoButton = styled.div`
    border-radius: 16px;
    border: none;
    background-color: rgb(15, 19, 83);
    opacity: 0.7;
    padding: 0.5rem 0.8rem;
    color: white;
    cursor: pointer;
    transition: all 0.8s;
    :hover {
        opacity: 1;
    }
`;
export const Link = styled.a`
    color: rgb(15, 19, 83);
    text-decoration: none;
    :hover,
    :active {
        color: rgb(15, 19, 83);
    }
    :hover {
        text-decoration: underline;
    }
`;
