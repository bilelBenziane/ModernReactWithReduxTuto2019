import React from 'react';

const SeasonDisplay = () => {
    Window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return <div>Ho there !</div>;
};

ReactDOM.render(<SeasonDisplay/>, document.querySelector('#root'));
