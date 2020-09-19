import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

class HeatMap extends Component {
	componentDidMount() {}

	addressPoints = () => {
		return [[-27.592464, -48.586949, '571']];
	};

	render() {
		return (
			<React.Fragment>
				<h2>Heat Map</h2>
				<Map center={[-27.592464, -48.586949]} zoom={13}>
					<HeatmapLayer
						points={this.addressPoints()}
						longitudeExtractor={(m) => m[1]}
						latitudeExtractor={(m) => m[0]}
						intensityExtractor={(m) => parseFloat(m[2])}
						fitBoundsOnLoad
						fitBoundsOnUpdate
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

export default HeatMap;
