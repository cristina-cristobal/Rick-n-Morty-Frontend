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
      myFavorites: [],
      selectedCharacters: []
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

  removeFromFavorites = (characterObj) => {
    let myFavoritesCopy = [...this.state.myFavorites]
    this.setState({
      myFavorites: [...myFavoritesCopy.filter(character => character !== characterObj)]
    })
  }

  // will only render characters in CharacterContainer that are not in this.state.myFavorites
  getAllCharacters = () => {
    return this.state.allCharacters.filter(character => !this.state.myFavorites.includes(character))
  }

  // If we want to create a search bar, use code below
  // getFilteredCharacters = () => {
  //   return this.getAllCharacters().filter(character => character.name.includes(this.state.searchTerm))
  // }

  addToSelected = (character) => {
    console.log('selecting character #', character.id)
    let selectedCharactersCopy = [...this.state.selectedCharacters]
    this.setState({
      selectedCharacters: [...selectedCharactersCopy, character]
    })
  }

   render(){
     // debugger
      return(
        <div>
          <Header />
          <FavoritesBody
          myFavorites={this.state.myFavorites}
          handleCardClick={this.removeFromFavorites}
          addToSelected={this.addToSelected}
          selectedCharacters={this.state.selectedCharacters}
          characters={this.state.allCharacters}
          />
          <HomeBody
          allCharacters={this.getAllCharacters()}
          handleCardClick={this.addToFavorites}
          selectedCharacters={this.state.selectedCharacters}
          addToSelected={this.addToSelected}
          characters={this.state.allCharacters}
          />
        </div>
      )
   }
}

export default App