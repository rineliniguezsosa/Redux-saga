/* eslint-disable react-refresh/only-export-components */
import { Component } from 'react'
import { connect } from 'react-redux'
import { decrementby,increment } from './store'; //métodos del reducer ó slice
import { Countervalue,Counterprops } from '../src/store/types/Datatypes'

class App extends Component<Counterprops>{

  handleincrement = () =>{
    this.props.increment();
  }

  handledecrement = () =>{

  }

  render(){
    return (
      <>
        <p>contador:{this.props.value}</p>
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
