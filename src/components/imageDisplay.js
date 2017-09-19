import React, {Component} from 'react';

export default class ImageDisplay extends Component {
    render() {
let imagesArray = this.props.images;
let pics = imagesArray.map((pic, index) => {
  return (
    <div key={index}>
          <img src={pic.img_src}></img>
        </div>
  )
});
  return (
    <div>{pics}</div>
  );
  }
}
