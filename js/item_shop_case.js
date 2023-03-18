class Item_case extends Item_shop{
	item_drop_chance;
	static max_chance = 1_000_000;

	constructor(name, img, price) {
		super(name, img, price);
		this.item_drop_chance = new Map();
		this.max_chance = 1_000_000;
	}

	static set_max_chance(num) {
		this.max_chance = num;
	}

	button_listener(button, storage) {
		button.innerText = 'open';
		button.classList.remove('item-but');
		button.classList.add('item-case');

		button.addEventListener('click', () => {
			this.open(storage);
		});
	}

	open(storage) {
		if (storage.money < this.price) {
			new Message('You dont have money', 'red');
			return;
		}
		// remove money
		storage.money_take(this.price);
		
		// chance check
		const chance = 1 + Math.floor(Math.random() * this.max_chance);

		
		const keys = [...this.item_drop_chance.keys()];
		let ind = 0;
		while(ind < keys.length) {
			if (chance < keys[ind]) {
				this.drop_check(this.item_drop_chance.get(keys[ind]));
				Craft.craft_check(storage);
				return;
			}
			++ind;
		}

		new Message('Nothing fell out', 'info');
	}

	chance_add(name, img, price, chance) {
		if (this.item_drop_chance.get(chance) == undefined) {
			this.item_drop_chance.set(chance, []);
		}

		this.item_drop_chance.get(chance).push([name, img, price]);
	}
	drop_check(chance_block) {
		if (chance_block.length > 1) {
			const ch = Math.floor(Math.random() * chance_block.length);
			chance_block = chance_block[ch];
		}else {
			chance_block = chance_block[0];
		}

		const [name, img, price] = chance_block;

		this.drop_item(name, img, price);
	}

	drop_item(name, img, price) {
		storage.item_add(name, img, price);
		new Message(`Case dropped "${name}"!`, 'green');
	}
};