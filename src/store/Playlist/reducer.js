export const initialState = {
	items: [],
};

export function playlistReducer(state, action) {
	switch (action.type) {
		case "ADD_TO_PLAYLIST": {
			const previousItems = state.items;
			const newItem = action.payload;

			const foundItem = previousItems.find((item) => {
				console.log("din reducer", item?.id, "idnou", newItem?.id);
				return item.id === newItem.id;
			});
			// console.log("din reducer", item.id, newItem.id);

			if (!foundItem) {
				const newState = { items: [...previousItems, newItem] };
				console.log("items din reducer", newState.items);
				return newState;
			} else {
				console.log("items din reducer else");
				return state;
			}
		}

		case "REMOVE_FROM_PLAYLIST": {
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
