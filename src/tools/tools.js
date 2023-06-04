export 
function firstVisit() {
  if (localStorage.getItem('upd') == undefined) {
    localStorage.clear();
    localStorage.setItem('upd', 0); // future maybe used(now not used)
    localStorage.setItem('money', 20_000);
    localStorage.setItem('myItems', JSON.stringify([[5, 2]]));
  }
}

export
function toolsCreate(myItems, setMyItems, addMoney, remMoney, hasMoney) {
  const addItem = (itemId, count = 1) => {
    const findIndex = myItems.findIndex((item) => {return item[0] == itemId});
    if (findIndex == -1) {
      // if new item
      setMyItems(prev => {
        return [...prev, [itemId, count]]
      });
    } else {
      // if have item
      const newValue = myItems[findIndex][1] + count;
      setMyItems(prev => {
        const newVal = [...prev];
        newVal[findIndex][1] = newValue;
        return newVal;
      });
    }
  }

  const remItem = (itemId, count = 1) => {
    const findIndex = myItems.findIndex((item) => { return item[0] == itemId} );
    
    // if count > 1
    if (myItems[findIndex][1] > count) {
      setMyItems(prev => {
        const newItems = prev.map((item, index) => {
          if (index == findIndex) {
            return [item[0], item[1] - count];
          }
          return item;
        })
        return newItems;
      });
    } else {
      // if count !> 1
      setMyItems(prev => {
        return prev.filter((_, index) => {
          return index != findIndex;
        });
      });
    }
  }

  const hasItem = (itemId, itemCount = 1) => {
    const findIndex = myItems.findIndex((item) => {return item[0] == itemId});
    if (findIndex == -1) {
      // if not have
      return false;
    } else {
      // if have
      if (myItems[findIndex][1] < itemCount) {
        return false;
      } else {
        return true;
      }
    }
  }

  const allItems = () => { 
    return myItems; 
  }

  const tools = {
    items: {
      addItem,
      remItem,
      hasItem,
      allItems,
    },
    
    money: {
      addMoney,
      remMoney,
      hasMoney,
    }
  };
  return tools;
}