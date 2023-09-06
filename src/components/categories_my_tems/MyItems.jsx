import ItemMy from "../itemMy/ItemMy";
import { useSelector } from "react-redux";

export default function MyItems() {
  const itemList = useSelector(state => state.myItems.myItems);
  
  return (
    <div className="my-items">
      <div className="items-container">
        {
          itemList.length > 0 ? itemList.map((item, index) => 
            <ItemMy 
              key={`my-items-my${index}`} 
              item={item} 
            />
          ) : 
          <p>no items</p>
        }
      </div>
    </div>
  );
}