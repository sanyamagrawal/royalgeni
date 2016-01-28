import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {VendorData, VendorSelect} from 'components';

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>Vendor Page</h1>
        <Helmet title="Vendor"/>
        <VendorSelect />
        <VendorData />
      </div>
    );
  }
}
