class Item_shop extends Item{
	constructor(name, img, price) {
		super(name, img, price);
	}

	show(storage) {
		let item = this.html_create_elem();
		this.create_button(storage, item);
		document.querySelector('.shop .items-container').appendChild(item);
	}

	create_button(storage, item) {
		const button = document.createElement('button');
		button.classList.add('item-buy');
		button.classList.add('event_button');
		button.innerText = 'buy';
		item.appendChild(button);
		this.button_listener(button, storage);
	}

	button_listener(button, storage) {
		button.addEventListener('click', () => {
			// have money
			if (storage.money < this.price) {
				new Message('You dont have money', 'red');
				return;
			}
			// remove money
			storage.money_take(this.price);
			// add item in my items list
			storage.item_add(this.name, this.img, this.price);
			new Message(`You buy ${this.name}`, 'green');
			Craft.craft_check(storage);
		});
	}
};