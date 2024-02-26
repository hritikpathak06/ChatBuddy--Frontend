import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAltOutlined } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation();
  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5" fontWeight={900}>
                Welcome Back👋
              </Typography>
              <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                >
                  Login
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  variant="text"
                  type="submit"
                  fullWidth
                  onClick={() => setIsLogin(false)}
                >
                  Don't have an account..??
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5" fontWeight={900}>
                Register Now
              </Typography>
              <form
                style={{ width: "100%", marginTop: "1rem" }}
                onSubmit={handleSignUp}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "6rem",
                      height: "6rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />
                  {avatar.error && (
                    <Typography color="error" variant="caption">
                      {avatar.error}
                    </Typography>
                  )}
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      background: "rgba(255,255,255,0.5)",
                      ":hover": {
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltOutlined />
                      <VisuallyHiddenInput
                        type="file"
                        sx={{ background: "black" }}
                      />
                      <input type="file" onChange={avatar.changeHandler} />
                    </>
                  </IconButton>
                </Stack>
                <TextField
                  required
                  fullWidth
                  label="Your Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Your Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                {/* {password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )} */}
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                >
                  Register
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  variant="text"
                  type="submit"
                  fullWidth
                  onClick={() => setIsLogin(true)}
                >
                  Already have an account..??
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Login;
