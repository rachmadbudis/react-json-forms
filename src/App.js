import React, { useState, Fragment, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
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
import { Tabs, Tab } from "@material-ui/core";
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";
import StepZilla from "react-stepzilla";

function App() {
  let lastStep = 0;
  let [standaloneData, setStandaloneData] = useState(arraydata);
  const [standaloneCategoryData, setStandaloneCategoryData] = useState(
    catgoryData
  );
  const [standalonePersonalData, setStandalonePersonalData] = useState(
    personaData
  );
  const [tabIdx, setTabIdx] = useState(0);
  const handleTabChange = useCallback((event: any, newValue: number) => {
    setTabIdx(newValue);
  });
  const updateStore = data => {
    setStandalonePersonalData(data);
  };

  const getStore = () => {
    return standalonePersonalData;
  };

  const getBaseUrl = url => `http://localhost:8080/api/${url}`;

  const handleSubmit = (url, step) => {
    console.log(getBaseUrl(url));
    let data = {};
    if (lastStep < step) {
      if (steps[step - 1].name == "Personal") {
        data = standalonePersonalData;
      }
      console.log(steps[step - 1].name);
      console.log(data);
      // axios.post(getBaseUrl(url), standaloneData, {
      //   headers: {
      //     "Content-type": "application/json",
      //     "Accept": "application/json"      }
      // });
    }
    lastStep = step;
    console.log(lastStep);

    // const url = `http://localhost:8080/api/`;
  };
  const steps = [
    { name: "Array", component: <Component1 /> },
    {
      name: "Personal",
      component: (
        <Component2
          getStore={getStore}
          updateStore={u => {
            updateStore(u);
          }}
        />
      )
    },
    { name: "Component 3", component: <Component3 /> }
  ];

  return (
    <Fragment>
      <div className="step-progress">
        <StepZilla
          steps={steps}
          stepsNavigation={false}
          showSteps={false}
          hocValidationAppliedTo={[2]}
          preventEnterSubmission={true}
          onStepChange={step => handleSubmit("save", step)}
        />
      </div>

      {/* <Tabs value={tabIdx} onChange={handleTabChange}>
        <Tab label="Array" />
        <Tab label="Catagory" disabled/>
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
          )} */}
    </Fragment>
  );
}

export default App;
