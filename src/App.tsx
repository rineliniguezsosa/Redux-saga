/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react'
import { connect } from 'react-redux'
import { decrementby,getcatsfetch,increment } from './store'; //métodos del reducer ó slice
import { Counterprops } from '../src/store/types/Datatypes'

class App extends Component<Counterprops>{

  handleincrement = () =>{
    this.props.increment();
  }

  handledecrement = () =>{
    this.props.decrementby(1);
  }

  componentDidMount() { // ciclo de vida de los componentes 
    this.props.getcatsfetch()
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

const mapStateToProps = (state:any) =>({
  value:state.counter.value,
})

const mapDispatchToProps = {
  increment,
  decrementby,
  getcatsfetch
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
