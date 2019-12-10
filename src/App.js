import React, { useState, Fragment,useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import { person } from "@jsonforms/examples";
import {
  materialCells,
  materialRenderers
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import arraySchema from "./array/arraySchema.json";
import arrayUISchema from "./array/arrayUISchema.json";
import arraydata from "./array/data.json";
import catgoryUISchema from "./catagori/uischema.json";
import catgorySchema from "./catagori/schema.json";
import catgoryData from "./catagori/data.json";
import personalSchema from "./personal/schema.json";
import personalUISchema from "./personal/uischema.json";
import personaData from "./personal/data.json";
import axios from "axios";
import { Tabs, Tab } from '@material-ui/core';


function App() {
  const [standaloneData, setStandaloneData] = useState(arraydata);
  const [standaloneCategoryData, setStandaloneCategoryData] = useState(
    catgoryData
  );
  const [standalonePersonalData, setStandalonePersonalData] = useState(
    personaData
  );
  const [tabIdx, setTabIdx] = useState(0);
  const handleTabChange = useCallback(
    (event: any, newValue: number) => {
      setTabIdx(newValue);
    }
  );

  const getBaseUrl = url => `http://localhost:8080/api/${url}`;

  const handleSubmit = (url, data) => {
    console.log(data);
    console.log(url);
    console.log(getBaseUrl(url));

    // const url = `http://localhost:8080/api/`;

    // axios.post(getBaseUrl(url), standaloneData, {
    //   headers: {
    //     "Content-type": "application/json",
    //     "Accept": "application/json"      }
    // });
  };

  return (
    <Fragment>
      
      
      
      <Tabs value={tabIdx} onChange={handleTabChange}>
        <Tab label="Array" />
        <Tab label="Catagory" />
        <Tab label="Personal" />
      </Tabs>
      {tabIdx === 0 && (
            <div className="App">
            {JSON.stringify(standaloneData)}
            <JsonForms
              schema={arraySchema}
              uischema={arrayUISchema}
              data={standaloneData}
              renderers={materialRenderers}
              cells={materialCells}
              onChange={({ errors, data }) => setStandaloneData(data)}
            />
    
            <button onClick={e => handleSubmit("array", standaloneData)}>
              Submit
            </button>
          </div>
          )}
          {tabIdx === 1 && (
            <div className="App">
            {JSON.stringify(standaloneCategoryData)}
    
            <JsonForms
              schema={catgorySchema}
              uischema={catgoryUISchema}
              data={standaloneCategoryData}
              renderers={materialRenderers}
              onChange={({ errors, data }) => setStandaloneCategoryData(data)}
            />
            <button onClick={e => handleSubmit("category", standaloneCategoryData)}>
              Submit
            </button>
          </div>
          )}
           {tabIdx === 2 && (
            <div className="App">
            {JSON.stringify(standalonePersonalData)}
            <JsonForms
              schema={personalSchema}
              uischema={personalUISchema}
              renderers={materialRenderers}
              data={standalonePersonalData}
              onChange={({ errors, data }) => setStandalonePersonalData(data)}
            />
            <button onClick={e => handleSubmit("person", standalonePersonalData)}>
              Submit
            </button>
          </div>
          )}
    </Fragment>
  );
}

export default App;
