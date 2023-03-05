function craft_add(craft_item, letf_item, right_item, craft_count, left_count, right_count, craft_img, left_img, right_img, price) {
	Craft.craft_add(craft_item, letf_item, right_item, craft_img, left_img, right_img, craft_count, left_count, right_count);
	Craft.salary_add(craft_item, price * 2);
}

function shop_add(name, img, price) {
	new Item_shop(name, img, price).show(storage);
}
function promo_add(name, price) {
	Item_my.promo_add(name, price);
}

function for_new_players() {
// бонус новичкам
	if (localStorage.getItem('update') == null) {
		let bonus = {
			"Bonus": [900,"case", 2],
		}
		
		localStorage.setItem('all_items', JSON.stringify(bonus));
		localStorage.setItem('update', 0);
		localStorage.setItem('money', 260);
		localStorage.setItem('my_jobs', JSON.stringify([['Factory', 'fac', 10, 30]]));
	}
}
