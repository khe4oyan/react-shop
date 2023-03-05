class Storage extends Storage_money {
	items; // {}
	items_object; // {}
	
	constructor() {
		super();
		this.items_object = {};
		this.money_show();
		this.items_check();
	}

	count_dec(name) {
		storage.items[name][2]--;
		this.items_save();
	}

	items_check() {
		this.items = JSON.parse(localStorage.getItem('all_items'));
		if (this.items == null) {
			this.items = {};
		}else {
			for (const name in this.items) {
				const [price, img, count] = this.items[name];
				let item = new Item_my(name, img, price, count);
				item.show(this);
				this.items_object[name] = item;
			}
		}
	}
	items_save() {
		localStorage.setItem('all_items', JSON.stringify(this.items));
	}
	item_add(name, img, price) {
		// if no have create
		if (this.items[name] == undefined) {
			this.items[name] = [price, img, 1];
			let item = new Item_my(name, img, price);
			item.show(this);
			this.items_object[name] = item;
		}else {
			// if have increment count
			this.items[name][2]++;
			this.items_object[name].add_item();
		}

		this.items_save();
	}
	
	item_remove(name) {
		delete this.items[name];
		this.items_save();
	}

	get_item_list() {
		let list = {};

		for (const key in this.items) {
			list[key] = this.items[key][2];
		}

		return list;
	}
};