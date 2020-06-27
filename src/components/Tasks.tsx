import React from 'react'
import {Task} from './Task'

export const Tasks: React.FC = () => {
    return (
        <div>
            <Task id={0} />
            <Task id={1} />
            <Task id={2} />
            <Task id={3} />
        </div>
    )
}
