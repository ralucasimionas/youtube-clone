export function addToSubscribedChannels(item) {
	return {
		type: "ADD_TO_SUBSCRIBED",
		payload: item,
	};
}

export function removeFromSubscribedChannels(itemId) {
	return {
		type: "REMOVE_FROM_SUBSCRIBED",
		payload: itemId,
	};
}
