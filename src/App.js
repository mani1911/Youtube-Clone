
import {Box} from '@mui/material';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {Navbar, VideoDetail, ChannelDetail, SearchFeed, Feed} from './components'
function App() {
  return (
    <BrowserRouter>
      <Box sx = {{backgroundColor : '#000'}}>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Feed/>}></Route>
        <Route path = "/video/:id" element = {<VideoDetail/>}></Route>
        <Route path = "/channel/:id" element = {<ChannelDetail/>}></Route>
        <Route path = "/search/:searchTerm" element = {<SearchFeed/>}></Route>
      </Routes>

      </Box>
    </BrowserRouter>
  );
}

export default App;
