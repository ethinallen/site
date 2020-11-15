import React from 'react';

const SearchBar = ({keyword, setKeyword}) => {
  return (
    <div className="ui center aligned middle aligned grid" style={{height: "80vh"}}>
        <div className="column" style={{maxWidth: "450px"}}>
            <div className="ui segment">
                <form className="ui large form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>
                            Enter Your Steam ID
                        </label>
                        <input type="text" value={this.state.id} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <button type="submit" className="ui button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default SearchBar
