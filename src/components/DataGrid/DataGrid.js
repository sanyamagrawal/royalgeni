import React from 'react';
import Grid from 'react-datagrid';

class DataGrid extends React.Component {

    static propTypes = {
        idProperty: React.PropTypes.string.isRequired,
        dataSource: React.PropTypes.array.isRequired,
        columns: React.PropTypes.array.isRequired,
    }

    constructor(props) {
        super(props);
    }

    render() {
        require('./DataGrid.scss');
        return (<Grid {...this.props}/>
        );
    }
}

export default DataGrid;
