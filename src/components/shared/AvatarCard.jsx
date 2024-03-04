import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";

// To do transform

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <>
      <Stack direction={"row"}>
        <AvatarGroup max={max}>
          <Box width={"5rem"} height={"3rem"} />
          {avatar.map((i, index) => (
            <Avatar
              src={i}
              alt=""
              key={Math.random() * 100}
              style={{
                width: "2rem",
                height: "2rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index} rem`,
                  sm: `${index} rem`,
                },
              }}
            />
          ))}
        </AvatarGroup>
      </Stack>
    </>
  );
};

export default AvatarCard;
