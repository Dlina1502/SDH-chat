import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import ChatMsgLeft from "./ChatMsgLeft";
import ChatMsgRight from "./ChatMsgRight";
import Footer from "./Footer";

function Container() {
  const bgImage = "/assets/chat-bg.png";

  return (
    <Box
      sx={{
        width: 864,
        height: 378,
        backgroundImage: `url(${bgImage})`,
        border: 2,
        borderColor: "#dedfe1",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header />
      <ChatMsgLeft
        user="BOT"
        time="12:45"
        message="Hi, welcome to SimpleChat! Go ahead and send me a message!"
      />
      <ChatMsgRight
        user="John"
        time="12:58"
        message="I want to learn ReactJs!"
      />
      <Footer />
    </Box>
  );
}

export default Container;
