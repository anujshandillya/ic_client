import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FlexBetween from "./FlexBetween";
import Message from "./Message";

const Chat = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box display="flex" height="100vh" maxHeight={"700px"}>
      {/* Sidebar */}
      {isNonMobileScreens && (
        <Box
          width="300px"
          bgcolor={theme.palette.background.paper}
          borderRight={`1px solid ${theme.palette.divider}`}
        >
          <Typography variant="h4" p={1} backgroundColor={"grey"}>
            Chats
          </Typography>
          {/* Friends list goes here */}
          <Typography variant="h5" p={2}>
            Chats
          </Typography>
          <Typography variant="h5" p={2}>
            Chats
          </Typography>
        </Box>
      )}

      {/* Chat Area */}
      <Box flexGrow={1} display="flex" flexDirection="column">
        {/* Chat Messages */}
        <Box flexGrow={1} p={2} overflow="hidden">
          {/* Messages will go here */}
          <Message message={"hello"} x={true} />
          <Message message={"hi"} x={false} />
        </Box>

        {/* Input Box */}
        <Box p={2} borderTop={`1px solid ${theme.palette.divider}`}>
          <FlexBetween>
            <input
              type="text"
              placeholder="Type a message"
              style={{
                flexGrow: 1,
                marginRight: "8px",
                padding: "8px",
                borderRadius: "4px",
                border: `1px solid ${theme.palette.divider}`,
              }}
            />
            <SendIcon />
          </FlexBetween>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;