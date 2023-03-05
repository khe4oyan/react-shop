class Craft {
	static storage;
	static list = new Map();
	static price_list = new Map();
	static craft_list = [];

	element;
	
	constructor(i0, i1, i2, l0, l1, l2, c0 = 1, c1 = 1, c2 = 1) {
		if (Craft.can_craft(i1, i2, c1, c2)) {
			if (!Craft.list.has(i0)) {
				this.create_element(i0, i1, i2, l0, l1, l2, c0, c1, c2);
				Craft.list.set(i0, this.element);
			}
		} else {
			if (Craft.list.has(i0)) {
				Craft.list.get(i0).remove();
				Craft.list.delete(i0);
			}
		}
	}

	remove() {
		this.element.remove();
	}

	create_element(i0, i1, i2, l0, l1, l2, c0 = 1, c1 = 1, c2 = 1) {
		this.element = document.createElement('div');
		this.element.classList.add('craft');

		this.element.appendChild(this.create_result_card(i0, l0, c0, i1, c1, i2, c2));
		this.element.appendChild(this.create_card_name(i1, l1, c1));
		this.element.appendChild(this.create_card_name(i2, l2, c2));

		document.querySelector('.crafts').appendChild(this.element);
	}

	create_result_card(name, img, count, i1, c1, i2, c2) {
		const card = this.create_card(img, count);

		const crafted_button = document.createElement('button');
		crafted_button.classList.add('crafted_button');
		crafted_button.classList.add('event_button');
		crafted_button.innerText = 'craft';

		crafted_button.addEventListener('click', () => {
			for (let i = 0; i < count; ++i) { // give any time
				Craft.storage.item_add(name, img, Craft.salary_get(name));
			}

			for (let i = 0; i < c1; ++i) {
				Craft.storage.items_object[i1].click(Craft.storage)
			}
			
			for (let i = 0; i < c2; ++i) {
				Craft.storage.items_object[i2].click(Craft.storage)
			}
		});

		card.appendChild(crafted_button);

		return card;
	}

	static salary_get(name) {
		const price = Craft.price_list.get(name);
		return price;
	}
	static salary_add(name, price) {
		Craft.price_list.set(name, price);
	}
	
	create_card_name(name, img, count) {
		const card = this.create_card(img, count);
		const crafted_name = document.createElement('p');
		crafted_name.classList.add('crafted_name');
		crafted_name.innerText = name;

		card.appendChild(crafted_name);
		return card;
	}

	create_card(img, count) {
		const card = document.createElement('div');
		const crafted_count = document.createElement('h2');
		const crafted_img = new Image();

		card.classList.add('card');
		crafted_count.classList.add('crafted_count');
		crafted_img.classList.add('crafted_img');
		
		crafted_count.innerText = "x" + count;
		crafted_img.src = `items/${img}.png`;

		card.appendChild(crafted_count);
		card.appendChild(crafted_img);

		return card;
	}

	static find_item(name, count) {
		const list = this.storage.get_item_list();
		return (list[name] >= count) ? true : false;
	}
	
	static can_craft(name, name2, count = 1, count2 = 1) {
		if (name == name2) {
			count += count2
			return Craft.find_item(name, count);
		}
		return Craft.find_item(name, count) && Craft.find_item(name2, count2);
	}
	
	static create_craft_html_element() {
		let elemt = document.createElement('div');
		elemt.innerHTML = 'Test';
		return elemt;
	}
	
	static craft_check(storage) {
		Craft.storage = storage;
		const list = Craft.craft_list;
		
		for (let i = 0; i < list.length; ++i) {
			new Craft(...list[i]);
		}
	}

	static craft_add(craft, left_item, right_item, craft_img, left_img, right_img, craft_count, left_count, right_count) {
		Craft.craft_list.push([craft, left_item, right_item, craft_img, left_img, right_img, craft_count, left_count, right_count]);
	}
};