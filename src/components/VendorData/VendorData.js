import React from 'react';
import {DataGrid} from 'components';

const data = [
  { id: '1', firstName: 'John', lastName: 'Bobson'},
  { id: '2', firstName: 'Bob', lastName: 'Mclaren'}
];

const columns = [
  { name: 'firstName'},
  { name: 'lastName'}
];

class VendorData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<DataGrid idProperty="id" dataSource={data} columns={columns} />);
    }
}

export default VendorData;
