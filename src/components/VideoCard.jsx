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
	return (
		<Card
			sx={{
				width: { xs: "100%", sm: "358px", md: "320px" },
				boxShadow: "none",
				borderRadius: 0,
			}}>
			<Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
				<CardMedia
					image={video?.snippet?.thumbnails?.high?.url || video?.image}
					alt={video?.snippet?.title || video?.title}
					sx={{ width: { md: "320px", sm: "358px", xs: "100%" }, height: 180 }}
				/>
			</Link>

			<CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
				<Link
					to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
					<Typography variant="subtitle1" fontWeight="bold" color="#fff">
						{video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Link
						to={
							video?.snippet?.channelId
								? `/channel/${video?.snippet?.channelId}`
								: demoChannelUrl
						}>
						<Typography variant="subtitle2" fontWeight="bold" color="gray">
							{video?.snippet?.channelTitle || demoChannelTitle}
							<CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
						</Typography>
					</Link>
					{}

					{playlistState.items.some(
						(item) => item.id.videoId === video.id.videoId
					) ? (
						<Button onClick={() => handleRemoveFromPlaylist(video.id)}>
							<Delete sx={{ fontSize: 40, color: "white" }} />
						</Button>
					) : (
						<Button
							onClick={() =>
								handleAddToPlaylist({
									id: video.id.videoId,
									title: video.snippet.title,
									channelId: video.snippet.channelId,
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
