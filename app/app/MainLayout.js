import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './Header';
import Navbar from './Navbar';

require('./styles/transitions.scss')

export default class MainLayout extends React.Component{
  render() {
    return (
<div>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
<div class="content-area">
              <ReactCSSTransitionGroup
             component="div"
             transitionName="page"
            >
             {React.cloneElement(this.props.children, {
               key: this.props.location.pathname
             })}
            </ReactCSSTransitionGroup>
              </div>
            </div>
          </div>
        </div>

        </div>
    );
  }


}
