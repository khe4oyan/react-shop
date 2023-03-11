categories();
for_new_players();

// ==- PROMO's -===================
promo_add('Gold', 9_900); 
promo_add('NCoin', 10); 

// ==- CRAFT'a add -====================
craft_add('Gold Box', 'Box', 'Gold', 1, 1, 1, 'box_gold', 'box', 'gold_material', 10_100);
craft_add('Gold Car', 'Car', 'Gold', 1, 1, 2, 'car_gold', 'car', 'gold_material', 23_000);
craft_add('Collection 1', 'Flower', 'Vase', 1, 1, 1, 'flower_in_vase', 'flower', 'vase', 13);
craft_add('Phone(C)', 'Phone', 'Case(blue)', 1, 1, 1, 'phone_in_blue_case', 'phone', 'phone_case_blue', 75);
craft_add('Case(G)', 'Case(blue)', 'Gold', 1, 1, 1, 'phone_case_gold', 'phone_case_blue', 'gold_material', 10_000);
craft_add('Phone(G)', 'Phone', 'Case(G)', 1, 1, 1, 'phone_in_gold_case', 'phone', 'phone_case_gold', 10_080);
craft_add('#Phone(G)', 'Phone(C)', 'Gold', 1, 1, 1, 'phone_in_gold_case', 'phone_in_blue_case', 'gold_material', 10_080);

// ==- GENERAL -====================
let storage = new Storage();
Craft.craft_check(storage);

// ==- SHOP ITEM's -====================
shop_add('Flower', 'flower', 5);
shop_add('Vase', 'vase', 7);
shop_add('Box', 'box', 10);
shop_add('Case(blue)', 'phone_case_blue', 20);
shop_add('Phone', 'phone', 50);
shop_add('Car', 'car', 2_000);
shop_add('UFO', 'ufo', 999_999);
shop_add('Gold', 'gold_material', 10_000);
shop_add('NCoin', 'ncoin', 10);