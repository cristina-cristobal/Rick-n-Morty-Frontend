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
      selectedCharacters: [],
      userFavorites: []
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

    fetch('http://localhost:3000/favorites')
    .then(res => res.json())
    .then(favorites => {
      this.setState({
        userFavorites: favorites
      })
    })
  }

  // addToFavorites = (character) => {
  //   let myFavoritesCopy = [...this.state.myFavorites]
  //   if (this.state.myFavorites.length < 6){
  //       this.setState({
  //         myFavorites: [...myFavoritesCopy, character]
  //       })
  //     } else {
  //       alert("You hit your limit! No more favorites for you!")
  //     }
  //   }

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

// when you add the character to your list of favorites, this will post it on the backend
  postFavorite = (character) => {
    let favoriteJoin = {
      character_id: character.id,
      user_id: 1
    }

    fetch('http://localhost:3000/favorites', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(favoriteJoin)
    })
    .then(res => res.json())
    .then(favoriteObj => {
      this.setState({
        myFavorites: [...this.state.myFavorites, character],
        userFavorites: [...this.state.userFavorites, favoriteObj]
      })
    })
  }



  deleteFavorite = (character) => {
    fetch('http://localhost:3000/favorites/', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({character_id: character.id})
    })
    .then(res => res.json())
    .then(charObj => console.log(charObj))
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
          handleFavorite={this.deleteFavorite}
          />
          <HomeBody
          allCharacters={this.getAllCharacters()}
          handleCardClick={this.addToFavorites}
          selectedCharacters={this.state.selectedCharacters}
          addToSelected={this.addToSelected}
          characters={this.state.allCharacters}
          removeSelected={this.removeSelected}
          favorites={this.state.myFavorites}
          handleFavorite={this.postFavorite}
          />
        </div>
      )
   }
}

export default App
