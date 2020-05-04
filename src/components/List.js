import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {

    render() {
        const items = this.props.items;
        const eleItems = items.map((item, index) =>{
            return(
                <Item onEdit ={this.props.onEdit} onDelete ={this.props.onDelete} key={index} item={item} index={index} />
            )
        })
        return (
            <div className="row">
                <div className="panel panel-success">
                    <div className="panel-heading">List Task</div>
                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">STT</th>
                                <th >Task</th>
                                <th style={{ width: '20%' ,textAlign: 'left'}} className="text-center">Level</th>
                                <th style={{ width: '20%' ,textAlign: 'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eleItems}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}