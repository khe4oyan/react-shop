const storage = new Storage();
Job.storage = storage;

// whiteList
Job.storage.wh_add('Factory');

// add jobs in shop
// arguments (name, img, money, time, price)
shop_job('Operator', 'operator', 13, 10, 500);
shop_job('Programmer', 'programmer', 200, 60, 3000);

Job.storage.update_check(6);
Job.storage.show_my_jobs();
