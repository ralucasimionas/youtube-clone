import { Stack, Box, Button } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ videos, direction }) => {
	if (!videos?.length) return <Loader />;
	console.log("videos", videos);

	return (
		<Stack
			direction={direction || "row"}
			flexWrap="wrap"
			justifyContent="center"
			gap={2}>
			{videos.map((item, idx) => (
				<Box key={item?.id?.videoId || item?.id}>
					<Box>
						{(item?.id?.videoId ||item?.id) && (
							<VideoCard video={item} key={item?.id?.videoId} />
						)}
						{/* {item.snippet.channelId && (
						<ChannelCard channelDetail={item.snippet} />
					)} */}
					</Box>
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
