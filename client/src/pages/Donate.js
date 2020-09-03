import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";


class Donate extends Component {
  state={
    cuddlydata:[]
  }


  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadDogs();

  }

  loadDogs = () => {

    API.getCuddly()
      .then(res =>
        this.setState({
          cuddlydata: res.data
        })
      )
      .catch(err => console.log(err));
  };

  // handleBtnClick = event => {
  //   // Get the data-value of the clicked button
  //   const btnType = event.target.attributes.getNamedItem("data-value").value;
  //   // Clone this.state to the newState object
  //   // We'll modify this object and use it to set our component's state
  //   const newState = { ...this.state };
  //
  //   if (btnType === "pick") {
  //     // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
  //     newState.match = 1 === Math.floor(Math.random() * 5) + 1;
  //
  //     // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
  //     newState.matchCount = newState.match
  //       ? newState.matchCount + 1
  //       : newState.matchCount;
  //   } else {
  //     // If we thumbs down'ed the dog, we haven't matched with it
  //     newState.match = false;
  //   }
  //   // Replace our component's state with newState, load the next dog image
  //   this.setState(newState);
  //   this.loadNextDog();
  // };



  render() {
    return (
      <div className="container">
        <div className="row text-center mt-3">

          {this.state.cuddlydata.map(data => (
                    <Card
                      key={data.link}
                      urgent={data.urgent}
                      name={data.name}
                      link={data.link}
                      img={data.img}
                      desc={data.desc}
                      loc={data.loc}
                      donantionsneeded={data.donantionsneeded}
                      itemsneeded={data.itemsneeded}

                    />
                  ))}
      </div>
        {/* <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Thumbs up on any pups you'd like to meet!
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          Made friends with {this.state.matchCount} pups so far!
        </h1>
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That Pup Liked You Too!!!
        </Alert> */}
      </div>
    );
  }
}

export default Donate;
