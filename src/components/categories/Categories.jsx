import './categories.css'
import Shop from '../categories_shop/Shop';
import MyItems from '../categories_my_tems/MyItems';
import { useState } from 'react';

export default function Categories({tools}) {
	const [categoryToggle, setCategoryToggle] = useState('shop');
	return (
		<div className="categories">
			<div className="categories__header">
				<span onClick={() => {setCategoryToggle('shop')}} className={`material-symbols-outlined categories_logo categories_shop ${ categoryToggle=='shop' && 'categories_select'}` }>shopping_bag</span>
				<span onClick={() => {setCategoryToggle('inventory')}} className={`material-symbols-outlined categories_logo categories_my ${ categoryToggle=='inventory' && 'categories_select'}` }>backpack</span>
			</div>
			{ categoryToggle == 'shop' && <Shop tools={tools}/> }
			{ categoryToggle == 'inventory' && <MyItems tools={tools}/> }
		</div>
	);
}