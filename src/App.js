import React from 'react';
import './App.css';
import UserForm from './components/UserForm.component';
import UserData from './components/UserData.component';
import FormikForm from './components/FormikForm.component';

class App extends React.Component {
  constructor(){
    super();
    this.state={userData:{}}
  }
  componentDidUpdate(prevState){
    if(prevState.userData!==this.state.userData){
      return true;
    }
    return false;
  }
  onHandleSubmit = userData =>{
    console.log(userData);
    this.setState({
      userData
    });
    
  }
  render(){
    console.log(this.state);
    const {userData} = this.state;
    console.log(userData);
    return (
      <div className="App">
        <UserForm onHandleSubmit={this.onHandleSubmit}/>
           <UserData userData={userData}/>
        <FormikForm/>
      </div>
    );
  }
}

export default App;
