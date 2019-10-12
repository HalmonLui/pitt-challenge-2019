import React, { Component } from "react";
import Webcam from "react-webcam";

const avatarFallbackImage =
  "https://s3.amazonaws.com/onename/avatar-placeholder.png";
const john = "https://i.imgur.com/wJP9wFE.png";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.setRef = React.createRef();
    this.state = {
      person: {
        name() {
          return "Anonymous";
        },
        avatarUrl() {
          return john;
        }
      },
      username: "",
      newStatus: "",
      statuses: [],
      statusIndex: 0,
      isLoading: false,
      pictures: [],
      newPicture: null,
      pictureIndex: 0,
      screenshot: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("made it");
    var screenshot = this.webcam.getScreenshot();
    screenshot = screenshot.slice(23);
    this.setState({ screenshot: screenshot }, () => {
      console.log(this.state.screenshot);
      this.saveNewImage(this.state.screenshot);
    });
  }

  render() {
    const { handleSignOut } = this.props;
    const { person } = this.state;
    const { username } = this.state;

    const Example = ({ data, name }) => (
      <img src={`data:image/jpeg;base64,${data}`} id={name} />
    );
    const videoConstraints = {
      width: 340,
      height: 340,
      facingMode: "user"
    };

    return (
      <div className="main">
        <div className="imageSection">
          <a onClick={this.handleClick} id="cameraButton">
            <Webcam
              audio={false}
              height={320}
              ref={node => (this.webcam = node)}
              screenshotFormat="image/jpeg"
              width={320}
              videoConstraints={videoConstraints}
            />
          </a>
        </div>
      </div>
    );
  }

  handleNewImageChange(event) {
    var files = event.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = function(readerEvt) {
        var binaryString = readerEvt.target.result;
        var binaryResult = btoa(binaryString);
        this.setState({ newPicture: binaryResult });
      }.bind(this);

      reader.readAsBinaryString(file);
    }
  }
}
