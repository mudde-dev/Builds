'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../SeidoHelpers/seido-helpers.js';

const imgs = document.querySelectorAll('article img');
imgs.forEach(img => {
  console.log(img.getAttribute('src'));
});
