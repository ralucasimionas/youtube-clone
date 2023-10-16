export const initialState = {
	items: [],
};

export function playlistReducer(state, action) {
	switch (action.type) {
		case "ADD_TO_PLAYLIST": {
			const previousItems = state.items;
			const newItem = action.payload;

			const foundItem = previousItems.find((item) => {
				return item.id === newItem.id;
			});

			if (!foundItem) {
				const newState = { items: [...previousItems, newItem] };

				return newState;
			} else {
				return state;
			}
		}

		case "REMOVE_FROM_PLAYLIST": {
			const filteredItems = state.items.filter((item) => {
				return item.id !== action.payload;
			});

			const newState = { items: filteredItems };
			console.log("items din remove", newState);
			return newState;
		}

		default: {
			return state;
		}
	}
}
