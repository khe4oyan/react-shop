import './crafts.css'
import { useSelector } from 'react-redux';
import Craft from '../crafts_craft/Craft';
import allObjects from '../../data/data';

export default function Crafts() {
	const myItems = useSelector(state => state.myItems.myItems);
	const allItems = allObjects.items;

	const haseItem = (findingItemId, findingItemCount) => {
		for (let i = 0; i < myItems.length; ++i) {
			if (findingItemId === myItems[i][0]) {
				if (findingItemCount <= myItems[i][1]) {
					return true;
				}
				break;
			}
		}
		
		return false;
	}

	const createCraftData = (cantCraft, [craftingItemCount, [id, count], [id2, count2]], craftingItemImg, craftingItemId) => {
		const res = {
			craftingItemId,
			craftedCount: craftingItemCount,
			craftedImg: craftingItemImg,
			firstItem: [id, count],
			secondItem: [id2, count2],
			cantCraft,
		}

		return res;
	}

	const canCraftList = []; // DOM
	const cantCraftList = []; // DOM

	for (const itemId of allItems.keys()) {
		const item = allItems.get(itemId);
		if (item.craft === null) { continue; }
		const [_, [id, count], [id2, count2]] = item.craft;

		if (id === id2) {
			const newCount = count + count2;
			if (haseItem(id, newCount)) {
				canCraftList.push(<Craft key={ itemId } craft={ createCraftData(false, item.craft, item.img, itemId) }/>);
			} else {
				cantCraftList.push(<Craft key={ itemId } craft={ createCraftData(true, item.craft, item.img, itemId) }/>);
			}
		} else {
			if (haseItem(id, count) && haseItem(id2, count2)) {
				canCraftList.push(<Craft key={ itemId } craft={ createCraftData(false, item.craft, item.img, itemId) }/>);
			} else {
				cantCraftList.push(<Craft key={ itemId } craft={ createCraftData(true, item.craft, item.img, itemId) }/>);
			}
		} 
	}

	return (
		<div className="crafts">
			{ canCraftList }
			{ cantCraftList }

			{/* <div className='crafts__controlBlock center'>
				<div className='crafts__controlBlock__buttonBox'>
					<button 
						// onClick={ prevButton } 
						// className={`event_button crafts__controlBlock__button crafts__controlBlock__buttonPrev ${startInd > 0 && 'crafts__controlBlock__buttonActive'}`}
					>
						{'<<'}
					</button>
					<button 
						// onClick={ nextButton } 
						// className={`event_button crafts__controlBlock__button crafts__controlBlock__buttonNext ${startInd < craftsList.length - showedCraftsSize && 'crafts__controlBlock__buttonActive'}`}
					>
						{'>>'}
					</button>
				</div>
			</div> */}
		</div>
	);
}