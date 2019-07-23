import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    state = { lat: null, errorMessage: '' };//  this is equivalent to constructor initialized state 

    componentDidMount(){
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(){
        console.log('My component was just updated');
    }

    render() {
        if(this.state.errorMessage && !this.state.latitude){
            return (
                <div>Error : {this.state.errorMessage} </div>
            );
        }
        if(!this.state.errorMessage && this.state.latitude){
            return (
                <div>Latitude : {this.state.latitude}</div>
            );
        }
        return (
            <div>Loading! </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));