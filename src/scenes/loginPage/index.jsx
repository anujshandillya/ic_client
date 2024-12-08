import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      backgroundColor={theme.palette.background.default}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={isNonMobileScreens ? "45%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        >
        <Typography fontFamily="Courier" fontWeight="bold" fontSize="32px" color="dark">
          InstaChat
        </Typography>
        <Form />
      </Box>
    </Box>

  );
};

export default LoginPage;
