import React, { useState } from 'react';

export default function Textbox(props) {
  const [text, setText] = useState('Enter Text');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const convertToUpperCase = () => {
    setText(text.toUpperCase());
    props.showalert('Converted to Upper Case!', 'success');
  };

  const convertToLowerCase = () => {
    setText(text.toLowerCase());
    props.showalert('Converted to Lower Case!', 'success');
  };

  const clearText = () => {
    setText('');
    props.showalert('Cleared Text!', 'success');
  };
  return (
    <>
     <div style={{
            color: props.mymode === 'light' ? 'black' : 'white',
            backgroundColor: 
                props.colors === 'white' ? 'white' :
                props.colors === 'green' ? '#374f3b' :
                props.colors === 'red' ? '#6e2f3c' :
                'black' 
          }}>
      <form>
        <div
          className="container my-5"
          style={{
            color: props.mymode === 'light' ? 'black' : 'white',
            backgroundColor: 
            props.colors === 'white' ? 'white' :
            props.colors === 'green' ? '#374f3b' :
            props.colors === 'red' ? '#6e2f3c' :
            'black' 
          }}
        >
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            onChange={handleInputChange}
            rows="9"
            style={{
              color: props.mymode === 'light' ? 'black' : 'white',
              backgroundColor:props.mymode==='dark'? 'black':'white'
            }}
          ></textarea>
          <button className="btn btn-primary my-3" type="button" style={{
              backgroundColor: 
              props.colors === 'green' ? '#6a996a' :
              props.colors === 'red' ? '#e84346' :
              '#0069d9',
              borderColor:props.colors === 'green' ? '#6a996a' :
              props.colors === 'red' ? '#e84346' :
              '#0069d9',
          }} onClick={convertToUpperCase}>
            ConvertToUpperCase
          </button>
          <button className="btn btn-primary mx-2" type="button" style={{
              backgroundColor: 
              props.colors === 'green' ? '#6a996a' :
              props.colors === 'red' ? '#e84346' :
              '#0069d9',
              borderColor:props.colors === 'green' ? '#6a996a' :
              props.colors === 'red' ? '#e84346' :
              '#0069d9',}} onClick={convertToLowerCase}>
            ConvertToLowerCase
          </button>
          <button className="btn btn-primary mx-2" type="button" style={{
              backgroundColor: 
              props.colors === 'green' ? '#6a996a' :
              props.colors === 'red' ? '#e84346' :
              '#0069d9',
              borderColor:props.colors === 'green' ? '#6a996a' :
              props.colors === 'red' ? '#e84346' :
              '#0069d9',}} onClick={clearText}>
            Clear Text
          </button>
        </div>
      </form>
      <div className="container mb-4">
        <h2>Summary of Your Text:</h2>
        <p>
          {text.split(' ').length - 1} Words and {text.length} Characters
        </p>
        <p>It takes the time of {0.008 * text.split(' ').length} Minutes to read</p>
        <h2>Preview of Your Text</h2>
        <p>{text}</p>
      </div>
      </div>
    </>
  );
}
