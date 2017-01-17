import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import Name from './Name/Name';
import Email from './Email/Email';
import Line from './Line/Line';
import Section from './Section/Section';
import * as firebase from 'firebase';



class App extends Component {

    constructor(){
        super();
        this.state={
            speed:10
        };
    }

    componentDidMount(){

        const rootRef = firebase.database().ref().child('react');
        const speedRef = rootRef.child('speed');
        speedRef.on('value', snap =>{
            // this.setState({
            //     speed: snap.
            // })
        })
        this.setState({
            speed:25
        })
    }

    render() {
        return (
        <div className="alex-port-app">
            <Name />
            <Email />
            <Line />
            <Section title="Design" color="red"/>
            <Section title="Code" color="blue"/>
            <Section title="Make" color="green"/>
            <Section title="Design" color="red"/>
            <Section title="Code" color="blue"/>
            <Section title="Make" color="green"/>

          </div>
    );
  }
}

export default App;
