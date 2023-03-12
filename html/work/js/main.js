const storage = new Storage();
Job.storage = storage;

// whiteList
Job.storage.wh_add('Factory');

const list = new Map();
list.set('Factory', ['Factory', 'fac', 10, 3]);
list.set('Operator', ['Operator', 'operator', 25, 5]);
list.set('Programmer', ['Programmer', 'programmer', 100, 5]);

Job.storage.jobs_property_list_set(list);

// updates
Job.storage.update_check(7, 1); 

// add jobs in shop (name, img, money, time, price)
shop_job('Operator', 'operator', 25, 5, 500);
shop_job('Programmer', 'programmer', 100, 5, 3000);

Job.storage.show_my_jobs();
