import React, {Component} from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
 apiKey: '8fb32017da154d1ab5c4fd7bbb192ff0'
});


const particles= {
  particles: {
    number:{
      value:150,
      density:{
        enable:true, 
        value_area:800
      }
    }
  }
}

const initialState = {
  input:'',
  imageUrl:'',
  box:{},
  route:'signIn',
  user:{
    id:'',
    name:'',
    email:'',
    joined:''
  }
}

class App extends Component {

  constructor(){
    super()
    this.state = initialState;
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000')
  //   .then(response => response.json())
  //   .then (console.log)
  // }

loadUser =(data) => {
  this.setState({user: {
        id:data.id,
        name:data.name,
        email:data.email,
        joined:data.joined 
      }

  })
}

calculateFaceLocation =(data) =>{
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
  //console.log (width,height);
}

displayfaceBox = (box) => {
  //console.log(box);
  this.setState({box:box});
}

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
  app.models
    .predict( 
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(response => this.displayfaceBox(
      this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
}

onRouteChange = (route) => {
  this.setState({route : route});
}

  render() {
    return (
      <div className="App">
         <Particles className='particles' 
            params={particles}
          />
       { this.state.route === 'home'
       ? <div>
           <Navigation onRouteChange = {this.onRouteChange}/>
           <Logo />
           <ImageLinkForm 
            onInputChange= {this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}
           />
      
          <FaceRecognition 
            box={this.state.box}
            imageUrl={this.state.imageUrl}
          />
         </div> 
          :(  this.state.route === 'signIn'
             ? <SignIn loadUser = {this.loadUser} 
                       onRouteChange = {this.onRouteChange} />
             : <Register loadUser = {this.loadUser} 
                         onRouteChange = {this.onRouteChange} 
               />
           )
         
        }
      </div>
    );
  }
}

export default App;
