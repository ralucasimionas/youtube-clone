import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Channels from "./Channels";
import { SubscribedChannelsContext } from "../store/Subscription/context";

const MyChannels = () => {
	const { subscribedState, subscribedDispatch } = useContext(
		SubscribedChannelsContext
	);

	return (
		<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
			{subscribedState.items.length === 0 ? (
				<Typography
					variant="h4"
					fontWeight="bold"
					mb={2}
					sx={{ color: "white" }}>
					<span style={{ color: "#F31503" }}>
						You didn't subscribe to any channel.{" "}
					</span>
				</Typography>
			) : (
				<Box>
					<Typography
						variant="h4"
						fontWeight="bold"
						mb={2}
						sx={{ color: "white" }}>
						<span style={{ color: "#F31503" }}>My channels</span>
					</Typography>
					<Channels channels={subscribedState.items} />
				</Box>
			)}
		</Box>
	);
};

export default MyChannels;
