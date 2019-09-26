import React from 'react'
import {Redirect} from 'react-router-dom'

class Home extends React.Component {
    state = {
        toSciFi: false,
        toWestern: false
    }

    handleSciFiClick = () => {
        this.setState({ toSciFi: true })
    }
    
    handleWesternClick = () => {
        this.setState({ toWestern: true })
    }

    render() {
        if (this.state.toSciFi) {
            return <Redirect to="/scifi" />
        } else if (this.state.toWestern) {
            return <Redirect to="/westerns" />
        }
        return(
            <div>
                <h1>Welcome to Movie Page</h1>
                <button onClick={() => this.handleSciFiClick()}>Go to SciFi</button>
                <button onClick={() => this.handleWesternClick()}>Go to Westerns</button>
            </div>
        )
    }
}

export default Home