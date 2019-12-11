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

    this.state = {
      standalonePersonalData: personaData
    };

    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  isValidated() {
      const isValid = document.getElementsByClassName('Mui-error');
        return isValid.length > 0?false:true;
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.standalonePersonalData)}

        <JsonForms
          schema={personalSchema}
          uischema={personalUISchema}
          renderers={materialRenderers}
          data={personaData}
          onChange={({ errors, data }) =>
            this.setState({
              standalonePersonalData: data
            })
          }
        />
      </div>
    );
  }
}

export default Component2;
