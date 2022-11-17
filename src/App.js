import React, {useState, useRef, useCallback, useEffect} from "react";
import Company from "./components/Company";
import Create from "./components/Create";
function App() {

  const [data, setData] = useState([]);


  async function createHandler(data){
   
    const response = await fetch('mongodb+srv://collateral:Phr2R8PnjCxNI8CF@cluster0.ozbwgpz.mongodb.net/?retryWrites=true&w=majority',{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }

    
  });
  const givenData = await response.json();
 
}


  return (
    <div className="App">
      <Create addData={createHandler} />
     <Company />
    </div>
  );
}

export default App;
