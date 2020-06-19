import styled from 'styled-components'

export const Card = styled.div`
    border-radius: 25px;
    background-color: ${(props) => props.theme.card};
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
`
