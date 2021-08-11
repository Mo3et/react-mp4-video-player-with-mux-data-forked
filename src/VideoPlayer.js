import React, { useEffect, useRef } from "react";
// import Hls from "hls.js";
import mux from "mux-embed";

export default function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const muxPlayerInitTime = Date.now();
    mux.monitor(video, {
      debug: true,
      data: {
        env_key: "ENV_KEY", // required

        // Metadata
        player_name: "Custom Player",
        player_init_time: muxPlayerInitTime,
        video_cdn: "cdn-1"

        // ... and other metadata
      }
    });
  }, [src, videoRef]);

  return (
    <>
      <video controls ref={videoRef} poster={poster} src={src} />
    </>
  );
}
