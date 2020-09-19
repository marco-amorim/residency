import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { fetchResidences } from '../actions';

class HeatMap extends Component {
	componentDidMount() {
		this.props.fetchResidences();
	}

	addressPoints() {
		return this.props.residences.map((residence) => {
			return [residence.latitude, residence.longitude, residence.residents];
		});
	}

	render() {
		return (
			<React.Fragment>
				<h2>Heat Map</h2>
				<Map center={[-27.592464, -48.586949]} zoom={11}>
					<HeatmapLayer
						fitBoundsOnLoad
						fitBoundsOnUpdate
						points={this.addressPoints()}
						longitudeExtractor={(m) => m[1]}
						latitudeExtractor={(m) => m[0]}
						intensityExtractor={(m) => parseFloat(m[2])}
						max={8}
					/>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
				</Map>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return { residences: Object.values(state.residences) };
};

export default connect(mapStateToProps, { fetchResidences })(HeatMap);
