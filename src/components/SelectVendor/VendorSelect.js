import React from 'react';
import Select from 'react-select';
import { serviceList } from './VendorConfig';
import './Select.scss';

class VendorSelect extends React.Component {

	constructor(props) {
    	super(props);
		this.state = {
			value: []
		};
	}

	handleSelectChange = (value) => {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	}

	render() {
		return (
			<div className="section">
				<Select simpleValue
						value={this.state.value}
						placeholder="Select Job"
						options={serviceList}
						onChange={this.handleSelectChange} />
			</div>
		);
	}
}

export default VendorSelect;
