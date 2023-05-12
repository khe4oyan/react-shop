import './craft.css'
import allObjects from '../../data/data';

export default function Craft({craft}) {
	
	return (
		<div className='craft'>
			<div className='card'>
				<h2 className='crafted_count'>x{craft.craftedCount}</h2>
				<img className='crafted_img' src={`https://raw.githubusercontent.com/khe4oyan/shop/gh-pages/items/${craft.craftedImg}.png`} alt='crafted-img'/>
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
			<img className='crafted_img' src={`https://raw.githubusercontent.com/khe4oyan/shop/gh-pages/items/${item.img}.png`} alt='crafted-img'/>
			<p className='crafted_name'>{item.name}</p>
		</div>
	);
}