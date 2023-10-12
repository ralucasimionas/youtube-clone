export function addToPlaylist(item) {
	return {
		type: "ADD_TO_PLAYLIST",
		payload: item,
	};
}

export function removeFromPlaylist(itemId) {
	return {
		type: "REMOVE_FROM_PLAYLIST",
		payload: itemId,
	};
}
