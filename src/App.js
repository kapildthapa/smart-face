import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particle from './components/Particles/Particles';
import Clarifai from 'clarifai';
import './App.css';

// const app = new Clarifai.App({
//   apiKey: 'b691f6d8671d495eb1e0083d878e3af7'
// });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    // app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    //   function(response) {
    //     console.log(response);
    //   },
    //   function(err) {

    //   }
    // );
  }

  render() {    
    return (
      <div className="App">
        <Particle className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
