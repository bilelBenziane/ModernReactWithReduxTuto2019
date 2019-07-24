import React from 'react';

class SearchBar extends React.Component{

    onInputChange(event){
        console.log(event.target.value);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search </label>
                        <input  type="text" onChange={this.onInputChange}/> {/* passing callback to onChnageProp without 
                        parenthesis to avoid being executed on rendering 
                        there is also onClick...*/}
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;