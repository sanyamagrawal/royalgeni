import React from 'react';
import Grid from 'react-datagrid';
import './DataGrid.scss';

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
        return (<Grid idProperty={this.props.idProperty}
                      dataSource={this.props.dataSource}
                      columns={this.props.columns} />
        );
    }
}

export default DataGrid;
