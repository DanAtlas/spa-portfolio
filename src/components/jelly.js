import React from 'react';

class Jelly extends React.Component {
	state = { hovered: false };
	render() {
		return (
			<div
				className="inline"
				onMouseEnter={() => this.setState({ hovered: true })}
				onMouseLeave={() => this.setState({ hovered: false })}
			>
				{this.props.children(this.state.hovered)}
			</div>
		);
	}
}


export default Jelly;