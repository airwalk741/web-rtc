import React from "react";

type PropsType = {};

export default function VideoBtn({}: PropsType) {
  return (
    <div className='mt-3 flex justify-center items-center'>
      <button className='rounded-full text-sm bg-gray-500 px-4 py-2 text-white font-bold mx-4 hover:bg-gray-400'>
        <i className='fas fa-tv'></i> &nbsp;&nbsp;Video
      </button>
      <button className='rounded-full text-sm bg-gray-500 px-4 py-2 text-white font-bold mx-4 hover:bg-gray-400'>
        <i className='fas fa-microphone-slash'></i>&nbsp;&nbsp; Audio
      </button>
    </div>
  );
}
