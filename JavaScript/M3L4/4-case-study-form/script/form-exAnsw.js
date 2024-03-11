//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

const myForm = document.getElementById('whoAreYou');

//Start the server by opening a terminal in /case-study-server and type node simple-with-form.js
const url = 'http://localhost:3000/api/upload';


myForm.addEventListener('submit', async event => {
  event.preventDefault();

  //Create the key/value pairs used in the form
  const formData = new FormData(myForm);

  //show that you can append any field. For example a API key
  formData.append('user', true);

  try {
    //send the data using post and await the reply
    const response = await fetch(url, {
      method: 'post',
      body: formData
    });
    const result = await response.text();

    if (response.ok) {
      alert("Thank you for submitting the information. It has been recieved");
    }
    else {
      alert("Transmission error");
    }
    console.log(result);
  }
  catch {
    alert("Transmission error");
  }
});

/* Exercise
1. Looking into 3-from-post example and Write code that posts the form data to server case-study-server/simple-with-form.js
2. verify that the server has recieved the data
*/
