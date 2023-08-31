import '../NONAME/item.css'
import allObjects from '../../data/data';

export default function ItemMy({item, tools}) {
	const itemData = allObjects.items.get(item[0]);

	const count = item[1];
	const sellButton = () => {
		const itemId = item[0];
		const itemPrice = allObjects.items.get(itemId).priceWhenSell;
		const hasItem = tools.items.hasItem(itemId);

		if (hasItem) {
			tools.items.remItem(itemId);
			tools.money.addMoney(itemPrice);
		}
	}

	// add click
	return (
		<div className='item'>
			<p className='item-count'>x{count}</p>
			<p className='item-name'>{itemData.name}</p>
			<img className='item-img' src={`${itemData.img}`} alt='item-img'/>
			{
				itemData.priceWhenSell == null ?
				<>
					<p className='item-cant-sell'>can't sell now</p>
				</> :
				<>
					<p className='item-price'>{itemData.priceWhenSell}</p>
					<button onClick={sellButton} className='event_button item-sell'>sell</button>
				</>
			}
		</div>
	);
}