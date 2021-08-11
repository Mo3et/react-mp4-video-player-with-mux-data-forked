import React from "react";
import "./styles.css";
import VideoPlayer from "./VideoPlayer";

export default function App() {
  return (
    <div className="App">
      <h1>Basic React With mp4 video + Mux Data</h1>
      <VideoPlayer
        src="https://stream.mux.com/YCOWHqIUho00zXdMZjeqWoCslXG9MFqIC/high.mp4"
        poster="https://image.mux.com/YCOWHqIUho00zXdMZjeqWoCslXG9MFqIC/thumbnail.png"
      />
    </div>
  );
}
