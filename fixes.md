
# Fix #2 
After that make sure to return the value content of the result object at the end of your function. 

# Fix #3
The offline functionality was also not there due to some errors. The error when I tried to run your application locally was that the service worker file was not properly evaluated. 

# Fix #4
Taking a look at your service worker file (src-sw.js), I noticed that you have not added the implementation for the second registerRoute that is needed to cache the assets of the app.
