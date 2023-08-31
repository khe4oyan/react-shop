import './craft.css'
import allObjects from '../../data/data';

export default function Craft({craft, cantCraft = false}) {
	return (
		<div className={`craft ${cantCraft && 'craft-disabled'}`}>
			<div className='card'>
				<h2 className='crafted_count'>x{craft.craftedCount}</h2>
				<img className='crafted_img' src={`${craft.craftedImg}`} alt='crafted-img'/>
				<button onClick={craft.craftButton} className='crafted_button event_button'>craft</button>
			</div>

			<Card cardData={craft.firstItem}/>
			<Card cardData={craft.secondItem}/>
		</div>
	);
}

function Card({cardData}) {
	const [itemId, itemCount] = cardData;
	const allItemsList = allObjects.items;
	const item = allItemsList.get(itemId);
	
	return(
		<div className='card'>
			<h2 className='crafted_count'>x{itemCount}</h2>
			<img className='crafted_img' src={`${item.img}`} alt='crafted-img'/>
			<p className='crafted_name'>{item.name}</p>
		</div>
	);
}