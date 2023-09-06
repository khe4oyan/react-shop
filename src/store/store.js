import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "./slices/moneySlice";
import myItemsSlice from './slices/myItems'

const store = configureStore({
	reducer: {
		money: moneySlice,
		myItems: myItemsSlice,
	}
});

export default store;