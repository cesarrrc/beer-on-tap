import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import ListBeers from './components/ListBeers'


class App extends Component {
  constructor(){
    super()

    this.state = {
      arrayOfBeer : [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    axios.get('https://api.punkapi.com/v2/beers')
      .then( res => {
        const arrayOfBeer = res.data
        this.setState({ arrayOfBeer })
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  filterSearch(term) {
    return (item) => {
      return(
        item.name.toLowerCase().includes(term.toLowerCase())
        )
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input
              name="searchTerm"
              type="text"
              value={this.state.searchTerm}
              onChange={(e) => {this.handleChange(e)}}
              placeholder="Search by Term: "
            >
            </input>
          </form>
        { this.state.searchTerm ?
          <ListBeers
            beer={this.state.arrayOfBeer.filter(this.filterSearch(this.state.searchTerm))}
          /> :
          <ListBeers beer={this.state.arrayOfBeer} />
        }
        </header>
      </div>      
    );
  }  
}

export default App;

{/* <ol>{this.state.arrayOfBeer.map((beer, index)=>{
  return(
    <BeerCard 
      key={index} 
      name={beer.name} 
      image_url={beer.image_url}
      abv={beer.abv}
      ibu={beer.ibu}
      description={beer.description} 
    />
  )
})}</ol> */}