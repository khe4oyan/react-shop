import '../NONAME/item.css'
import { useState } from 'react';
import { randomGetItemIndex, createCaseInnerList } from './tools'
import allObjects from '../../data/data';
import InnerCase from '../innerCase/InnerCase';
import OpenedItem from '../itemShopOpenedItem/OpenedItem'
import { useSelector, useDispatch } from 'react-redux';
import { addNewItem } from '../../store/slices/myItems';
import { remMoney } from '../../store/slices/moneySlice';

export default function ItemShop({ ind }) {
	const dispatch = useDispatch();
	const itemData = allObjects.cases.get(ind);
	const money = useSelector(state => state.money.money);

	let [showInnerModal, setShowInnerModal] = useState(false);
	let [showOpenedItem, setShowOpenedItem] = useState(false);
	let [givenItemIndex, setGivenItemIndex] = useState(null);

	let itemList = null;

	const openButton = () => {
		const casePrice = itemData.price;
		if (money < casePrice) { return; }

		itemList = createCaseInnerList(itemData);
		givenItemIndex = setGivenItemIndex(() => {
			let newVal = randomGetItemIndex(itemList);
			if (newVal == null) { return; }
			dispatch(remMoney(casePrice));
			dispatch(addNewItem(newVal));

			return newVal;
		});
		setShowOpenedItem(true);
	}

	return (
		<>
			<div className='item'>
				<p className='item-name'>{itemData.name}</p>
				<img className='item-img' src={`${itemData.img}`} alt='item-img' />
				<p className='item-price'>{itemData.price}</p>
				<button onClick={openButton} className='item-buy event_button item-case'>open</button>
				<div className='item-info'>
					<p className='item-info__i' onClick={() => setShowInnerModal(true)}>i</p>
				</div>
			</div>
			{
				showInnerModal &&
				<InnerCase
					closeModal={() => { setShowInnerModal(false) }}
					caseId={ind}
				/>
			}
			{
				showOpenedItem &&
				<OpenedItem
					closeModal={() => { setShowOpenedItem(false) }}
					itemId={givenItemIndex}
				/>
			}
		</>
	);
}