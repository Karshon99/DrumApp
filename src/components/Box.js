import React from "react";
class Box extends React.Component {
  render() {
    const { text, audio } = this.props;

    return (
      <div className="box active">
        {text}
        <audio src={audio} className="clip" id={text} />
      </div>
    );
  }
}

export default Box;
