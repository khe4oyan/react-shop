HeaderTitle.init(Lang.set('Shop | jobs', 'Магазин | работы'), Lang.set('back', 'назад'), '../../index.html');
Creater.my(Lang.set('My jobs', 'Мои работы'));
Creater.all(Lang.set('All jobs', 'Все работы'));

// ===- TRANSLATE's -===
Lang.add_name('Factory', 'Factory', 'Фабрика');
Lang.add_name('Operator', 'Operator', 'Оператор');
Lang.add_name('Programmer', 'Programmer', 'Программист');

const storage = new Storage();
Job.storage = storage;

const update = 7;
const update_jobs_properties = 1;

// whiteList
Job.storage.wh_add('Factory');

// jobs properties reset
const list = new Map();
list.set('Factory', ['Factory', 'fac', 10, 3]);
list.set('Operator', ['Operator', 'operator', 25, 5]);
list.set('Programmer', ['Programmer', 'programmer', 100, 5]);

Job.storage.jobs_property_list_set(list);
Job.storage.update_check_jobs_names(update_jobs_properties);

// add jobs in shop (name, img, money, time, price)
shop_job('Operator', 'operator', 25, 5, 500);
shop_job('Programmer', 'programmer', 100, 5, 3000);

Job.storage.update_check(update); 
Job.storage.show_my_jobs();
