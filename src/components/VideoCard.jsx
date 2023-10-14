import { Link } from "react-router-dom";
import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	Button,
	Box,
} from "@mui/material";
import { CheckCircle, Delete, LibraryAddOutlined } from "@mui/icons-material";

import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelUrl,
	demoChannelTitle,
} from "../utils/constants";
import { useContext } from "react";
import { PlaylistContext } from "../store/Playlist/context";
import { addToPlaylist, removeFromPlaylist } from "../store/Playlist/actions";

const VideoCard = ({ video }) => {
	const { playlistState, playlistDispatch } = useContext(PlaylistContext);

	function handleAddToPlaylist(item) {
		const actionResult = addToPlaylist(item);
		console.log(actionResult);
		playlistDispatch(actionResult);
		console.log("clicked");
		// console.log(video.id.videoId);
		// console.log(snippet.title);
	}

	function handleRemoveFromPlaylist(id) {
		const actionResult = removeFromPlaylist(id);
		console.log(actionResult);
		playlistDispatch(actionResult);
		console.log("id", id);
	}
	let isFound = 0;

	if (playlistState.items) {
		playlistState.items.some((item) => {
			if (item.id === video.id.videoId || item.id === video.id) isFound = 1;
		});
	}
	return (
		<Card
			sx={{
				width: { xs: "100%", sm: "358px", md: "320px" },
				boxShadow: "none",
				borderRadius: 0,
			}}>
			<Link
				to={
					video.id.videoId ? `/video/${video.id.videoId}` : `/video/${video.id}`
				}>
				<CardMedia
					image={video?.snippet?.thumbnails?.high?.url || video?.image}
					alt={video?.snippet?.title || video?.title}
					sx={{ width: { md: "320px", sm: "358px", xs: "100%" }, height: 180 }}
				/>
			</Link>

			<CardContent
				sx={{
					backgroundColor: "#1e1e1e",
					height: "106px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}>
				<Link
					to={
						video.id.videoId
							? `/video/${video.id.videoId}`
							: `/video/${video.id}`
					}>
					<Typography variant="subtitle1" fontWeight="bold" color="#fff">
						{video.snippet?.title.slice(0, 60) || video.title.slice(0, 60)}
					</Typography>
				</Link>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Link
						to={
							video?.snippet?.channelId
								? `/channel/${video?.snippet?.channelId}`
								: `/channel/${video?.channelId}`
						}>
						<Typography variant="subtitle2" fontWeight="bold" color="gray">
							{video?.snippet?.channelTitle || video?.channelTitle}
							<CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
						</Typography>
					</Link>
					{}

					{isFound === 1 ? (
						<Button
							onClick={() =>
								handleRemoveFromPlaylist(video?.id?.videoId || video?.id)
							}>
							<Delete sx={{ fontSize: 40, color: "white" }} />
						</Button>
					) : (
						<Button
							onClick={() =>
								handleAddToPlaylist({
									id: video.id.videoId,
									title: video.snippet.title,
									channelId: video.snippet.channelId,
									channelTitle: video.snippet.channelTitle,
									image: video.snippet.thumbnails.high.url,
								})
							}>
							<LibraryAddOutlined sx={{ fontSize: 40, color: "white" }} />
						</Button>
					)}
				</Box>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
