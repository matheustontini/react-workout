import React from 'react'
import ReactDOM from 'react-dom'

export default class Text extends React.Component {
    render() {
        return (
        <div className="text">
            This is a text component { this.props.content }
        </div>
        )
    }
}