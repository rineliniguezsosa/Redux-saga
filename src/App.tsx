/* eslint-disable react-refresh/only-export-components */
import { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component{
  render(){
    return (
      <>
        <button>Aumentar</button>
      </>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
