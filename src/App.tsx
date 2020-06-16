import React from 'react'
import {Heading} from './components/Heading'
import {Item} from './components/Item'
import {Input} from './components/Input'
import {Stats} from './components/Stats'

const App = () => {
    return (
        <div style={{width: 560}}>
            <Heading />
            <Stats />
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
            <Input
                onSubmit={(label) => {
                    console.log('New item', label)
                }}
            />
        </div>
    )
}

export default App
