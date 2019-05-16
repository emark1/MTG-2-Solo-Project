import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

class App extends Component {
  constructor() {

    super()

    this.state = {

      cards: null,
      isUpdated:false
      
      }
  }

  componentDidMount() {
    this.populateCards()
  }

  populateCards() {
    let url = 'https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3 '
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log("setting the state.")
        console.log(json.data)
      this.setState({cards: json.data})
    })
  }

  addClick(card) {
    let book = {title: this.state.title, genre: this.state.genre, publisher: this.state.publisher, year: this.state.year, imageurl: this.state.imageurl}
    fetch('http://localhost:8080/add-card/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
    
}

  render() {
    const { cards } = this.state;
    if (cards == null) {
      return null;
    }
    
    let cards1 = this.state.cards
    let filtered = cards1.filter(card => card.image_uris);
    let cardItems = filtered.map((card) => {
    
      return (
        <li>{card.name} - {card.id}
        <p></p><img src={card.image_uris.png}/>
        <button onClick={() => this.addClick(card)}>Save to Collection</button>
        </li>
      )
    })

  return (
      <div className="App">
        <h1>HOME PAGE</h1>
        <Login />
        <ul>
        {cardItems}
        </ul>
        

      </div>
    )
  }
}

export default App;
