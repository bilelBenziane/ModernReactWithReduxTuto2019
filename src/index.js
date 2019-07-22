// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
// Create a react component 
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Dandan"/>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);