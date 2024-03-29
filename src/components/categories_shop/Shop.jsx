import ItemShop from "../itemShop/itemShop";
import { salaryNow } from "../../data/data";

export default function Shop() {
	const itemList = salaryNow.cases; // use data.salaryNow.cases

	return(
		<div className="shop">
			<div className="items-container">
				{ 
					itemList.length > 0 ? itemList.map((item, index) => (
						<ItemShop 
							key={`my-items-shop${index}`} 
							ind={item} 
						/>
					)) :
					<p>sold out</p>
				} 
			</div>
		</div>
	);
}