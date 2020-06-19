import React, {useState} from 'react'
import {Heading} from './components/Heading'
import {Input} from './components/Input'
import {Stats} from './components/Stats'
import {Items} from './Items'
import {Switch} from './components/Switch'
import {ThemeProvider, GlobalStyles} from './components/theme'
import {Header} from './components/Header'

const Home = () => {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <div style={{width: 560}}>
            <Header>
                <Heading />
                <Switch
                    value={darkMode}
                    onChange={setDarkMode}
                />
            </Header>
            <Stats />
            <Items />
            <Input />
        </div>
    )
}

const App = () => {
    return (
        <ThemeProvider darkMode={true}>
            <GlobalStyles />
            <Home />
        </ThemeProvider>
    )
}

export default App
