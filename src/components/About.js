import React, { useState } from 'react';

export default function About(props) {
  const [theme, setTheme] = useState({
    color: 'black',
    backgroundColor: 'white',
  });
  

  return (
    <div className='container my-4'>
      <div class="card" style={theme}>
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About Buttons
            </button>
          </h5>
        </div>

        <div id="collapseOne" style={theme} class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            <p>This section provides information about the functionality of buttons in the application.</p>
            <p>There are three Buttons :
              <ul><li><b>ConvertToUpperCase:</b>Converts the text that you eneterd into upper case alphabets</li>
              <li><b>ConvertToLowerCase:</b>Converts the text that you eneterd into lower case alphabets</li>
              <li><b>ClearText:</b>Clears the text thatyou entered</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div class="card " style={theme}>
        <div class="card-header" style={theme} id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              About Summary
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" style={theme} aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
    <p>This section provides a summary of important information in the application.</p>
    <p>The Summary includes:</p>
    <ul>
      <li>The number of words and characters entered in the text section.</li>
      <li>The estimated time required to read the entered content.</li>
    </ul>
  </div>
        </div>
      </div>

      <div class="card" style={theme}>
        <div class="card-header" id="headingThree" style={theme}>
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              About Preview
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" style={theme} aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
    <p>This section provides a preview of content or features in the application.</p>
    <p>The displayed content includes any modifications made using buttons.</p>
  </div>
        </div>
      </div>
    </div>
  );
}
