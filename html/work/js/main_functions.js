function shop_job(name, img, money, time, price) {
	if(Job.storage.find_job(name)) { return; }
	new Shop_Job(name, img, money, time, price).show_html();
	Job.storage.wh_add(name);
}