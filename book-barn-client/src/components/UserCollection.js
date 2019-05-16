import React, {Component} from 'react';

export class CardList extends Component {
    constructor() {

        super()
    
        this.state = {
          //cards will be an array filled with objects sent from the server
          cards: [],
          name: '',
          cardid: '',
          imageuripng: '',
          artist: '',
          cmc: '',
          rarity: '',
          power: '',
          price: 0,

          isUpdated:false
          }
      }



    populateCards() {
    console.log("Generating card collection!")
    let url = 'http://localhost:8080/api/cards'
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log("setting the state.")
        this.setState({
        //Sets value of the cards array in the state to the json
        cards: json
            })
        })
    }

    componentDidMount() {
        this.populateCards()
    }

    //   componentDidUpdate() {

    //     if(!this.state.isUpdated){
        
    //     let url = 'http://localhost:8080/api/books'
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log("setting the state.")
    //       this.setState({
    //         books: json,
    //         isUpdated:true

    //          })
    //         } 
    //         )
    //     }
    // }


    render() {
        let cards = this.state.cards
        let cardItems = cards.map((card) => {

          return (
            <li>{card.name}
            <p></p><img src={card.imageuripng}/> - <button onClick={() => this.deleteClick(card)}>Delete</button></li>
          )
        })
        return (
            <div>
            <h1>Your Cards: </h1>
            <ul>{cardItems}</ul>
            </div>
        )
    }
}