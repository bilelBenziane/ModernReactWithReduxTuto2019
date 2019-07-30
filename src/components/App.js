import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    async onSearchSubmit(term){
        console.log(term);
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers:{
                Authorization: 'Client-ID aadfdca470a65a23bdbb289195793993af1d7e2eb348d8ce2161e4e668eaf0bc'
            }
        });
        console.log(response.data.results);
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    };
}
export default App;