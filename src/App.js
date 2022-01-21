import React,{ Component } from 'react';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoute from './routes/AppRoute';


class App extends Component {

  render(){
    
    return (
        <div className="App">
          <AppRoute></AppRoute>
        </div>
  )
  }
}

export default App;
