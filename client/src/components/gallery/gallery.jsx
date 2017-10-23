import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";


class Gallery extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="gallery-container">
        Gallery
      </div>
    );
  }
}

export { Gallery };
