import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    state = { lat: null, errorMessage: '' };//  this is equivalent to constructor initialized state 

    componentDidMount(){
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(){
        console.log('My component was just updated');
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.latitude){
            return (
                <div>Error : {this.state.errorMessage} </div>
            );
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return (
            <Spinner message="Please accept connection request" />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));