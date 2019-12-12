"use strict";

import React, { Component } from "react";
import personalSchema from "./personal/schema.json";
import personalUISchema from "./personal/uischema.json";
import personaData from "./personal/data.json";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers
} from "@jsonforms/material-renderers";

class Component2 extends Component {
  constructor(props) {
    super(props);

    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  isValidated() {
      console.log(this.props.standalonePersonalData);
      const isValid = document.getElementsByClassName('Mui-error');
        return isValid.length > 0?false:true;
  }

  render() {
    return (
      <div className="App">
        <JsonForms
          schema={personalSchema}
          uischema={personalUISchema}
          renderers={materialRenderers}
          data={this.props.getStore()}
          onChange={({ errors, data }) =>
           this.props.updateStore(data)
          }
        />
      </div>
    );
  }
}

export default Component2;
