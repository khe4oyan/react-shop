class Lang{
	static lang = localStorage.getItem('language') ?? 'eng';
	static translate_item_name = new Map();

	constructor() { throw new Error('no instance'); }

	static set(eng, rus) {
		switch(Lang.lang) {
			case 'eng': return eng;
			case 'rus': return rus;
			default: return eng;
		}
	}

	static add_name(id, eng_name, rus_name) {
		Lang.translate_item_name.set(id, {eng: eng_name, rus: rus_name});
	}
	static name_check(id) {
		return Lang.translate_item_name.get(id)?.[Lang.lang] ?? id;
	}

	static first_time() {
		if (localStorage.getItem('language') == undefined) {
			Lang.language_choose();
		}
	}

	static language_choose() {
		const div = document.createElement('div');
		div.classList.add('language');
		div.classList.add('center');
		div.appendChild(Lang.#language_choose_block());
		document.body.prepend(div);
	}

	static #language_choose_block() {
		const div = document.createElement('div');

		const h2 = document.createElement('h2');
		h2.classList.add('language__header-text');
		h2.classList.add('center');
		h2.innerText = Lang.set('Choose language', 'Выбери язык');

		div.appendChild(h2);
		div.appendChild(Lang.#button_create('English', 'eng'));
		div.appendChild(Lang.#button_create('Русский', 'rus'));

		return div;
	}

	static #button_create(name, value) {
		const button = document.createElement('button');
		button.classList.add('event_button');
		button.classList.add('language__button');
		button.innerText = name;

		// button event listener
		button.addEventListener('click', () => {
			localStorage.setItem('language', value);
			location.reload();
		});
		
		return button;
	}
};
