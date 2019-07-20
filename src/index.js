import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import './style.css'

import Row from './Components/Row'

class App extends Component {
    render () {
        return <div>
            <Row />
            
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
