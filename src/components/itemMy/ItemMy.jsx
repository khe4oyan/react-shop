import { useDispatch, useSelector } from 'react-redux';
import '../NONAME/item.css'
import allObjects from '../../data/data';
import { addMoney } from '../../store/slices/moneySlice';
import { remItem } from '../../store/slices/myItems';
import hasItem from '../../tools/tools';

export default function ItemMy({ item }) {
	const dispatch = useDispatch();
	const myItems = useSelector(state => state.myItems.myItems);
	const itemData = allObjects.items.get(item[0]);
	
	const count = item[1];
	const sellButton = () => {
		const itemId = item[0];
		const itemPrice = allObjects.items.get(itemId).priceWhenSell;

		if (hasItem(myItems, itemId, count)) {
			dispatch(remItem(itemId));
			dispatch(addMoney(itemPrice));
		}
	}

	return (
		<div className='item'>
			<p className='item-count'>x{count}</p>
			<p className='item-name'>{itemData.name}</p>
			<img className='item-img' src={`${itemData.img}`} alt='item-img' />
			{
				itemData.priceWhenSell == null ?
					<p className='item-cant-sell'>can't sell now</p> :
					<>
						<p className='item-price'>{itemData.priceWhenSell}</p>
						<button onClick={sellButton} className='event_button item-sell'>sell</button>
					</>
			}
		</div>
	);
}