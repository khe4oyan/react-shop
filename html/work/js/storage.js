class Storage extends Storage_money {
	white_list; // new Set();
	my_jobs; // []
	reset_list; // input Map;

	constructor() {
		super();
		this.check_my_jobs(); // local storage
		this.white_list = new Set();
	}

	update_check(input_work_update) {
		const local_work_update = Number(localStorage.getItem('work_update')) ?? 0;
		if (local_work_update < input_work_update) {
			localStorage.setItem('work_update', input_work_update);	
			this.jobs_filter();
		}
	}
	
	update_check_jobs_names(input_jobs_name_update) {
		const local_jobs_name_update = Number(localStorage.getItem('jobs_name_update')) ?? 0;
		if (local_jobs_name_update < input_jobs_name_update) {
			localStorage.setItem('jobs_name_update', input_jobs_name_update);	
			this.jobs_property_reset();
		}
	}
	wh_add(name) {
		this.white_list.add(name);
	}

	jobs_filter() {
		let list = [];
		for (let i = 0; i < this.my_jobs.length; ++i) {
			const job_name = this.my_jobs[i][0];
			if (this.white_list.has(job_name)) {
				list.push(this.my_jobs[i]);
			}
		}

		this.my_jobs = list;
		this.save_my_jobs();
	}

	jobs_property_list_set(list) {
		this.reset_list = list;
	}

	jobs_property_reset() {
		for (let i = 0; i < this.my_jobs.length; ++i) {
			this.my_jobs[i] = this.reset_list.get(this.my_jobs[i][0]);
		}

		this.save_my_jobs();
	}

	check_my_jobs() { // check in local storage
		this.my_jobs = JSON.parse(localStorage.getItem('my_jobs')) ?? [];
	}

	show_my_jobs() { // work only with this.my_jobs
		for (let i = 0; i < this.my_jobs.length; ++i) {
			const [name, img, salary, time] = this.my_jobs[i];
			new My_Job(name, img, salary, time).show_html();
		}
	}

	save_my_jobs() {
		localStorage.setItem('my_jobs', JSON.stringify(this.my_jobs));
	}

	add_my_jobs(name, img, salary, time) {
		new My_Job(name, img, salary, time).show_html();
		this.my_jobs.push([name, img, salary, time]);
		this.save_my_jobs();
	}

	find_job(job_name) {
		for (let i = 0; i < this.my_jobs.length; ++i) {
			if (this.my_jobs[i][0] == job_name) {
				return true;
			}
		}
	}
}