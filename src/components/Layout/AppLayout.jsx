import React from "react";
import Header from "./Header";
import { Grid } from "@mui/material";
import Title from "../shared/Title";
import ChatList from "../speific/ChatList";
import { sampleChats } from "../../constants/smapledata";
import { useParams } from "react-router-dom";

const AppLayout = ({ children }) => {
  const params = useParams();

  const chatId = params.chatId;

  const handleDeleteChat = (e, _id, groupchat) => {
    e.preventDefault();
    console.log("Deleted Chat: ", _id, groupchat);
  };

  return (
    <>
      <Title />
      <Header />
      <Grid container height={"calc(100vh - 4rem)"}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: { xs: "none", sm: "block", border: "1px solid black" },
          }}
          height={"100%"}
          // bgcolor={"primary.main"}
        >
          <ChatList
            chats={sampleChats}
            chatId={chatId}
            // newMessagesAlert={[
            //   {
            //     chatId: {chatId},
            //     count: 4,
            //   },
            // ]}
            onlineUsers={["1", "2"]}
            handleDeleteChat={handleDeleteChat}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          lg={6}
          height={"100%"}
          // bgcolor={"primary.main"}
          // sx={{border:"1px solid black" }}
        >
          {children}
        </Grid>
        <Grid
          item
          md={4}
          lg={3}
          height={"100%"}
          bgcolor="rgba(0,0,0,0.85)"
          sx={{
            display: {
              sx: "none",
              md: "block",
              padding: "2rem",
            },
          }}
        >
          Third
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;
