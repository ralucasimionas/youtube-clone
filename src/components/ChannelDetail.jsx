import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);
	const { id } = useParams();
	console.log("id", id);

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&part=statistics&id=${id}`).then(
			(data) => {
				setChannelDetail(data?.items);
			}
		);
		fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
			(data) => {
				setVideos(data?.items);
			}
		);
	}, [id]);

	console.log("Channel", channelDetail);
	console.log("Videos channel", videos);

	return (
		<Box minHeight="95vh">
			<Box>
				<ChannelCard channelDetail={channelDetail} />
			</Box>

			<Box display="flex" p="2">
				{/* <Box sx={{ mr: { sm: "100px" } }} /> */}
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
