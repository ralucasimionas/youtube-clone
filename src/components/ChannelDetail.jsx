import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);
	const { id } = useParams();

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

	return (
		<Box minHeight="95vh">
			<Box marginBottom="20px" backgroundColor="#1e1e1e">
				<ChannelCard channelDetail={channelDetail} />
			</Box>

			<Box display="flex" p="2">
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
