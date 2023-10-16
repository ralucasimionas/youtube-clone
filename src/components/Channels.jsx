import { Box, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";

const Channels = ({ channels, direction }) => {
	{
		return (
			<Stack
				direction={direction || "row"}
				flexWrap="wrap"
				justifyContent="center"
				gap={2}>
				{channels.map((item, idx) => (
					<Box key={item?.id}>
						<Box>
							{item?.id && <ChannelCard channelDetail={item} key={item?.id} />}
						</Box>
					</Box>
				))}
			</Stack>
		);
	}
};

export default Channels;
