import '../NONAME/item.css'
import allObjects from '../../data/data';

export default function ItemShop({ind, tools}) {
	const itemData = allObjects.cases.get(ind);

	const openButton = () => {
		const casePrice = itemData.price;
		const haveMoney = tools.money.hasMoney(casePrice);
		if (!haveMoney) { return; }

		tools.money.remMoney(casePrice);
		
		const itemList = createCaseInnerList(itemData); 
		const givenItemIndex = randomGetItemIndex(itemList);
		if (givenItemIndex == -1) { return; }
		tools.items.addItem(givenItemIndex);
	}


	return (
		<div className='item'>
			<p className='item-name'>{itemData.name}</p>
			<img className='item-img' src={`items/${itemData.img}.png`} alt='item-img'/>
			<p className='item-price'>{itemData.price}</p>
			<button onClick={openButton} className='item-buy event_button item-case'>open</button>
		</div>
	);
}

function randomGetItemIndex(itemList) {
	const keys = [...itemList.keys()].sort();
	const chance = 1 + Math.floor(Math.random() * 101);
	
	for (let i = 0; i < keys.length; ++i) {
		const itemDropChance = keys[i];
		if (chance < itemDropChance) {
			return dropingItem(itemList.get(itemDropChance));
		}
	}
	return -1;
}

function dropingItem(idList) {
	if (idList.length == 1) { return idList[0]; }
	const index = Math.floor(Math.random() * idList.length);
	return idList[index];	
}

function createCaseInnerList (itemData) {
	const itemList = new Map();
	const innerItems = itemData.innerItems;
	for (let i = 0; i < innerItems.length; ++i) {
		const itemId = innerItems[i][0];
		const itemChance = innerItems[i][1];
		
		if (itemList.get(itemChance) == undefined) {
			itemList.set(itemChance, [itemId]);
		} else {
			itemList.get(itemChance).push(itemId);
		}
	}

	return itemList;
}