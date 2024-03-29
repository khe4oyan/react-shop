// all items/cases in game
import itemsImages from './itemsImages'

const allObjects = {
	items: new Map([
		[ 0, 	{ name: 'Box', 						priceWhenBuy: 10, 		priceWhenSell: 5, 			img: itemsImages.box, 						craft: null}],
		[ 1, 	{ name: 'Car', 						priceWhenBuy: 100, 		priceWhenSell: 70, 			img: itemsImages.car, 						craft: null}],
		[ 2, 	{ name: 'Material(Gold)', priceWhenBuy: 10_000, priceWhenSell: 10_000, 	img: itemsImages.gold_material, 	craft: null}],
		[ 3, 	{ name: 'Car(Gold)', 			priceWhenBuy: 20_000, priceWhenSell: 10_200, 	img: itemsImages.car_gold, 				craft: [1, [1, 1], [2, 2]]}],
		[ 4, 	{ name: 'Box(Gold)', 			priceWhenBuy: 0, 			priceWhenSell: 10_030, 	img: itemsImages.box_gold, 				craft: [1, [0, 1], [2, 1]]}],
		[ 5, 	{ name: 'Case', 					priceWhenBuy: 0, 			priceWhenSell: 500, 		img: itemsImages.case_, 						craft: null}],
		[ 6, 	{ name: 'Fish', 					priceWhenBuy: 20, 		priceWhenSell: 15, 			img: itemsImages.fish, 						craft: null}],
		[ 7, 	{ name: 'Flower', 				priceWhenBuy: 2, 			priceWhenSell: 1, 			img: itemsImages.flower, 					craft: null}],
		[ 8, 	{ name: 'Vase', 					priceWhenBuy: 4, 			priceWhenSell: 3, 			img: itemsImages.vase, 						craft: null}],
		[ 9, 	{ name: 'Flower In Vase', priceWhenBuy: 0, 			priceWhenSell: 10, 			img: itemsImages.flower_in_vase, 	craft: [1, [7, 1], [8, 1]]}],
		[ 10, { name: 'Hat', 						priceWhenBuy: 50, 		priceWhenSell: 45, 			img: itemsImages.hat, 						craft: null}],
		[ 11, { name: 'Iron Plates', 		priceWhenBuy: 0, 			priceWhenSell: 100, 		img: itemsImages.iron_plates, 		craft: null}],
		[ 12, { name: 'Ncoin', 					priceWhenBuy: 1, 			priceWhenSell: 1, 			img: itemsImages.ncoin, 					craft: null}],
		[ 13, { name: 'Pillow(A)', 			priceWhenBuy: 0, 			priceWhenSell: 10, 			img: itemsImages.pillow_a_class, 	craft: null}],
		[ 14, { name: 'Fish(RTX)', 			priceWhenBuy: 0, 			priceWhenSell: 15, 			img: itemsImages.rtx_fish, 				craft: [1, [6, 1], [16, 1]]}],
		[ 15, { name: 'Fragment(RTX)', 	priceWhenBuy: 0, 			priceWhenSell: 1_000, 	img: itemsImages.rtx_fragment, 		craft: null}],
		[ 16, { name: 'Videocard(RTX)', priceWhenBuy: 0, 			priceWhenSell: 50_000, 	img: itemsImages.rtx_videocard, 	craft: [1, [17, 1], [15, 10]]}],
		[ 17, { name: 'Videocard', 			priceWhenBuy: 0, 			priceWhenSell: 10_000, 	img: itemsImages.videocard, 			craft: null}],
		[ 18, { name: 'Wheel', 					priceWhenBuy: 0, 			priceWhenSell: 10, 			img: itemsImages.wheel, 					craft: null}],
		[ 19, { name: 'Woodpile', 			priceWhenBuy: 0, 			priceWhenSell: 20, 			img: itemsImages.woodpile, 				craft: null}],
	]),

	cases: new Map([
		[ 0, { name: 'RTX', price: 2_000, img: itemsImages.rtx_shop_case, innerItems: [
			[16, 1],
			[17, 20],
			[15, 99],
		]}],
		[ 1, { name: 'Materials', price: 1_000, img: itemsImages.shop_case, innerItems: [
			[2, 50],
		]}],
		[ 2, { name: 'Trash Case', price: 100, img: itemsImages.trash_case, innerItems: [
			[11, 80],
			[13, 80],
			[18, 80], 
			[19, 80], 
			[6, 99],
		]}],
		[ 3, { name: 'Default', price: 10, img: itemsImages.shop_case, innerItems: [
			[1, 50],
			[7, 50],
			[8, 50],
			[10, 50],
			[0, 99],
		]}],
	]),

	locations: new Map([
		[0, {name: 'Garbage', timer: 2, money: [10, 50]}],
		[1, {name: 'Work', timer: 5, money: [100, 350]}],
	]),
};

const salaryNow = {
	// items: [], // dont use (in develop..)
	cases: [0, 1, 2, 3],
};

export default allObjects;
export { salaryNow };