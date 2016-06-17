## React-Webpack

This boilerplate provides a basic structure of a React application that is written in ES6 and built/packaged using Webpack. I condensed the different ways of bundling React apps out there into something that fits my workflow.

As this boilerplate does not impose any form of structure - thanks to Webpack being really flexible in its way of bundling, feel free to adopt any framework of your choice be it [Redux](http://redux.js.org/index.html) or [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html).

####Install and Run

#####Install

1. Download
2. Install by executing
```
npm install
```
#####Run

Simply run the following command to run the development server
```
npm run dev
```
Then open your favorite browser and load _http://localhost:8080_

####Features

#####Linting, Transpiling, Uglifying

Webpack is configured to lint (using Airbnb's _.jshintrc_), transpile _.scss_ files and uglifying the resulting _app.min.js_ when in production. 

#####Hot Loading

Webpack does the hot loading for you which means it automatically refreshes the browser upon detecting changes to your codes.

#####Bootstrap

Configured to use Bootstrap framework.
