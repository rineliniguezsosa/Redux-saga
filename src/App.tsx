/* eslint-disable react-refresh/only-export-components */
import { Component } from 'react'
import { connect } from 'react-redux'
import { decrementby,increment } from './store'; //métodos del reducer ó slice


class App extends Component{
  render(){
    return (
      <>
        <button onClick={this.handleincrement}>Aumentar</button>
        <button>Decrementar</button>
      </>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
