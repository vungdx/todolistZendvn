import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

export default class Control extends Component {
    constructor(props){
        super(props);
        this.state = {
       }
      }

    onToggleForm =()=>{
        this.props.onToggleForm();
    }
    render() {
        let eleButton= <button onClick= {this.onToggleForm} type="button" className="btn btn-info btn-block">Add Task</button>
        if(this.props.isShowForm===true){
            eleButton =<button onClick= {this.onToggleForm} type="button" className="btn btn-danger btn-block">Close Task</button>
        }
        return (
            <div className="row">
                <Search onSearch ={this.props.onSearch}/>
                <Sort onSort ={this.props.onSort} orderDir ={this.props.orderDir} orderBy={this.props.orderBy} />
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    {eleButton}
                </div>
            </div>
        )
    }
}