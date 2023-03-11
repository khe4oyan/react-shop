class Item_my extends Item{
	html_elem;
	count_elem;
	count;

	static promo = new Map();

	constructor(name, img, price, count = 1) {
		price = Item_my.promo_price(name, price);

		super(name, img, price);
		this.count = count;
	}

	static promo_price(name, price) {
		return Item_my.promo.get(name) ?? Math.floor(price / 2);
	}
	static promo_add(name, price) {
		Item_my.promo.set(name, price);
	}

	show(storage) {
		let item = this.html_create_elem();

		this.count_elem = document.createElement('p');
		const button = document.createElement('button');
		
		this.count_elem.classList.add('item-count');
		button.classList.add('event_button');
		button.classList.add('item-sell');
		
		this.count_elem.innerText = this.count;
		button.innerText = 'sell';

		item.appendChild(this.count_elem);
		item.appendChild(button);

		button.addEventListener('click', () => {
			this.take.bind(this);
			this.take(storage, item);
			new Message(`You sell ${this.name}`, 'red');
		});

		this.html_elem = item;
		document.querySelector('.my-items .items-container').appendChild(item);
	}

	click(storage) {
		--this.count;
		storage.count_dec(this.name);
		if (this.count < 1) {
			storage.item_remove(this.name);
			this.html_elem.remove();
		}

		this.count_elem.innerText = this.count;
		Craft.craft_check(storage);
	}

	take(storage) {
		this.click(storage);
		storage.money_add(this.price);
	}

	add_item() {
		++this.count;
		this.html_elem.querySelector('.item-count').innerText = this.count;
	}
};