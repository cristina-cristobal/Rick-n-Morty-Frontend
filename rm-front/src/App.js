import React from 'react';
import Header from './containers/header'
import HomeBody from './containers/HomeBody'
import FavoritesBody from './containers/FavoritesBody'

// const URL = 'https://rickandmortyapi.com/api/character/'
const URL = 'http://localhost:3000/characters'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      allCharacters: [],
      myFavorites: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(allCharacters => {
      // debugger
      this.setState({
        allCharacters: allCharacters
      })
    })
  }

  addToFavorites = (character) => {
    let myFavoritesCopy = [...this.state.myFavorites]
    this.setState({
      myFavorites: [...myFavoritesCopy, character]
    })
  }

   render(){
     // debugger
      return(
        <div>
          <Header />
          <FavoritesBody
          myFavorites={this.state.myFavorites}
          />
          <HomeBody
          allCharacters={this.state.allCharacters}
          handleCardClick={this.addToFavorites}
          />
        </div>
      )
   }
}

export default App
