class Storage_money {
	money; // Number
	constructor() {
		this.money_ckeck();
		this.money_show();
	}

	money_ckeck() {
		this.money = Number(localStorage.getItem('money') ?? 0);
	}
	
	money_have(price) {
		return (price <= this.money);
	}

	money_take(count) {
		this.money -= count;
		this.money_save();
		this.money_show();
	}

	money_add(count) {
		this.money += count;
		this.money_save();
		this.money_show();
	}

	money_save() {
		localStorage.setItem('money', this.money);
	}

	money_show() {
		document.querySelector('.balance').innerText = '$' + this.money.toLocaleString();
	}
}