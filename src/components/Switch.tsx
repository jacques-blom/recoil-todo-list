import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 25px;
    background-color: ${(props) => props.theme.card};
    box-sizing: border-box;
    padding: 4px;
    cursor: pointer;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
`

const Toggle = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffc207;
    transition: 0.2s all ease-out;
    position: relative;
`

const MoonOverlay = styled.div`
    position: absolute;
    top: 50%;
    margin-top: -10px;
    left: -4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.card};
    transform-origin: left center;
    transition: 0.2s all ease-out;
`

type SwitchProps = {
    value: boolean
    onChange: (value: boolean) => void
}

export const Switch: React.FC<SwitchProps> = ({value: on, onChange}) => (
    <Container onClick={() => onChange(!on)}>
        <Toggle
            style={{
                transform: `translateX(${on ? 30 : 0}px)`,
            }}
        >
            <MoonOverlay
                style={{
                    transform: `scale(${on ? 1 : 0})`,
                }}
            />
        </Toggle>
    </Container>
)
