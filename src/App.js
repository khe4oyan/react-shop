import React, { useEffect } from 'react';
import './App.css'
import Header from './components/header/Header'
import Categories from './components/categories/Categories';
import Crafts from './components/crafts/Crafts'
import { loadMoneyThunk } from './store/slices/moneySlice';
import { loadMyItemsThunk } from './store/slices/myItems';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('upd') == undefined) {
      localStorage.clear();
      localStorage.setItem('upd', 0); // future maybe used(now not used)
      localStorage.setItem('money', 20_000);
      localStorage.setItem('myItems', JSON.stringify([[5, 2]]));
    }

    dispatch(loadMoneyThunk());
    dispatch(loadMyItemsThunk());
  }, []);

  return (
    <div className='App'>
      <Header />
      <Categories />
      <Crafts />
    </div>
  );
}