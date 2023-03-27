class Shop_Job extends Job {
	job_price;

	constructor(name, img, salary, time, job_price) {
		super(name, img, salary, time);
		this.job_price = job_price;
		this.add_job_price();
	}

	show_html() {
		this.append('.all-jobs');
	}

	job_button_create_html() {
		const button = Job.CE('button', ['event_button', 'job-buy-work-button']);

		button.innerText = Lang.set('buy', 'купить');
		
		button.addEventListener('click', () => {
			if (Job.storage.money_have(this.job_price)) {
				Job.storage.money_take(this.job_price);
				this.html_elem.remove();
				Job.storage.add_my_jobs(this.name, this.img, this.salary, this.time);
			}else {
				new Message(Lang.set('You dont have money', 'Тебе не хватает денег'), 'red');
			}
		});

		return button;
	}

	add_job_price() {
		const price = Job.CE('span', ['job-price', 'center']);
		price.innerText = this.job_price + '$';

		this.html_elem.appendChild(price);
	}
}