import React from 'react'
import {Item} from './components/Item'

export const Items: React.FC = () => {
    return (
        <div>
            <Item
                label="Example label"
                complete
                onClick={() => {}}
            />
            <Item
                label="Example label"
                complete={false}
                onClick={() => {}}
            />
            <Item
                label="Example label"
                complete={false}
                onClick={() => {}}
            />
            <Item
                label="Example label"
                complete={false}
                onClick={() => {}}
            />
        </div>
    )
}
