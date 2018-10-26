import React, { Component } from "react";
import FriendCard from "../src/components/FriendCard";
import Wrapper from "../src/components/Wrapper";
import Title from "../src/components/Title";
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
  console.log("herererererer")
  console.log(id)
  console.log(this.state.clicked)
  console.log("length of clicked")
  console.log(this.state.clicked.length)

  
 
  if (this.state.clicked.length === 0) {
    let tempArray = this.state.clicked
    tempArray.push(id)
    this.setState({ clicked: tempArray, count: 1 })
    this.handleShuffle();
    console.log(this.state)
  } else if (this.state.clicked.indexOf(id) > -1){
    alert("the game is over")
    // update highscore to current count values
    this.setState({topScore: this.state.count})
    // update count to equal 0
    this.handleReset();

    // reset game

  } else if (this.state.clicked.indexOf(id) === -1) {
    //console.log("New person clicked ad me to the array and increase count by 1")
      let tempArray = this.state.clicked
    tempArray.push(id)
    let count = this.state.count + 1
    this.setState({ clicked: tempArray, count: count  })
    // console.log("current score")
    // console.log(this.state.count)
    if (this.state.clicked.length === 12) {
        alert("you win")
      }
    this.handleShuffle();
    }  
  
  
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
 
  render() {
    return (
      <div>
      
      <Wrapper>
      <Title>30 Rock Clicky Game</Title>
      <Nav
      count={this.state.count}
      topScore={this.state.topScore}/>
      
      {this.state.friends.map(friend => (
        <FriendCard
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
