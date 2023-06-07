import './categories.css'
import { useEffect, useState } from 'react';
import Shop from '../categories_shop/Shop';
import MyItems from '../categories_my_tems/MyItems';
import Locations from '../categories_locations/Locations';

export default function Categories({tools}) {
	const [categoryToggle, setCategoryToggle] = useState(() => {
		const category = localStorage.getItem('category');
		if (category == undefined) {
			localStorage.setItem('category', 'shop');
			return 'shop';
		}

		return category;
	});
	
	useEffect(() => {
		localStorage.setItem('category', categoryToggle);
	}, [categoryToggle]);


	return (
		<div className="categories">
			<div className="categories__header">
				<span onClick={() => {setCategoryToggle('shop')}} className={`material-symbols-outlined categories_logo categories_shop ${ categoryToggle == 'shop' && 'categories_select'}` }>shopping_bag</span>
				<span onClick={() => {setCategoryToggle('inventory')}} className={`material-symbols-outlined categories_logo categories_my ${ categoryToggle == 'inventory' && 'categories_select'}` }>backpack</span>
				<span onClick={() => {setCategoryToggle('location')}} className={`material-symbols-outlined categories_logo categories_my ${ categoryToggle == 'location' && 'categories_select'}` }>travel_explore</span>
			</div>
			{ categoryToggle == 'shop' && <Shop tools={tools}/> }
			{ categoryToggle == 'inventory' && <MyItems tools={tools}/> }
			{ categoryToggle == 'location' && <Locations tools={tools}/> }
		</div>
	);
}