import './crafts.css'
import Craft from '../crafts_craft/Craft';
import allObjects from '../../data/data';
import { useState } from 'react';

export default function Crafts({ tools }) {
	const craftsList = craftsListCreate(allObjects.items, tools);
	const [startInd, setStartInd] = useState(0);
	const showedCraftsSize = 6;
	const showedCrafts = createShowedCrafts(startInd, craftsList, showedCraftsSize);
	
	const prevButton = () => {
		setStartInd(prev => {
			const newInd = prev - showedCraftsSize;
			return newInd < 0 ? prev : newInd;
		});
	}
	const nextButton = () => {
		setStartInd(prev => {
			const newInd = prev + showedCraftsSize;
			return newInd > craftsList.length - 1 ? prev : newInd;
		});
	}

	return (
		<div className="crafts">
			{showedCrafts}
			<div className='crafts__controlBlock center'>
				<div className='crafts__controlBlock__buttonBox'>
					<button onClick={ prevButton } className={`event_button crafts__controlBlock__button crafts__controlBlock__buttonPrev ${startInd > 0 && 'crafts__controlBlock__buttonActive'}`}>{'<<'}</button>
					<button onClick={ nextButton } className={`event_button crafts__controlBlock__button crafts__controlBlock__buttonNext ${startInd < craftsList.length - showedCraftsSize && 'crafts__controlBlock__buttonActive'}`}>{'>>'}</button>
				</div>
			</div>
		</div>
	);
}

function createShowedCrafts(startInd, craftsList, showedCraftsSize) {
	const list = [];
	const listCount = startInd + showedCraftsSize;

	for (let i = startInd; i < listCount; ++i) {
		list.push(craftsList[i]);
	}

	return list;
}

function craftsListCreate(allItemsList, tools) {
	const canCraft = [];
	const cantCraft = [];
	allItemsList.forEach(function(craftData, itemId) {
		if (craftData.craft != null ) { 
			const firstItem = craftData.craft[1];
			const secondItem = craftData.craft[2];

			const hasFirstItem = tools.items.hasItem(firstItem[0], firstItem[1]);
			const hasSecondItem = tools.items.hasItem(secondItem[0], secondItem[1]);

			const craftedImg = craftData.img;
			const craftedCount = craftData.craft[0];
				
			let craft = {
				craftedImg,
				craftedCount,
				firstItem,
				secondItem,
			};

			if (hasFirstItem && hasSecondItem) {
				const craftButton = () => {
					tools.items.addItem(itemId, craftData.craft[0]);
					tools.items.remItem(firstItem[0], firstItem[1]);
					tools.items.remItem(secondItem[0], secondItem[1]);
				}

				craft.craftButton = craftButton;

				canCraft.push(<Craft key={`unique-craft-key-${itemId}`} craft={craft}/>);
			} else {
				cantCraft.push(<Craft key={`unique-craft-key-${itemId}`} craft={craft} cantCraft={true}/>);
			}
		}
	});

	return [...canCraft, ...cantCraft];
}