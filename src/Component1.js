import React ,{ useState }from "react";
import arraySchema from "./array/arraySchema.json";
import arrayUISchema from "./array/arrayUISchema.json";
import arraydata from "./array/data.json";
import { JsonForms } from "@jsonforms/react";
import {
    materialCells,
    materialRenderers
  } from "@jsonforms/material-renderers";

function Component1 (){
    const [standaloneData, setStandaloneData] = useState(arraydata);
    return(
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
          </div>
    )
}
export default Component1;