import React, { Component } from 'react';
export default class Item extends Component {
    constructor(props){
        super(props);
        this.state ={
        }
    }
    onDelete = () =>{
        this.props.onDelete(this.props.item.id);
    }
    onEdit =()=>{
        this.props.onEdit(this.props.item);
    }
    render() {
        let {item} =this.props;
        let eleLevel =<span className="label label-success">Easy</span>;
        if(item.level===1){
            eleLevel = <span className="label label-warning">Medium</span>
        }
        else if(item.level===2){
            eleLevel = <span className="label label-danger">Hard</span>
        }
        
        return (
            <tr>
                <td className="text-center">{this.props.index+1}</td>
                <td  style={{ textAlign: 'left' }} >{item.name}</td>
                <td  style={{ textAlign: 'left' }} className="text-center">{eleLevel}</td>
                <td>
                    <button onClick= {this.onEdit} type="button" className="btn btn-warning">Edit</button>
                    <button onClick = {this.onDelete} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}