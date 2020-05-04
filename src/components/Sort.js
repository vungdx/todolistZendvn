import React, { Component } from 'react';
export default class Sort extends Component {

    onSort(orderBy, orderDir){
        this.props.onSort(orderBy, orderDir);
    }
    render() {

        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li> <a onClick={()=> this.onSort('name', 'asc')} href=".#"  role="button">Name ASC</a></li>
                        <li><a onClick={ ()=> this.onSort('name', 'desc')} href=".#" role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a onClick={()=> this.onSort('level', 'asc')} href=".#"  role="button">Level ASC</a></li>
                        <li><a onClick={()=> this.onSort('level', 'desc')} href=".#" role="button">Level DESC</a></li>
                    </ul>
                    <span className="label label-success label-medium">{this.props.orderBy + "-" + this.props.orderDir}</span>
                </div>
            </div>
        )
    }
}