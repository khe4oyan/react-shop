import '../NONAME/item.css'
import { useState } from 'react';
import { randomGetItemIndex, createCaseInnerList } from './tools'
import allObjects from '../../data/data';
import InnerCase from '../innerCase/InnerCase';
import OpenedItem from '../itemShopOpenedItem/OpenedItem'

export default function ItemShop({ind, tools}) {
	const itemData = allObjects.cases.get(ind);

	let [showInnerModal, setShowInnerModal] = useState(false);
	let [showOpenedItem, setShowOpenedItem] = useState(false);

	let itemList = null;
	let [givenItemIndex, setGivenItemIndex] = useState(null);


	const openButton = () => {
		const casePrice = itemData.price;
		const haveMoney = tools.money.hasMoney(casePrice);
		if (!haveMoney) { return; }
		
		itemList = createCaseInnerList(itemData); 
		givenItemIndex = setGivenItemIndex(randomGetItemIndex(itemList));
		
		if (givenItemIndex == -1 ) { return; }
		if (Number.isInteger(givenItemIndex)) {
			tools.money.remMoney(casePrice);
			tools.items.addItem(givenItemIndex);
		}
		setShowOpenedItem(true);
	}

	return (
		<>
			<div className='item'>
				<p className='item-name'>{itemData.name}</p>
				<img className='item-img' src={`https://raw.githubusercontent.com/khe4oyan/shop/gh-pages/items/${itemData.img}.png`} alt='item-img'/>
				<p className='item-price'>{itemData.price}</p>
				<button onClick={openButton} className='item-buy event_button item-case'>open</button>
				<div className='item-info'>
					<p className='item-info__i' onClick={() => setShowInnerModal(true)}>i</p>
				</div>
			</div>
			{
				showInnerModal &&
				<InnerCase closeModal={() => { setShowInnerModal(false) }} caseId={ ind }/>
			}
			{
				showOpenedItem &&
				<OpenedItem closeModal={() => { setShowOpenedItem(false)}} itemId={ givenItemIndex }/>
			}
		</>
	);
}