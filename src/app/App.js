import React from 'react'
import ReactDOM from 'react-dom'

import Text from './Text.js'

export default class App extends React.Component {
    render() {

        return (
            <div className="app">
            
                This is the App component.

                <Text 
                    content="First component" 
                />

                <Text 
                    content="Second component" 
                />

                <Text 
                    content="Third component" 
                />
            
            </div>
        )
    }
}

