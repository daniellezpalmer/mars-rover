import React, {Component} from 'react';

export default class ImageDisplay extends Component {
    render() {
let imagesArray = this.props.images;

let pic = {
  display:"flex",
  justifyContent:"center"
}

let pics = imagesArray.map((pic, index) => {

let flex = {
  display:"flex",
  borderStyle:"solid",
  backgroundColor:"white",
  width: 320
}

let pics = {
height: 300,
width: 300,
margin: 10
}

  return (
    <div style={flex}>
    <div key={index}>
          <img style={pics} src={pic.img_src} alt="mars rover"></img>
        </div>
      </div>
  )
});
  return (
    <div style={pic}>{pics}</div>
  );
  }
}
