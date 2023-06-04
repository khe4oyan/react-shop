import './App.css'
import { firstVisit, toolsCreate } from './tools/tools';

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
  const hasMoney = (count) => { return (money < count) ? false : true; }

  const tools = toolsCreate(myItems, setMyItems, addMoney, remMoney, hasMoney);

  return (
    <div className='App'>
      <Header money={money}/>
      <Categories tools={tools}/>
      <Crafts tools={tools}/>
    </div>
  );
}