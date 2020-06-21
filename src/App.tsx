import React from 'react'
import {Input} from './components/Input'
import {Stats} from './components/Stats'
import {Items} from './Items'
import {ThemeProvider, GlobalStyles} from './components/theme'
import {Header} from './components/Header'

const Home = () => {
    return (
        <div style={{width: 560}}>
            <Header />
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
