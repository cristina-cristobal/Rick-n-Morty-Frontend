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

  //better name is getAllCharsNotInFavorites
  //this method gets passed in as a prop in CharacterContainer (as allCharacters={this.allCharacters}). This function gets all characters not in favorites. The two are dependent upon one another.
  getAllCharacters = () => {
    // debugger
    return this.state.allCharacters.filter(character => (!this.state.myFavorites.includes(character)))
  }

  //wrote the add behavior here since when we click the add button on the charCard, we want it to be displayed in the FavoritesContainer or the CharacterContainer and this file (App) in the parent of both

  //this updates the state by passing in 'character,' which is a prop I put on each card. In the return method below, I named my prop that passes this function in to addChar. In this file, I pass this method as addChar={this.addCharToFavorites}. In HomeBody, CharacterContainer, and CharacterCard, I refer the method by its props name: this.props.addChar

  addCharToFavorites = (character) => {
    if(this.state.myFavorites.length < 5){
      this.setState({
        myFavorites: [...this.state.myFavorites, character]
      })
    } else {
      alert('You can only have a max of 5 favorite characters!')
    }
  }

  //change the state of myFavorites to remove my character. This makes a copy of the myFavorites array and adds a filter to it. Within the filter I do an arrow function wherein the (card (my obj in the arrow func) => is such that my card is not equal to the character arg)
  removeCharFromFavorites = (character) => {
    this.setState({
      myFavorites: [...this.state.myFavorites.filter(card => card !== character)]
    })
  }

   render(){
     // debugger
      return(
        <div>
          <Header />
          <FavoritesBody
            myFavorites={this.state.myFavorites}
            handleBtn={this.removeCharFromFavorites}/>
          <HomeBody allCharacters={this.getAllCharacters()}
            backview={this.state.backview}
            handleBtn={this.addCharToFavorites}
            myFavorites={this.state.myFavorites}/>
        </div>
      )
   }
}

export default App

//pass this.state.myFavorites down to char card. we want that accessible to charcard so we can check if the card is included in the myFavorites array. If it is, display btn text should be Remove. If it's not, display btn text should be add.
//once that's accessible to cards in the favorites and cards in the charcontainer, then we can pass the add and the remove functions down each side. Since my button will have two actions being handled on the click, I give it a generic handleBtn prop name. Then, I passed the remove function as this.removeCharFromFavorites, then down the favorites tree as this.props.handleBtn. Since the card on the homeBody side is the one that needed the addCharToFavorites function, I passed it down that component branch as handleBtn={this.addCharToFavorites} in app, then down the branch as this.props.handleBtn
