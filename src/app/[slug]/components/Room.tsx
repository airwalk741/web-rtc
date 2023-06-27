import React from "react";
import MyVideo from "./MyVideo";
import RemoteVideo from "./RemoteVideo";

type PropsType = {};

const users = ["park", "kim", "im", "lee"];

export default function Room({}: PropsType) {
  return (
    <React.Fragment>
      <MyVideo />
      <div className='mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
        {users.map((user) => {
          return (
            <div key={user}>
              <RemoteVideo />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
