import React, { Component } from 'react';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_id: '',
      task_name: '',
      task_level: 0,
    }
  }
  componentDidMount(){
    let itemSelected = this.props.itemSelected;
    if (itemSelected !==null) {
      this.setState({
        task_id: itemSelected.id,
        task_name: itemSelected.name,
        task_level: itemSelected.level,
      })
    }
  }
  componentWillReceiveProps(nextProps){
    let itemSelected= nextProps.itemSelected;
    if (nextProps !==null) {
      this.setState({
        task_id: itemSelected.id,
        task_name: itemSelected.name,
        task_level: itemSelected.level,
      })
    }
  }
  onCancel = () => {
    this.props.onCancel();
  }
  onSubmit = (event) => {
    //Khi Form được submit, có id + tên + level => tạo ra 1 đối tượng => đẩy về thằng app.js
    let item = {
      id: this.state.task_id,
      name: this.state.task_name,
      level: this.state.task_level
    }
    this.props.onSubmit(item);
    event.preventDefault();
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-7 col-md-5">
          <form onSubmit={this.onSubmit} method="POST" className="form-inline">

            <div className="form-group">
              <label className="sr-only" >label</label>
              <input name='task_name' value={this.state.task_name} onChange={this.onChange} type="text" className="form-control" placeholder="Task Name" />
            </div>

            <div className="form-group">
              <label className="sr-only" >label</label>
              <select name="task_level" value={this.state.task_level} onChange={this.onChange} className="form-control" required="required" >
                Small
                <option value={0}>Easy</option>
                <option value={1}>Medium</option>
                <option value={2}>Hard</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <button onClick={this.onCancel} type="button" className="btn btn-default">Cancel</button>
          </form>
        </div>
      </div>
    )
  }
}