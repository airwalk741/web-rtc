import React from "react";
import Room from "./components/Room";

type PropsType = {};

export default function Page({}: PropsType) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-10 md:p-24'>
      <Room />
    </div>
  );
}
