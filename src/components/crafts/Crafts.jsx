import './crafts.css'
import Craft from '../crafts_craft/Craft';
import allObjects from '../../data/data';

export default function Crafts({tools}) {
	const craftsList = craftsListCreate(allObjects.items, tools);
	
	return (
		<div className="crafts">
			{craftsList}
		</div>
	);
}

function craftsListCreate(allItemsList, tools) {
	const craftsList = [];
	allItemsList.forEach(function(craftData, itemId) {
		if (craftData.craft != null ) { 
			const firstItem = craftData.craft[1];
			const secondItem = craftData.craft[2];

			const hasFirstItem = tools.items.hasItem(firstItem[0], firstItem[1]);
			const hasSecondItem = tools.items.hasItem(secondItem[0], secondItem[1]);

			if (hasFirstItem && hasSecondItem) {
				const craftButton = () => {
					tools.items.addItem(itemId, craftData.craft[0]);
					tools.items.remItem(firstItem[0], firstItem[1]);
					tools.items.remItem(secondItem[0], secondItem[1]);
				}

				const craftedImg = craftData.img;
				const craftedCount = craftData.craft[0];
				
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

	return craftsList;
}