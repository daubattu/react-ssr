import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'

import '../css/styles.css'

class App extends Component {
    componentDidMount() {
        Axios.get('/api/v1')
            .then(response => console.log(response))
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello world 10</h1>
                <img src="/images/nodejs.jpeg" alt=""/>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        object: state
    }
}, null)(App)