"use strict";

import React, { Component } from "react";
import catgoryUISchema from "./catagori/uischema.json";
import catgorySchema from "./catagori/schema.json";
import catgoryData from "./catagori/data.json";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers
} from "@jsonforms/material-renderers";

class Component3 extends Component {
  constructor(props) {
    super(props);

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

        <JsonForms
          schema={catgorySchema}
          uischema={catgoryUISchema}
          data={catgoryData}
          renderers={materialRenderers}
        />
        
      </div>
    );
  }
}

export default Component3;
