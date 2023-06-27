import React from "react";
import VideoBtn from "./VideoBtn";

type PropsType = {};

export default function RemoteVideo({}: PropsType) {
  return (
    <div>
      <div className='w-full h-full min-h-[300px] shadow-xl rounded-lg bg-white'>
        <h1 className='text-center text-gray-500 font-bold'>Remote Video</h1>
        <video className='w-full h-full' src=''></video>
      </div>
      <VideoBtn />
    </div>
  );
}
