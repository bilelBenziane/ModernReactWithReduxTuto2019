import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat:position.coords.latitude});
            },
            err => {
                this.setState({
                    errorMessage: err.message
                });
            }
        );
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