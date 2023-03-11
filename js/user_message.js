class Message {
	elem;
	text;

	constructor(text, type = 'def') {
		this.text = text;

		switch(type){
			case 'red': { this.create_red(); break;}
			case 'green': { this.create_green(); break;}
			case 'craft': { this.create_craft(); break;}
			case 'info': { this.create_info(); break;}
			default: this.create_default();
		}

		this.show_elem();
	}
	create_default() {
		const div = this.create_elem();
		this.elem = div;
	}
	create_info() {
		const div = this.create_elem();
		div.classList.add('message-info');
		this.elem = div;
	}
	create_red() {
		const div = this.create_elem();
		div.classList.add('message-red');
		this.elem = div;
	}
	create_green() {
		const div = this.create_elem();
		div.classList.add('message-green');
		this.elem = div;
	}
	create_craft() {
		const div = this.create_elem();
		div.classList.add('message-craft');
		this.elem = div;
	}

	create_elem() {
		const div = document.createElement('div');
		div.classList.add('user-messages');
		div.classList.add('center');

		const p = document.createElement('p');
		p.innerText = this.text;

		div.appendChild(p);

		return div;
	}

	show_elem() {
		document.body.appendChild(this.elem);
		setTimeout(() => {
			this.hide_elem();
		}, 3000);
	}

	hide_elem() {
		this.elem.remove();
	}
};