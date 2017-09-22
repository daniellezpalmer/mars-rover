import React, {Component} from 'react';
import stars from "../images/stars.jpg";
import GetImageForm from './getImageForm.js'


class App extends Component {
  render() {

    let title = {
      display:"flex",
      justifyContent:"center",
      fontFamily:"Open Sans Condensed",
      // alignText:"center",
      fontSize:35,
      backgroundColor:"white"
    }

    let image = {
      backgroundImage: `url(${stars})`,
      position:"cover",
      height: 5000,
      fontSize: 50
    }

    return (
      <div style={image}>
        <div style={title}>
        MARS ROVER APP
      </div>
        <GetImageForm />
      </div>
    )
  }
}

export default App;
