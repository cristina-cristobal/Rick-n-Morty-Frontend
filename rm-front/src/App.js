import React from 'react';
import Header from './containers/header'
import HomeBody from './containers/HomeBody'

const URL = 'https://rickandmortyapi.com/api/character/'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      allCharacters: []
    }
  }

  componentDidMount(){ //dblchk with Tina to add localhost
    fetch(URL)
    .then(res => res.json())
    .then(allCharacters => {
      this.setState({
        allCharacters: allCharacters.results
      })
    })
  }

   render(){
     // debugger
      return(
        <div>
          <Header />
          <HomeBody allCharacters={this.state.allCharacters}/>
        </div>
      )
   }
}

export default App
