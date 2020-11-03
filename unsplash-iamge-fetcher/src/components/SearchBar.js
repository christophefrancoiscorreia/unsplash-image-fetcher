import React, { Component } from 'react'

export class SearchBar extends Component {
    onInputChange(e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field"> 
                    <label className="">Unsplash Image Searcher</label>
                    <input type="text" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar
