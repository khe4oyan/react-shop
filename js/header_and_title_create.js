/*
	<header>
		<a class="header_link center" href="html/menu/menu.html">menu</a>
		<p class="balance">$260</p>
		<a class="header_link center" href="html/work/work.html">work</a>
	</header>
*/

class HeaderTitle {
	constructor() { throw new Error('not instance');}
	static init(title_name, left_text, left_link, right_text, right_link) {
		HeaderTitle.#title(title_name);
		HeaderTitle.#header(left_link, left_text, right_link, right_text);
	}

	static #title(name) {
		document.querySelector('title').innerText = name;
	}

	static #header(left_link, left_text, right_link, right_text) {
		const header = document.createElement('header');
		
		header.appendChild(HeaderTitle.#header_left(left_link, left_text));
		header.appendChild(HeaderTitle.#header_mid());
		header.appendChild(HeaderTitle.#header_right(right_link, right_text));

		document.body.prepend(header);
	}

	static #header_left(left_link = '', left_text = '') {
		if (left_text == '' && left_link == '') { return document.createElement('p');}
		const a = this.#create_a();
		a.innerText = left_text;
		a.href = left_link;
		return a;
	}
	static #header_right(right_link = '', right_text = '') {
		if (right_text == '' && right_link == '') { return document.createElement('p');}
		const a = this.#create_a();
		a.innerText = right_text;
		a.href = right_link;
		return a;
	}
	static #header_mid() {
		const mid = document.createElement('p');
		mid.classList.add('balance');
		mid.innerText = '';
		return mid;
	}

	static #create_a() {
		const a = document.createElement('a');
		a.classList.add('header_link');
		a.classList.add('center');
		return a;
	}
};