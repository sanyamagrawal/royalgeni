import React from 'react';
import {Grid} from 'components';

const data = [
  { id: '1', firstName: 'John', lastName: 'Bobson'},
  { id: '2', firstName: 'Bob', lastName: 'Mclaren'}
];

// const columns = [
//   { name: 'firstName'},
//   { name: 'lastName'}
// ];
// return (<Grid idProperty={this.props.idProperty}
// -                      dataSource={this.props.dataSource}
// -                      columns={this.props.columns} />
class VendorData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data
        };
    }

    handleFilter = (column, value, allFilterValues) => {
	    // go over all filters and apply them
        let originalData = data;

        Object.keys(allFilterValues).forEach(function allFilter(name) {
    		const columnFilter = (allFilterValues[name] + '').toUpperCase();

    		if (columnFilter === '') {
    			return;
    		}

    		originalData = originalData.filter(function fil(item) {
                if ((item[name] + '').toUpperCase().indexOf(columnFilter) === 0) {
                    return true;
                }
    		});
        });

        this.setState({
            data: originalData
        });
    }
    render() {
        return (
            <div>
                <Grid />
            </div>
        );
    }
}

export default VendorData;
