import { Box, Button, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle, Subscriptions, Unsubscribe } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";
import { useContext, useReducer } from "react";

import { SubscribedChannelsContext } from "../store/Subscription/context";
import {
	addToSubscribedChannels,
	removeFromSubscribedChannels,
} from "../store/Subscription/actions";

const ChannelCard = ({ channelDetail }) => {
	const { subscribedState, subscribedDispatch } = useContext(
		SubscribedChannelsContext
	);

	function handleAddToSubscribedChannels(item) {
		const actionResult = addToSubscribedChannels(item);

		subscribedDispatch(actionResult);
	}

	function handleRemoveFromSubscribedChannels(id) {
		const actionResult = removeFromSubscribedChannels(id);

		subscribedDispatch(actionResult);
	}
	let isFound = 0;

	if (subscribedState.items) {
		console.log("subscribedState.itmems", subscribedState.items);
		subscribedState.items.some((item) => {
			console.log(item.id);
			if (item.id === channelDetail?.id) isFound = 1;
		});
	}

	return (
		<Box
			sx={{
				boxShadow: "none",
				borderRadius: "20px",
				backgroundColor: "#1e1e1e",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: { xs: "356px", md: "320px" },
				height: "auto",
				margin: "auto",
			}}>
			<Link to={`/channel/${channelDetail?.id}`}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
						color: "#fff",
					}}>
					<CardMedia
						image={
							channelDetail?.snippet?.thumbnails?.high?.url ||
							channelDetail?.image ||
							demoProfilePicture
						}
						alt={
							channelDetail?.snippet?.title ||
							channelDetail?.title ||
							demoChannelTitle
						}
						sx={{
							borderRadius: "50%",
							height: "200px",
							width: "200px",
							mb: 2,
							border: "1px solid #e3e3e3",
						}}
					/>
					<Typography variant="h6">
						{" "}
						{channelDetail?.snippet?.title ||
							channelDetail?.title ||
							demoChannelTitle}
						<CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
					</Typography>

					{(channelDetail?.statistics?.subscriberCount ||
						channelDetail?.subscribers) && (
						<Typography>
							{parseInt(
								channelDetail?.statistics?.subscriberCount ||
									channelDetail?.subscribers
							).toLocaleString()}{" "}
							Subscribers
						</Typography>
					)}
					{(channelDetail?.statistics?.videoCount ||
						channelDetail?.videoCount) && (
						<Typography>
							{parseInt(
								channelDetail?.statistics?.videoCount ||
									channelDetail?.videoCount
							).toLocaleString()}{" "}
							Videos
						</Typography>
					)}
				</CardContent>
			</Link>

			{isFound === 1 ? (
				<Button
					onClick={() => handleRemoveFromSubscribedChannels(channelDetail?.id)}>
					<Unsubscribe
						sx={{ fontSize: 50, color: "white", marginTop: "-20px" }}
					/>
				</Button>
			) : (
				<Button
					onClick={() =>
						handleAddToSubscribedChannels({
							id: channelDetail.id,
							title: channelDetail.snippet.title,

							image: channelDetail.snippet.thumbnails.high.url,

							subscribers: channelDetail.statistics.subscriberCount,

							videoCount: channelDetail.statistics.videoCount,
						})
					}>
					<Subscriptions
						sx={{ fontSize: 50, color: "white", marginTop: "-20px" }}
					/>
				</Button>
			)}
		</Box>
	);
};

export default ChannelCard;
