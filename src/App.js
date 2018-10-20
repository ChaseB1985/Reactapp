import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // state = {
  //   count: 0
  // };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            //count={this.state.count}
            //handleIncrement={this.handleIncrement}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            realName={friend.realName}
            quote={friend.quote}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
