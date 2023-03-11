class My_Job extends Job{
	constructor(name, img, salary, time) {
		super(name, img, salary, time);
	}

	show_html() {
		this.append('.my-jobs');
	}
	job_button_create_html() {
		const button = Job.CE('button', ['event_button', 'job-salary-work-button']);

		button.innerText = 'work';
		
		button.addEventListener('click', () => {
			if (Job.work_now) { return; } // work right now then return
			Job.work_now = true;

			const time_elem = this.html_elem.children[1].children[1];
			time_elem.classList.toggle('in-work');

			// timer (update innerText in time_elem at real time)
			let seconds = this.time;
			const work_interval = setInterval(() => {
				time_elem.innerText = --seconds + 's';
			}, 1000);

			// timer stopper
			setTimeout(() => {
				clearInterval(work_interval);
				time_elem.innerText = this.time + 's';
				time_elem.classList.toggle('in-work');
				Job.storage.money_add(this.salary);
				new Message(`You got ${this.salary}$`, 'green');
				Job.work_now = false;
			}, this.time * 1000 + 1000);
		});

		return button;
	}
}