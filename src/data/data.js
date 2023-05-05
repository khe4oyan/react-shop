// all items/cases in game

const allObjects = {
	items: new Map([
		[ 0, { name: 'Box', priceWhenBuy: 10, priceWhenSell: 5, img: 'box', craft: null}],
		[ 1, { name: 'Car', priceWhenBuy: 100, priceWhenSell: 70, img: 'car', craft: null}],
		[ 2, { name: 'Material(GOLD)', priceWhenBuy: 10_000, priceWhenSell: 10_000, img: 'gold_material', craft: null}],
		[ 3, { name: 'Gold Car', priceWhenBuy: 20_000, priceWhenSell: 10_200, img: 'car_gold', craft: [1, [1, 1], [2, 2]]}],
	]),

	// [ id, {name: '', price: 0, img: '', innerItems: [[' id', 'chance'], [' id_2', 'chance']]}]
	cases: new Map([
		[ 0, { name: 'Box', price: 100, img: 'shop_case', innerItems: [
			[0, 70],
			[1, 50],
			[3, 50],
		]}],
		[ 1, { name: 'Materials', price: 10_000, img: 'shop_case', innerItems: [
			[2, 50],
		]}]
	])
};

const salaryNow = {
	// items: [], // dont use (in develop..)
	cases: [0, 1],
};

export default allObjects;
export { salaryNow };
