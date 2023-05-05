import './App.css'

import React, { useEffect, useState } from 'react';
import Header from './components/header/Header'
import Crafts from './components/crafts/Crafts'
import Categories from './components/categories/Categories';

firstVisit();

export default function App() {
  const [money, setMoney] = useState(Number(localStorage.getItem('money')));
  const [myItems, setMyItems] = useState(JSON.parse(localStorage.getItem('myItems')));
  
  useEffect(() => {
    localStorage.setItem('money', money);
  }, [money]);
  useEffect(() => {
    localStorage.setItem('myItems', JSON.stringify(myItems));
  }, [myItems]);

  const addMoney = (count) => { setMoney(prev => prev += count); }
  const remMoney = (count) => { setMoney(prev => prev -= count ); }
  const hasMoney = (count) => { if (money < count) return false; else return true; }

  const addItem = (itemId) => {
    const findIndex = myItems.findIndex((item) => {return item[0] == itemId});
    if (findIndex == -1) {
      // if new item
      setMyItems(prev => (
        [...prev, [itemId, 1]]
      ));
    } else {
      // if have item
      setMyItems(prev => {
        ++prev[findIndex][1];
        return [...prev];
      });
    }
  }

  const remItem = (itemId) => {
    const findIndex = myItems.findIndex((item) => {return item[0] == itemId});

    // if count > 1
    if (myItems[findIndex][1] > 1) {
      setMyItems(prev => {
        const newItems = prev.map((item, index) => {
          if (index == findIndex) {
            return [item[0], item[1] - 1];
          }
          return item;
        })
        return newItems;
      });
    } else {
      // if count == 1
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
      allItems
    },
    
    money: {
      addMoney,
      remMoney,
      hasMoney,
    }
  };
  
  return (
    <div className='App'>
      <Header money={money}/>
      <Categories tools={tools}/>
      <Crafts tools={tools}/>
    </div>
  );
}

function firstVisit() {
  if (localStorage.getItem('upd') == undefined) {
    localStorage.clear();
    localStorage.setItem('upd', 0); // future maybe used(now not used)
    localStorage.setItem('money', 20_000);
    localStorage.setItem('myItems', JSON.stringify([]));
  }
}