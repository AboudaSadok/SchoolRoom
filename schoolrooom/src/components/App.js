import React, { Component } from 'react';
import axios from 'axios';
import ROOT_URL from '../actions/consts';
import Person from '../containers/person';

class App extends Component{
  state = {
    persons:[]
  };

  setPersons = () => {
    axios.get(`http://localhost:8082/persons`).then((data) =>
      {
        //console.log('qsfdqefqfeqfeqfeq',data.data);
        var persons = data.data.map( (elt, index) =>
          <Person
            userName = { elt.userName }
            fullName = { elt.fullName }
            email = { elt.email }
          />
      );
      this.setState ({
        persons: persons
      });
      }
  );
  }


  render() {
    this.setPersons();
    return (

      <div>
        {this.state.persons}
      </div>

    );
  }
}

export default App;
