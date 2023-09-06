import './craft.css'
import allObjects from '../../data/data';
import { useDispatch } from 'react-redux';
import { addNewItem, remItem } from '../../store/slices/myItems';

// [[2,7],[1,2]]

export default function Craft({ craft }) {
	const dispatch = useDispatch();

	const removingItem = ([ itemId, itemCount ]) => {
		for (let i = 0; i < itemCount; ++i) {
			dispatch(remItem(itemId));
		}
	}
	const addItem = ([ itemId, itemCount ]) => {
		for (let i = 0; i < itemCount; ++i) {
			dispatch(addNewItem(itemId));
		}
	}

	const crafting = () => {
		if (craft.cantCraft) { return; }
		removingItem(craft.firstItem);
		removingItem(craft.secondItem);
		addItem([craft.craftingItemId, craft.craftedCount]);
	}

	return (
		<div className={ `craft ${ craft.cantCraft && 'craft-disabled'}` }>
			<div className='card'>
				<h2 className='crafted_count'>x{ craft.craftedCount }</h2>
				<img className='crafted_img' src={`${ craft.craftedImg }`} alt='crafted-img' />
				<button onClick={ crafting } className='crafted_button event_button'>craft</button>
			</div>

			<Card cardData={ craft.firstItem } />
			<Card cardData={ craft.secondItem } />
		</div>
	);
}

function Card({ cardData }) {
	const [itemId, itemCount] = cardData;
	const allItemsList = allObjects.items;
	const item = allItemsList.get(itemId);

	return (
		<div className='card'>
			<h2 className='crafted_count'>x{itemCount}</h2>
			<img className='crafted_img' src={`${item.img}`} alt='crafted-img' />
			<p className='crafted_name'>{item.name}</p>
		</div>
	);
}