import { Box, Typography, useTheme } from "@mui/material";

const Message = ({message, x}) => {
  const theme = useTheme();
  const isSent = x;


  return (
    <Box
      display="flex"
      justifyContent={isSent ? "flex-end" : "flex-start"}
      p={1}
    >
      <Box
        maxWidth="60%"
        bgcolor={
          isSent ? theme.palette.primary.main : theme.palette.neutral.mediumMain
        }
        color={
          isSent
            ? theme.palette.neutral.light
            : theme.palette.neutral.light
        }
        borderRadius={10}
        p={1}
      >
        <Typography variant="body1">{message}</Typography>
      </Box>
    </Box>
    
  );
};

export default Message;