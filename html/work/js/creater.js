/*
	<div class="my-jobs jobs-container">
		<h2 class="jobs-header">My Jobs</h2>
	</div>

	<div class="all-jobs jobs-container">
		<h2 class="jobs-header">All Jobs</h2>
	</div>
*/

class Creater {
	static my(text) {
		const div = Creater.#div('my-jobs');
		const h2 = Creater.#header(text);
		div.appendChild(h2);
		document.body.appendChild(div);
	}

	static all(text) {
		const div = Creater.#div('all-jobs');
		const h2 = Creater.#header(text);
		div.appendChild(h2);
		document.body.appendChild(div);
	}

	static #header(text) {
		const h2 = document.createElement('h2');
		h2.innerText = text;
		h2.classList.add('jobs-header');
		return h2;
	}
	static #div(class_name) {
		const div = document.createElement('div');
		div.classList.add('jobs-container');
		div.classList.add(class_name);
		return div;
	}
};