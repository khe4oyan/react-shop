for_new_players();

// ==- PROMO's -===================
promo_add('Gold', 9_900); 
promo_add('NCoin', 10); 

// ==- CRAFT'a add -====================
craft_add('Gold Box', 'Box', 'Gold', 1, 1, 1, 'box_gold', 'Box', 'gold_material', 10_100);
craft_add('Gold Car', 'Car', 'Gold', 1, 1, 2, 'car_gold', 'Car', 'gold_material', 23_000);

// ==- GENERAL -====================
let storage = new Storage();
Craft.craft_check(storage);

// ==- SHOP ITEM's -====================
shop_add('Box', 'box', 10);
shop_add('Car', 'car', 2_000);
shop_add('UFO', 'ufo', 999_999);
shop_add('Gold', 'gold_material', 10_000);
shop_add('NCoin', 'ncoin', 10);
