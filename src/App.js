import React, { Component } from "react";
import FriendCard from "../src/components/FriendCard";
import Wrapper from "../src/components/Wrapper";
import Title from "../src/components/Title";
import Counter from "../src/components/Counter/Counter";
import friends from "../src/friends.json";
import "./App.css";


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
    count: 0
  };


  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };
//select friend function
//get the id of the friend then this.setstate friends.id=update to true
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
      handleIncrement={this.handleIncrement}
      />
      <Wrapper>
        <Title>Friends List</Title>
       
        {this.state.friends.map(friend => (
          <FriendCard
            //removeFriend={this."selectfriend"}
            count={this.state.count}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleShuffle={this.handleShuffle}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
