function shop_job(name, img, money, time, price) {
	Job.storage.wh_add(name);
	if(Job.storage.find_job(name)) { return; }
	new Shop_Job(name, img, money, time, price).show_html();
}