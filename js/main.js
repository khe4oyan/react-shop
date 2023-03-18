categories();
for_new_players();

// ==- PROMO's -===================
// name, price
// promo_add();

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
CTRL.storage = storage;
Item_case.set_max_chance(1_000_000_000);

// ==- SHOP CASE's -====================
// CTRL.create('Junk', 'trash_case', 20); // ящик Димы
// CTRL.add('Iron plates', 'iron_plates', 5, 150000000);
// CTRL.add('Fish', 'fish', 4, null);
// CTRL.add('Wheel', 'wheel', 50, null);
// CTRL.add('Woodpile', 'woodpile', 150, null);
// CTRL.show();
// CTRL.add('Pillow (Class A)', 'pillow_a_class', 750, null);

CTRL.create('Random item', 'shop_case', 5_000);
CTRL.add('Flower', 'flower', 5, null);
CTRL.add('Vase', 'vase', 7, null);
CTRL.add('Box', 'box', 10, null);
CTRL.add('Phone', 'phone', 50, null);
CTRL.add('UFO', 'ufo', 999_999, 1_000);
CTRL.add('Car', 'car', 2_000, 1_000_000);
CTRL.add('Case(blue)', 'phone_case_blue', 20, null);
CTRL.show();

CTRL.create('Materials', 'shop_case', 8_000);
CTRL.add('Gold', 'gold_material', 9_900, 500_000);
CTRL.show();



// ==- SHOP ITEM's -====================
// shop_add(name, img, price);
// shop_add();


// ==- TEST TOOL's -====================
// random_chance_test(1_000_000, Item_case.max_chance);
// prcent_calculate(15, Item_case.max_chance);