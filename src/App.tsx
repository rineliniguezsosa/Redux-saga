/* eslint-disable react-refresh/only-export-components */
import { Component } from 'react'
import { connect } from 'react-redux'
import { decrementby,increment } from './store'; //métodos del reducer ó slice
import { Countervalue } from '../src/store/types/Datatypes'

class App extends Component{

  handleincrement = () =>{

  }

  handledecrement = () =>{

  }

  render(){
    return (
      <>
        <button onClick={this.handleincrement}>Aumentar</button>
        <button onClick={this.handledecrement}>Decrementar</button>
      </>
    )
  }
}

const mapStateToProps = (state:Countervalue) =>({
  value:state.counter.value,
})

const mapDispatchToProps = {
  increment,
  decrementby
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
