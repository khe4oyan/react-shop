class Item {
	name;
	img;
	price;

	constructor(name, img, price) {
		this.name = name;
		this.img = img;
		this.price = price;
	}

	html_create_elem() {
		const item = document.createElement('div');
		const name = document.createElement('p');
		const img = new Image();
		const price = document.createElement('p');
		
		item.classList.add('item');
		name.classList.add('item-name');
		img.classList.add('item-img');
		price.classList.add('item-price');
		
		name.innerText = Lang.name_check(this.name);
		img.src = 'items/' + this.img + '.png';
		price.innerText = this.price.toLocaleString();
		
		item.appendChild(name);
		item.appendChild(img);
		item.appendChild(price);

		return item;
	}

	show() { throw new Error('override this method'); }
};