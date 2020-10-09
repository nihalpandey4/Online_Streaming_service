import React from "react";
import SearchBar from "./searchbar";
import youtube from "../api/youtube";
import VideoList from "./videolist";
import VideoDetail from "./videoDetail";
import "./app.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo:null,
  };

  videoSelect = (video) => {
    this.setState({selectedVideo:video});
  };

  onFormSubmit = async (term) => {
    let response = await youtube(term);
    this.setState({ videos: response.data.items });
    this.setState({selectedVideo:null});
  };

  render = () => {
    return (
      <div className="App">
        <SearchBar formSubmit={this.onFormSubmit} />
        <div className="player">
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          video= {this.state.selectedVideo}
          videos={this.state.videos}
          selectedVideo={this.videoSelect}
        />
        </div>
      </div>
    );
  };
}

export default App;
