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
    if (this.state.myFavorites.length < 6){
        this.setState({
          myFavorites: [...myFavoritesCopy, character]
        })
      } else {
        alert("You hit your limit! No more favorites for you!")
      }
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

  removeSelected = (character) => {
    this.setState({
      selectedCharacters: [...this.state.selectedCharacters.filter(char => char !== character)]
    })
  }

   render(){
     // debugger
      return(
        <div>
          <Header />
          <FavoritesBody
          favorites={this.state.myFavorites}
          handleCardClick={this.removeFromFavorites}
          addToSelected={this.addToSelected}
          selectedCharacters={this.state.selectedCharacters}
          characters={this.state.allCharacters}
          removeSelected={this.removeSelected}
          />
          <HomeBody
          allCharacters={this.getAllCharacters()}
          handleCardClick={this.addToFavorites}
          selectedCharacters={this.state.selectedCharacters}
          addToSelected={this.addToSelected}
          characters={this.state.allCharacters}
          removeSelected={this.removeSelected}
          favorites={this.state.myFavorites}
          />
        </div>
      )
   }
}

export default App
