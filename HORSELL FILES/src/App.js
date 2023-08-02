import { useEffect } from 'react';
import './App.css';
import './index.css';

const Candidate = (props) => {
  return (
    <>
    <h3>Name: {props.name}</h3>
    <h3>Lact Name: {props.lastName}</h3>
    <h3>Score: {props.score}%</h3>
    </>
  )
}


const App = () => {

  return (
    <div className="App">
    <div className="display">
      <div className="inputArea">
        <div className="title">
              <h3>Resume Processing Tool</h3>
        </div>
        <div className="inputArea">
          <label for="resume">Select a resume:</label>
          <input type="file" id="resume" name="resume" accept=".pdf" multiple/>
        </div>
        <div className="submitBtn">
          <button>Submit</button>
        </div>
        <div id="errprOutput">
              Please submit correct file type
        </div>
      </div>
      <div className="outputArea">
        <span>This is the output of canidate options</span>
        <div>
          <Candidate name={'John'} lastName={'Doe'} score={'85'}/>
          <Candidate name={'Jane'} lastName={'Smith'} score={'98'}/>
          <Candidate name={'Mary'} lastName={'Carsen'} score={'72'}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
