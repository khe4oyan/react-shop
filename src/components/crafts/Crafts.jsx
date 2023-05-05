import './crafts.css'
import Craft from '../crafts_craft/Craft';
import allObjects from '../../data/data';

export default function Crafts({tools}) {
	const allItemsList = allObjects.items;

	const craftsList = [];
	allItemsList.forEach(function(craftData, itemId) {
		if (craftData.craft != null ) { 
			const firstItem = craftData.craft[1];
			const secondItem = craftData.craft[2];

			const hasFirstItem = tools.items.hasItem(firstItem[0], firstItem[1]);
			const hasSecondItem = tools.items.hasItem(secondItem[0], secondItem[1]);

			if (hasFirstItem && hasSecondItem) {
				const craftedImg = craftData.img;
				const craftedCount = craftData.craft[0];

				const craftButton = () => {
					for (let i = 0; i < firstItem[1]; ++i) {
						tools.items.remItem(firstItem[0]);
					}

					for (let i = 0; i < secondItem[1]; ++i) {
						tools.items.remItem(secondItem[0]);
					}

					tools.items.addItem(itemId);
				}
				
				const craft = {
					craftedImg,
					craftedCount,
					firstItem,
					secondItem,
					craftButton,
				};

				craftsList.push(<Craft key={`unique-craft-key-${itemId}`} craft={craft}/>);
			}
		}
	});
	
	return (
		<div className="crafts">
			{craftsList}
		</div>
	);
}