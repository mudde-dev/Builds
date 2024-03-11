//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
//An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. 
//The browser may store the cookie and send it back to the same server with later requests.
//https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie


const book = 'JavaScript Cookbook: Programming the Web';
document.cookie = 'author=Adam';
document.cookie = `title=${encodeURIComponent(book)}`;
console.log(document.cookie);

// cookie expires in 1 day
document.cookie = 'user=Abigail;  max-age=86400';

// delete a cookie
function eraseCookie(key) {
  const cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  document.cookie = cookie;
}

eraseCookie('author');
console.log(document.cookie);
