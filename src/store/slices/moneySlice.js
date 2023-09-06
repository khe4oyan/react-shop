import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const saveMoney = (money) => {
	localStorage.setItem('money', money);
}

const loadMoneyThunk = createAsyncThunk(
	'loadMoneyThunk',
	async () => {
		const money = +localStorage.getItem('money');
		return money;
	}
);

const moneySlice = createSlice({
	name: 'moneySlice',
	initialState: {
		money: 0,
	},
	reducers: {
		addMoney(state, action) {
			state.money += action.payload;
			saveMoney(state.money);
		},
		remMoney(state, action) {
			state.money -= action.payload;
			saveMoney(state.money);
		},
		setMoney(state, action) {
			state.money = action.payload;
			saveMoney(state.money);
		},
	},
	extraReducers: {
		[loadMoneyThunk.fulfilled]: (state, action) => {
			state.money = action.payload;
		}
	}
});

export { loadMoneyThunk };
export const { addMoney, remMoney, setMoney } = moneySlice.actions;
export default moneySlice.reducer;