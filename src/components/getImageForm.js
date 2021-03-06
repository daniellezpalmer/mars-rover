import React, {Component} from 'react';
import ImageDisplay from './imageDisplay.js';
import GetImageButton from './getImageButton';
import apiKey from './apiKey.js';
const API_KEY = apiKey;

export default class GetImageForm extends Component {
  constructor(props) {
    super(props);

    this.fetchRoverImage = this.fetchRoverImage.bind(this);
    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);

    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: ""
    }
  }

  handleRover(e) {
    this.setState({rover: e.target.value});
  }

  handleCamera(e) {
    this.setState({camera: e.target.value});
  }

  handleSol(e) {
    this.setState({sol: e.target.value});
  };

  fetchRoverImage() {
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl).then(results => results.json()).then(data => {
      this.setState({images: data.photos});
    });
  }

  render() {

    let around = {
      display:"flex",
      justifyContent:"center",
      flexWrap:"nowrap"
    }


    let formdivs = {
      borderStyle:"solid",
      borderColor:"grey",
      padding: 20,
      margin: 10,
      alignContent:"center",
      fontFamily:"Open Sans Condensed",
      backgroundColor:"white",
      fontSize: 30
    }

    let options = {
      fontFamily:"Open Sans Condensed"
    }


    return (
      <div>
        <div style={around}>
        <form>
          <div style={formdivs}>
            <label htmlFor="rover">Rover </label>
            <select onChange={this.handleRover} id="rover">
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
          </div>
          <div style={formdivs}>
            <label htmlFor="camera">Camera Type </label>
            <select onChange={this.handleCamera} id="rover">
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          </div>
          <div style={formdivs}>
            <label htmlFor="sol">Martian Sol: 1000-2000 </label>
            <input style={options} type="number" onChange={this.handleSol} max="2000" min="1000"/>
          </div>
        </form>
      </div>
          <GetImageButton click={this.fetchRoverImage}/>
          <ImageDisplay images={this.state.images}/>
      </div>
    )
  }
}
