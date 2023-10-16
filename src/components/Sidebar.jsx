import { Stack, Typography } from "@mui/material";

import { categories, channels, channel } from "../utils/constants";

import { List, ListIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = ({
	selectedCategory,
	setSelectedCategory,
	selectedChannel,
	setSelectedChannel,
}) => (
	<Stack
		direction="row"
		sx={{
			overflowY: "auto",
			height: { sx: "auto", md: "95%" },
			flexDirection: { md: "column" },
		}}>
		{categories.map((category) => (
			<button
				className="category-btn"
				onClick={() => setSelectedCategory(category.name)}
				style={{
					background: category.name === selectedCategory && "#FC1503",
					color: "white",
				}}
				key={category.name}>
				<span
					style={{
						color: category.name === selectedCategory ? "white" : "red",
						marginRight: "15px",
					}}>
					{category.icon}
				</span>

				<span
					style={{ opacity: category.name === selectedCategory ? "1" : "0.6" }}>
					{category.name}
				</span>
			</button>
		))}

		<button
			className="category-btn"
			style={{
				color: "white",
			}}
			key={"playlist"}>
			<Link to="/playlist" style={{ display: "flex", alignItems: "center" }}>
				<span
					style={{
						color: "red",
						marginRight: "15px",
					}}>
					<List />
				</span>

				<span
					style={{
						color: "white",
						opacity: "0.6",
						marginRight: "15px",
					}}>
					Playlist
				</span>
			</Link>
		</button>

		<button
			className="category-btn"
			style={{
				color: "white",
			}}
			key={"mychannels"}>
			<Link to="/mychannels" style={{ display: "flex", alignItems: "center" }}>
				<span
					style={{
						color: "red",
						marginRight: "15px",
					}}>
					<List />
				</span>

				<span
					style={{
						color: "white",
						opacity: "0.6",
						marginRight: "15px",
					}}>
					My Channels
				</span>
			</Link>
		</button>
	</Stack>
);

export default Sidebar;
