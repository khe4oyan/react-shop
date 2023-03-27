class Job {
	static work_now = false;
	static storage = null;

	name;
	img;
	salary;
	time;
	html_elem;

	constructor(name, img, salary, time) {
		this.name = name;
		this.img = img;
		this.salary = salary;
		this.time = time;
		this.#create_html();
	}

	#create_html() {
		const job = Job.CE('div', ['job']);
		job.appendChild(this.#job_title_html());
		job.appendChild(this.#job_info_html());

		this.html_elem = job;
	}
	#job_title_html() {
		// <div class="job-title">
		// 	<img class="job-logo" src="../../favicon.png">
		// 	<div>
		// 		<p class="job-name">Job Name</p>
		// 		<button class="event_button job-salary-work-button">work</button>
		// 	</div>
		// </div>
		const title = Job.CE('div', ['job-title']);
		const logo = this.#job_title_img_html();
		const block = this.#job_title_block_html();

		title.appendChild(logo);
		title.appendChild(block);
		return title;
	}
	#job_title_block_html() {
		const block = Job.CE('div');
		const name = Job.CE('p', ['job-name']);
		const button = this.job_button_create_html();

		name.innerText = Lang.name_check(this.name); // translate

		block.appendChild(name);
		block.appendChild(button);
		return block;
	}

	job_button_create_html() {
		throw new Error('Override this method');
	}

	#job_title_img_html() {
		const logo = new Image();
		logo.classList.add('job-logo');
		logo.src = 'job_icons/' + this.img + '.png';
		return logo;
	}

	#job_info_html() {
		// <div class="job-info">
		// 	<p class="job-salary">3</p>
		// 	<p class="job-work-time">3s</p>
		// </div>
		const info = Job.CE('div', ['job-info']);
		const salary = Job.CE('p', ['job-salary']);
		const time = Job.CE('p', ['job-work-time']);
		
		salary.innerText = this.salary;
		time.innerText = this.time + 's';

		info.appendChild(salary);
		info.appendChild(time);

		return info;
	}
	
	static CE(tag, classList = []) {
		const elem = document.createElement(tag);
		for (let i = 0; i < classList.length; ++i) {
			elem.classList.add(classList[i]);
		}
		return elem;
	}
	append(elem) {
		document.querySelector(elem).appendChild(this.html_elem);
	}
};