import { AddCircleOutlineRounded, RemoveCircle } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading, isAdded = false }) => {
  const { name, _id, avatar } = user;
  return (
    <>
      <ListItem>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Avatar />
          <Typography
            variant="body1"
            sx={{
              flexGlow: 1,
              display: "-webkit-flex",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </Typography>
          <IconButton
            size="small"
            sx={{
              bgcolor: isAdded ? "error.main" : "primary.main",
              color: "#fff",
              "&:hover": {
                bgcolor: isAdded ? "error.main" : "primary.dark",
              },
            }}
            onClick={() => handler(_id)}
            disabled={handlerIsLoading}
          >
            {isAdded ? <RemoveCircle /> : <AddCircleOutlineRounded />}
          </IconButton>
        </Stack>
      </ListItem>
    </>
  );
};

export default memo(UserItem);
