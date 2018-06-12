import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  t1=(a)=>{
    console.log(a)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Callnote />
        <Test name={this.t1}/>
      </div>
    );
  }
}

class Test extends Component{
  state={
    value:''
  }
  map1=(e)=>{
    e.preventDefault();

    this.props.name(this.state);
    this.setState({
      value:''
    })
  }
  changea=(e)=>{
    this.setState({
      value:e.target.value
    })
    console.log(this.state)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.map1}>
          <input type='text' 
          value={this.state.value} 
          onChange={this.changea}
          />
          <button type='submit'>보여라</button>
        </form>
      </div>
    )
  }
}


class Contact extends Component{
  render(){
    return(
      <div>
        {this.props.list.name} {this.props.list.num}
      </div>
    )
  }
}
class Callnote extends Component{
  state={
    peoplelist:[
      {name:'fuckreact',num:'fuck-fuck-fuck'},
      {name:'fuckreact',num:'fuck-fuck-fuck'},
      {name:'fuckreact',num:'fuck-fuck-fuck'},
      {name:'fuckreact',num:'fuck-fuck-fuck'},
      {name:'fuckreact',num:'fuck-fuck-fuck'},
    ],
    count:1
  }
  어려워 =()=>{
    this.setState({
      peoplelist:[
        ...this.state.peoplelist,
        {
          name:'wow fuck!!react fuck!',num:'fuck'
        }
      ]
    })
  }

  어이없다=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  어이읍다=()=>{
    this.setState({
      count:this.state.count-1
    })
  }

  render(){
    const takelist = (data)=>{
      return data.map((list,key)=>{
        return <Contact list={list} key={key}/>
      })
    }
    return(
      <div>
        {takelist(this.state.peoplelist)}
        <button onClick={this.어려워}>추가</button>
        <h1>{this.state.count}</h1>
        
        <button onClick={this.어이없다}>+</button>
        <button onClick={this.어이읍다}>-</button>
      </div>
    )
  }
}

export default App;
