import { useContext } from "react";
import { removeFromPlaylist } from "../store/Playlist/actions";
import { PlaylistContext } from "../store/Playlist/context";
import { Box, Typography } from "@mui/material";

import Videos from "./Videos";

const MyPlaylist = () => {
	const { playlistState, playlistDispatch } = useContext(PlaylistContext);

	// function removeFromPlaylist(id) {
	// 	const actionResult = removeFromPlaylist(id);
	// 	playlistDispatch(actionResult);
	// }
	console.log("playlistitems", playlistState.items);

	return (
		<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
			{playlistState.items.length === 0 ? (
				<Typography
					variant="h4"
					fontWeight="bold"
					mb={2}
					sx={{ color: "white" }}>
					<span style={{ color: "#F31503" }}>
						You don't have any videos in your playlist.{" "}
					</span>
				</Typography>
			) : (
				<Box>
					<Typography
						variant="h4"
						fontWeight="bold"
						mb={2}
						sx={{ color: "white" }}>
						<span style={{ color: "#F31503" }}>My playlist</span>
					</Typography>
					<Videos videos={playlistState.items} />
				</Box>
			)}
		</Box>
	);
};

export default MyPlaylist;
