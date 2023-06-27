import React from "react";
import VideoBtn from "./VideoBtn";

type PropsType = {};

export default function MyVideo({}: PropsType) {
  return (
    <div className='w-full md:w-auto'>
      <div className='w-full md:w-[600px] md:h-[500px] shadow-xl rounded-lg bg-white'>
        <h1 className='text-center text-gray-500 font-bold'>MyVideo</h1>
        <video className='w-full h-full' src=''></video>
      </div>
      <VideoBtn />
    </div>
  );
}
