import React, { Component } from 'react';
import './App.css';
import contacts from "./contacts.json";
import Contact from "./Contact.js"


let contactArr = contacts.filter((el, index) => {
  if (index < 5) {
    return el;
  }
})
class App extends Component {

  state = {
    actors: contactArr,

  }

  deleteContact = (contactId) => {
    this.setState({
        actors: this.state.actors.filter(actor => {
          return actor.id !== contactId;
        }) 
    })
};

  addRandomContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    let updatedArr = [...this.state.actors, randomContact]

    this.setState({
      actors: updatedArr
    })
  }
  sortByName = () => {
    function compare(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    let sortedArr = this.state.actors.sort(compare);


    console.log(this.state.actors.sort(compare))

    this.setState({
      actors: sortedArr
    })
  }

  sortByPop = () => {
    function comparePop(a, b) {
      // Use toUpperCase() to ignore character casing
      const popularityA = a.popularity
      const popularityB = b.popularity

      let comparisonPop = 0;
      if (popularityA > popularityB) {
        comparisonPop = -1;
      } else if (popularityA < popularityB) {
        comparisonPop = 1;
      }
      return comparisonPop;
    }

    let sortedPopArr = this.state.actors.sort(comparePop);


    console.log(this.state.actors.sort(comparePop))

    this.setState({
      actors: sortedPopArr
    })
  }

  render() {
    console.log(this.state.actors)
    return (
      <div className="App">

        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPop}>Sort by Popularity</button>
        <Contact actors={this.state.actors} deleteContact={this.deleteContact} />

      </div>
    );
  }
}

export default App;
