import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const saveMyItems = (myItems) => {
	localStorage.setItem('myItems', JSON.stringify(myItems));
}

const loadMyItemsThunk = createAsyncThunk(
	'loadMyItemsThunk',
	async () => {
		const myItems = JSON.parse(localStorage.getItem('myItems'));
		return myItems;
	}
);

const myItemsSlice = createSlice({
	name: 'myItemsSlice',
	initialState: {
		myItems: [],
	},
	reducers: {
		addNewItem(state, action) {
			const itemId = action.payload;
			const count = 1;
			const findIndex = state.myItems.findIndex((item) => { return item[0] == itemId });
			
			if (findIndex == -1) {
				// if new item
				state.myItems = [...state.myItems, [itemId, count]]
			} else {
				// if have item
				const newValue = state.myItems[findIndex][1] + count;
				const newVal = [...state.myItems];
				newVal[findIndex][1] = newValue;
				state.myItems = newVal;
			}
			saveMyItems(state.myItems);
		},

		remItem(state, action) {
			const itemId = action.payload;
			const count = 1;
			const findIndex = state.myItems.findIndex((item) => { return item[0] == itemId });

			// if count > 1
			if (state.myItems[findIndex][1] > count) {
				const newItems = state.myItems.map((item, index) => {
					if (index == findIndex) {
						return [item[0], item[1] - count];
					}
					return item;
				})
				state.myItems = newItems;
			} else {
				// if count !> 1
				state.myItems = state.myItems.filter((_, index) => {
					return index != findIndex;
				});
			}
			saveMyItems(state.myItems);
		},
	},
	extraReducers: {
		[loadMyItemsThunk.fulfilled]: (state, action) => {
			state.myItems = action.payload;
		}
	}
});

export { loadMyItemsThunk };
export const { addNewItem, remItem } = myItemsSlice.actions;
export default myItemsSlice.reducer;