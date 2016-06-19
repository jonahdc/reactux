## Reactux

This is an extension of the React-Webpack that seeks to explore ways of adopting the Redux framework and animation libraries. 

####Install bower

```
npm install -g bower bower-installer
```

####Clone, Install and Run

```
git clone https://github.com/jonahdc/react-webpack.git
cd react-webpack
npm install
bower-installer
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
