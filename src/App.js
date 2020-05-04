import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import data from './components/mock/data';
import { remove, reject, filter ,includes, orderBy as func_orderBy} from 'lodash';

import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      isShowForm: false,
      itemSelected: null,
      strSearch: '',
      orderBy: 'name',
      orderDir: 'asc'
    }
  }
  onToggleForm = () => {
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
    })
  }
  onCancel = () => {
    this.setState({
      isShowForm: false
    })
  }
  onDelete = (id) => {
    let { items } = this.state;
    remove(items, (item) => {
      return item.id === id;
    })
    this.setState({
      items: items
    })
  }
  onSubmit = (item) => {
    let { items } = this.state;
    let id = null;
    if (item.id !== '') {//edit
      items = reject(items, { id: item.id });
      id = item.id;
    } else {//add
      id = uuidv4();
    }
    items.push(
      {
        id: id,
        name: item.name,
        level: +item.level
      }
    )
    this.setState({
      items: items,
      isShowForm: false
    })
  }
  onEdit = (item) => {
    this.setState({
      itemSelected: item,
      isShowForm: true
    })
  }
  onSearch = (text) => {
    this.setState({
      strSearch: text
    })
  }
  onSort =(orderBy, orderDir)=>{
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }
  render() {
    let { isShowForm } = this.state;
    let eleShowForm = null;

    let itemsOrgin = [...this.state.items];
    let items = [];
    //Tìm kiếm
    items = filter(itemsOrgin, (item) =>{
      return includes(item.name,this.state.strSearch)
    })
    //Sort
    items = func_orderBy(items, [this.state.orderBy], [this.state.orderDir]);
    if (isShowForm) {
      eleShowForm = <Form itemSelected={this.state.itemSelected} onSubmit={this.onSubmit} onCancel={this.onCancel} />;
    }
    return (
      <div className="App">
        <Title />
        <Control onSort={this.onSort} orderBy={this.state.orderBy} orderDir ={this.state.orderDir}  onSearch={this.onSearch} isShowForm={this.state.isShowForm} onToggleForm={this.onToggleForm} />
        {eleShowForm}
        <List onEdit={this.onEdit} onDelete={this.onDelete} items={items} />
      </div>
    );
  }
}

export default App;
