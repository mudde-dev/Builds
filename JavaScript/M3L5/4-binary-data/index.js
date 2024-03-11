//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/Response/blob
//in this case the blop is an image, but could be any binary object

async function fetchImage() {
  const url = 'logo.png';

  try {
  const response = await fetch(url);
  const blob = await response.blob();
  
  // add returned url to image element
  const img = document.getElementById('result');
  img.src = URL.createObjectURL(blob);
  }
  catch (error)
  {
    alert('could not read blob from server');
  }
}

fetchImage();
