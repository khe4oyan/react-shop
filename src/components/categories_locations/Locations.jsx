import './locations.css';
import allObjects from "../../data/data";
import Location from "./location/Location";
import { useState } from 'react';

export default function Locations() {
	const locations = allObjects.locations;
	const locationsDOM = [];

	const [busy, setBusy] = useState(false);

	for(const locationId of locations.keys()) {
		locationsDOM.push(
			<Location 
				busy={busy}
				setBusy={setBusy}
				data={locations.get(locationId)} 
				key={`key${locationId}`}
			/>
		);
	}

	return (
		<div className="locations">
			<div className="items-container locationsContainer">
				{ locationsDOM }
			</div>
		</div>
	)
}

