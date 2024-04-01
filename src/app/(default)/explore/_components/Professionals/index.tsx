import React from "react";
import ProCard, { iUser } from "./ProCard";
import axios from "axios";

const Professionals = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/many`, {
    next: {
      revalidate: 60,
    },
  });
  const allUsers = await res.json();
  console.log(allUsers);
  return (
    <>
      {allUsers ? (
        (allUsers.users as []).map((user, i) => (
          <div key={"item-no-" + i}>
            <ProCard loading={false} {...(user as iUser)} />
          </div>
        ))
      ) : (
        <ProCard loading={true} />
      )}
    </>
  );
};

export default Professionals;
