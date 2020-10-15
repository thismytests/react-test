import React, {Component} from 'react';

// css
import './WrapperPage.css';

/*header*/
import {Header} from './Header';

export default class WrapperPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="wrapperpage">
          {this.props.children}
        </div>
      </React.Fragment>

    )
  }
}
