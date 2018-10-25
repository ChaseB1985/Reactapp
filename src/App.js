import React, { Component } from "react";
import FriendCard from "../src/components/FriendCard";
import Wrapper from "../src/components/Wrapper";
import Title from "../src/components/Title";
import Counter from "../src/components/Counter/Counter";
import friends from "../src/friends.json";
import "./App.css";
import Nav from "./components/Nav/Nav";



function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    topScore:0,
    rightWrong: "",
    clicked:[],
  };

handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1){
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked(id) });
  } else {
    this.handleReset();
  }
};
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    const newScore = this.state.count + 1;
      this.setState({
      count: newScore,
      rightWrong: ""
    });
    if(newScore >= this.state.topScore) {
      this.setState({topScore: newScore});
    } else if (newScore === 12) {
      this.setState({ rightWrong: "you win"});
    }
    this.handleShuffle();
  
  };
//function to reset on click
  handleReset = () => {
    this.setState({
      count:0,
      clicked:[]
    });
    this.handleShuffle();
  };
    handleShuffle = () => {
      let shuffledFriends = shuffleFriends(friends);
      this.setState({ friends: shuffledFriends });
    };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Counter 
      count={this.state.count}
      />
      <Wrapper>
      <Title>30 Rock Clicky Game</Title>
      <Nav
      count={this.state.count}/>
      
      {this.state.friends.map(friend => (
        <FriendCard
        handleIncrement={this.handleIncrement}
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        handleShuffle={this.handleShuffle}
        updateFriend={this.updateFriend}
        handleReset={this.handleReset}
        handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
      </div> 
    );
  }
}

export default App;
