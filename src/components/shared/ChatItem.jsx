import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <>
      <Link
        to={`/chat/${_id}`}
        onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
        sx={{padding:"10px"}}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            gap: "1rem",
            position: "relative",
            background: newMessageAlert ? "#000" : "unset",
            color: sameSender ? "white" : "unset",
            borderBottom: "1px solid #f0f0f0",
            justifyContent: "space-between",
          }}
        >
          {/* Avatar Card */}
          
          <AvatarCard avatar={avatar}/>
          <Stack>
            <Typography>{name}</Typography>
            {newMessageAlert && (
              <Typography>{newMessageAlert.count} New Message</Typography>
            )}
          </Stack>
          {isOnline && (
            <Box
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
                position: "absolute",
                top: "50%",
                right: "1rem",
                transform: "translate(-50%)",
              }}
            />
          )}
        </div>
      </Link>
    </>
  );
};

export default memo(ChatItem);
