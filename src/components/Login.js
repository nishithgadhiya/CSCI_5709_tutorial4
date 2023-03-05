import { TextField, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const StyledBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
});

const StyledTextField = styled(TextField)({
  width: "25%",
  paddingBottom: "1rem",
});

const buttonStyle = {
  background: "#19AAA1",
  textTransform: "none",
  fontSize: "1.5rem",
  padding: "0.4rem 2.8rem",
  marginBottom: "0.7rem",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios
      .post("https://express-t4.onrender.com/api/login", {
        username: email,
        password,
      })
      .then(() => {
        navigate("/allUser");
      })
      .catch((err) => {
        toast.error("Invalid email or password", {
          autoClose: 2000,
          position: "bottom-left",
        });
      });
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  return (
    <StyledBox>
      <Typography sx={{ paddingBottom: "1rem" }} variant="h4">
        Login
      </Typography>

      <StyledTextField
        required
        id="outlined-required"
        label="Email"
        type="email"
        onChange={handleEmailChange}
      />
      <StyledTextField
        required
        id="outlined-required"
        label="password"
        type="password"
        onChange={handlePasswordChange}
      />
      <Button
        variant="contained"
        size="large"
        sx={buttonStyle}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </StyledBox>
  );
};

export default Login;
