import React from 'react'
import styled from 'styled-components'
import {Container as ItemContainer, TextStyle as ItemTextStyle} from './Item'

const InsertInput = styled.input`
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    background-color: transparent;
    outline: none;
    -webkit-appearance: textfield;
    ${ItemTextStyle};

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
`

type InputProps = {
    onSubmit: (value: string) => void
}

export const Input: React.FC<InputProps> = ({onSubmit}) => {
    return (
        <ItemContainer>
            <InsertInput
                placeholder="Insert a new todo item..."
                type="search"
                autoComplete="off"
                onKeyUp={async ({keyCode, currentTarget}) => {
                    if (keyCode !== 13) return
                    onSubmit(currentTarget.value)
                    currentTarget.value = ''
                }}
            />
        </ItemContainer>
    )
}
