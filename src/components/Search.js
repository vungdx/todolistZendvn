import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch : ''
        }
    }

    onSearch = () => {
        this.props.onSearch(this.state.strSearch);
    }
    onClear =()=>{
        this.setState({
            strSearch : ''
        })
        this.props.onSearch('');
    }
    onChange =(event)=>{
        this.setState({
            strSearch: event.target.value
        })
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input onChange={this.onChange} value={this.state.strSearch} type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button onClick={this.onSearch} className="btn btn-info" type="button">Search</button>
                        <button onClick={this.onClear} className="btn btn-danger" type="button">Reset</button>
                    </span>
                </div>
            </div>
        )
    }
}