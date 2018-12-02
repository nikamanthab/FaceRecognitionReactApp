import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';



const app = new Clarifai.App({
 apiKey: 'a606b7e917814f2688a7d143e92aa2d9'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageURL:'',
      box:{},
      route: 'signin'
    }
  }

  calculateFaceLocation = (data)=>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("detectionimage");
    const width = image.width;
    const height = image.height;
    return{
      leftCol:clarifaiFace.left_col*width,
      topRow:clarifaiFace.top_row*height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:width-(clarifaiFace.bottom_row*height),
    }
  }

  displayFaceBox =(box)=>{
    console.log(box);
    this.setState({box:box});
  }

  onInputChange =(event)=>{
    console.log(event.target.value);
    this.setState({input:event.target.value});
  }

  onButtonClick =()=>{
    console.log("click");
    this.setState({imageURL:this.state.input}); 
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .then((err) => console.log(err));
  }

  onRouteChange =()=>
  {
    console.log("yes");
    this.state.route === 'signin'?
      this.setState({route:'home'}):this.setState({route:'signin'});
  }
  render() {
    return (
      <div className="App">
        <Particles className="particlesbg"/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route==='signin'?
          <Signin onRouteChange={this.onRouteChange}/>:
            <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange ={this.onInputChange} onButtonClick ={this.onButtonClick}/>
              <FaceRecognition box={this.state.box} imageURL = {this.state.imageURL}/>
            </div>
        }
      </div>
    );
  }
}

export default App;
