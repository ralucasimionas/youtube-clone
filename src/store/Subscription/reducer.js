export const initialState = {
	items: [],
};

export function subscribedReducer(state, action) {
	switch (action.type) {
		case "ADD_TO_SUBSCRIBED": {
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

		case "REMOVE_FROM_SUBSCRIBED": {
			const filteredItems = state.items.filter((item) => {
				return item.id !== action.payload;
			});

			const newState = { items: filteredItems };

			return newState;
		}

		default: {
			return state;
		}
	}
}
