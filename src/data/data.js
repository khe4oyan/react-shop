// all items/cases in game

const allObjects = {
	items: new Map([
		[ 0, 	{ name: 'Box', 						priceWhenBuy: 10, 		priceWhenSell: 5, 			img: 'box', 						craft: null}],
		[ 1, 	{ name: 'Car', 						priceWhenBuy: 100, 		priceWhenSell: 70, 			img: 'car', 						craft: null}],
		[ 2, 	{ name: 'Material(Gold)', priceWhenBuy: 10_000, priceWhenSell: 10_000, 	img: 'gold_material', 	craft: null}],
		[ 3, 	{ name: 'Car(Gold)', 			priceWhenBuy: 20_000, priceWhenSell: 10_200, 	img: 'car_gold', 				craft: [1, [1, 1], [2, 2]]}],
		[ 4, 	{ name: 'Box(Gold)', 			priceWhenBuy: 0, 			priceWhenSell: 10_030, 	img: 'box_gold', 				craft: null}],
		[ 5, 	{ name: 'Case', 					priceWhenBuy: 0, 			priceWhenSell: 500, 		img: 'case', 						craft: null}],
		[ 6, 	{ name: 'Fish', 					priceWhenBuy: 20, 		priceWhenSell: 15, 			img: 'fish', 						craft: null}],
		[ 7, 	{ name: 'Flower', 				priceWhenBuy: 2, 			priceWhenSell: 1, 			img: 'flower', 					craft: null}],
		[ 8, 	{ name: 'Vase', 					priceWhenBuy: 4, 			priceWhenSell: 3, 			img: 'vase', 						craft: null}],
		[ 9, 	{ name: 'Flower In Vase', priceWhenBuy: 0, 			priceWhenSell: 10, 			img: 'flower_in_vase', 	craft: null}],
		[ 10, { name: 'Hat', 						priceWhenBuy: 50, 		priceWhenSell: 45, 			img: 'hat', 						craft: null}],
		[ 11, { name: 'Iron Plates', 		priceWhenBuy: 0, 			priceWhenSell: 100, 		img: 'iron_plates', 		craft: null}],
		[ 12, { name: 'Ncoin', 					priceWhenBuy: 1, 			priceWhenSell: 1, 			img: 'ncoin', 					craft: null}],
		[ 13, { name: 'Pillow(A)', 			priceWhenBuy: 0, 			priceWhenSell: 10, 			img: 'pillow_a_class', 	craft: null}],
		[ 14, { name: 'Fish(RTX)', 			priceWhenBuy: 0, 			priceWhenSell: 15, 			img: 'rtx_fish', 				craft: null}],
		[ 15, { name: 'Fragment(RTX)', 	priceWhenBuy: 0, 			priceWhenSell: 1_000, 	img: 'rtx_fragment', 		craft: null}],
		[ 16, { name: 'Videocard(RTX)', priceWhenBuy: 0, 			priceWhenSell: 50_000, 	img: 'rtx_videocard', 	craft: null}],
		[ 17, { name: 'Videocard', 			priceWhenBuy: 0, 			priceWhenSell: 10_000, 	img: 'videocard', 			craft: null}],
		[ 18, { name: 'Wheel', 					priceWhenBuy: 0, 			priceWhenSell: 10, 			img: 'wheel', 					craft: null}],
		[ 19, { name: 'Woodpile', 			priceWhenBuy: 0, 			priceWhenSell: 20, 			img: 'woodpile', 				craft: null}],
	]),

	cases: new Map([
		[ 0, { name: 'Default', price: 10, img: 'shop_case', innerItems: [
			[0, 99],
			[1, 50],
		]}],
		[ 1, { name: 'Materials', price: 1_000, img: 'shop_case', innerItems: [
			[2, 50],
		]}],
		[ 2, { name: 'RTX', price: 2_000, img: 'rtx_shop_case', innerItems: [
			[15, 99],
			[17, 5],
			[16, 1],
		]}],
		[ 3, { name: 'Trash Case', price: 100, img: 'trash_case', innerItems: [
			[6, 99],
			[11, 80],
			[13, 80],
			[18, 80], 
			[19, 80], 
		]}],
	])
};

const salaryNow = {
	// items: [], // dont use (in develop..)
	cases: [0, 1, 2, 3],
};

export default allObjects;
export { salaryNow };
