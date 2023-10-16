import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { useReducer } from "react";

import {
	Navbar,
	Feed,
	SearchFeed,
	VideoDetail,
	ChannelDetail,
	MyChannels,
	MyPlaylist,
} from "./components";

import { PlaylistContext } from "./store/Playlist/context";
import { playlistReducer, initialState } from "./store/Playlist/reducer";

import { SubscribedChannelsContext } from "./store/Subscription/context";
import { subscribedReducer } from "./store/Subscription/reducer";

const App = () => {
	const [playlistState, playlistDispatch] = useReducer(
		playlistReducer,
		initialState
	);

	const playlistContextValue = {
		playlistState,
		playlistDispatch,
	};

	const [subscribedState, subscribedDispatch] = useReducer(
		subscribedReducer,
		initialState
	);
	const subscribedContextValue = { subscribedState, subscribedDispatch };

	return (
		<SubscribedChannelsContext.Provider value={subscribedContextValue}>
			<PlaylistContext.Provider value={playlistContextValue}>
				<BrowserRouter>
					<Box sx={{ backgroundColor: "#000" }}>
						<Navbar />
						<Routes>
							<Route path="/" exact element={<Feed />} />
							<Route path="/video/:id" element={<VideoDetail />} />
							<Route path="/channel/:id" element={<ChannelDetail />} />
							<Route path="/search/:searchTerm" element={<SearchFeed />} />
							<Route path="/mychannels" element={<MyChannels />} />
							<Route path="/playlist" element={<MyPlaylist />} />
						</Routes>
					</Box>
				</BrowserRouter>
			</PlaylistContext.Provider>
		</SubscribedChannelsContext.Provider>
	);
};

export default App;
