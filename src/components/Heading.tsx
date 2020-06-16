import React from 'react'
import styled from 'styled-components'
import {colors} from './colors'

const Container = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 47px;
    font-weight: 600;
    letter-spacing: 2px;
    color: ${colors.lightGray};
    padding: 30px 0;
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
