import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 47px;
    font-weight: 600;
    letter-spacing: 2px;
    color: ${(props) => props.theme.text};
`

export const Heading: React.FC = () => {
    return (
        <Container>
            <span role="img" aria-label="Taskhero logo">
                🦸‍♂️
            </span>{' '}
            Taskhero
        </Container>
    )
}
