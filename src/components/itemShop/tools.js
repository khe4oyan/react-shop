export
function randomGetItemIndex(itemList) {
	const keys = [...itemList.keys()].sort();
	const chance = Math.random() * 101;

	for (let i = 0; i < keys.length; ++i) {
		const itemDropChance = keys[i];
		if (chance < itemDropChance) {
			const res = dropingItem(itemList.get(itemDropChance));
			return res
		}
	}

	return null;
}

export
function dropingItem(idList) {
	if (idList.length == 1) { return idList[0]; }
	const index = Math.floor(Math.random() * idList.length);
	return idList[index];	
}

export
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