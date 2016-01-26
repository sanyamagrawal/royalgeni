import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {VendorSelect} from 'components';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>Vendor Select</h1>
        <Helmet title="Vendor"/>
        <VendorSelect />
      </div>
    );
  }
}
