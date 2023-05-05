import ItemMy from "../itemMy/ItemMy";

export default function MyItems({tools}) {
  const itemList = tools.items.allItems();
  
  return (
    <div className="my-items">
      <div className="items-container">
        {itemList.length > 0 ? itemList.map((item, index) => {
          return <ItemMy key={`my-items-my${index}`} item={item} tools={tools}/>
        }) : <p>no items</p>}
      </div>
    </div>
  );
}