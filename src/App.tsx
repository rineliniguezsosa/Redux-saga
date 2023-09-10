import { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component{
  render(){
    return (
      <>
        <button>Agregar</button>
      </>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
