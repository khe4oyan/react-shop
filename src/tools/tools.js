const hasItem = (myItems, itemId, itemCount = 1) => {
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
};

export default hasItem;