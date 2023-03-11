const money = new Storage_money();

add();
remove();
set_0();
clear();
// add
// remove
// set_0
// clear

function add() {
	const elems = document.querySelectorAll('.add');
	
	for(let i = 0; i < elems.length; ++i) {
		elems[i].addEventListener('click', () => {
			money.money_add(+elems[i].value);
		});
	}
}
function remove() {
	const elems = document.querySelectorAll('.remove');
	
	for(let i = 0; i < elems.length; ++i) {
		elems[i].addEventListener('click', () => {
			if (money.money_have(elems[i].value)) {
				money.money_take(elems[i].value);
			}
		});
	}
}

function set_0() {
	document.querySelector('.set_0').addEventListener('click', () => {
		money.money = 0;
		money.money_save();
		money.money_show();
	});
}

function clear() {
	document.querySelector('.clear').addEventListener('click', () => {
		localStorage.clear();
	});
}