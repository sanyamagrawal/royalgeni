import React from 'react';
import ReactDataGrid from 'react-data-grid';
import './DataGrid.scss';

const _rows = [];

class Grid extends React.Component {

    static propTypes = {
        idProperty: React.PropTypes.string.isRequired,
        dataSource: React.PropTypes.array.isRequired,
        columns: React.PropTypes.array.isRequired,
    }

    constructor(props) {
        super(props);
    }

    rowGetter(ii) {
        return _rows[ii];
    }

    render() {
        for (let ii = 1; ii < 1000; ii++) {
          _rows.push({
            id: ii,
            title: 'Title ' + ii,
            count: ii * 1000
          });
        }

        const columns = [
        {
          key: 'id',
          name: 'ID'
        },
        {
          key: 'title',
          name: 'Title'
        },
        {
          key: 'count',
          name: 'Count'
        }
    ];

        return (
            <ReactDataGrid columns={columns}
                  rowGetter={this.rowGetter}
                  rowsCount={_rows.length}
                  minHeight={500}
            />
        );
    }
}

export default Grid;
