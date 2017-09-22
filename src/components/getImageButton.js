import React, {Component} from 'react';

export default class GetImageButton extends Component {
    render() {

      let button = {
        display:"flex",
        justifyContent:"Center"
      }

      let btn = {
        borderStyle:"solid",
        borderColor:"grey",
        borderRadius: 4,
        fontFamily:"Open Sans Condensed",
        backgroundColor:"white",
        color:"grey",
        justifyContent:"center"
      }

      return (
        <div style={button}>
          <button style={btn} onClick={this.props.click}> Submit </button>
        </div>
    );
  }
}
