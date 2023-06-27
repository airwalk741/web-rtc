import React from "react";
import Image from "next/image";
import MyVideo from "./[slug]/components/MyVideo";
import RemoteVideo from "./[slug]/components/RemoteVideo";

const users = ["park", "kim", "im", "lee"];

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-10 md:p-24'>
      <div className=' w-full md:w-[500px] bg-white h-full shadow-xl rounded-lg p-5'>
        <h1 className='text-center text-gray-500 font-bold'>Room Number</h1>
        <input
          className='mt-12 mb-10 text-center text-gray-500 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-4  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          placeholder='Input Room Number...'
          type='text'
        />
        <button className='w-full bg-blue-300 py-2 text-white font-bold hover:bg-blue-500  rounded-xl'>
          Join Room
        </button>
      </div>
    </div>
  );
}
