import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import  "../components/Card/Card.css";



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

  render() {
    return (
      <div className="container" id="card-container">
        <div className="row text-center">

          {this.state.cuddlydata.map(data => (
                    <Card
                      key={data.link}
                      urgent={data.urgent}
                      name={data.name}
                      link={data.link}
                      img={data.img}
                      desc={data.desc}
                      loc={data.loc}
                      donationsneeded={data.donationsneeded}
                      itemsneeded={data.itemsneeded}

                    />
                  ))}
      </div>

      </div>
    );
  }
}

export default Donate;
