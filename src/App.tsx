import React from 'react'
import {Input} from './components/Input'
import {Stats} from './components/Stats'
import {Tasks} from './components/Tasks'
import {ThemeProvider, GlobalStyles} from './components/theme'
import {Header} from './components/Header'

const Home = () => {
    return (
        <div style={{width: 560}}>
            <Header />
            <Stats />
            <Tasks />
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
