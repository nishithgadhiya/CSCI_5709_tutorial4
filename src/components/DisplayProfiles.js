import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const DisplayProfiles = () => {
  const [allUser, setAllUser] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate("/user", { state: { id } });
  };

  const StyledDiv = styled("div")({
    display: "grid",
    width: "80%",
    margin: "auto",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    marginTop: "5rem",
  });

  const handleLogout = () => {
    navigate("/");
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    axios
      .get("https://express-t4.onrender.com/api/users")
      .then((response) => {
        setAllUser(response.data);
      })
      .catch((err) => {
        toast.error(err, {
          autoClose: 2000,
          position: "bottom-left",
        });
      });
  }, []);

  return (
    <Box>
      <Box sx={{ padding: "2rem" }}>
        <Button
          sx={{
            border: "black 1px solid",
            height: "2rem",
            width: "4rem",
            padding: "1.5rem 4rem",
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "40%" }}
          key="search"
          id="outlined-required"
          label="search"
          type="text"
          value={searchValue}
          onChange={handleSearch}
        />
      </Box>
      <StyledDiv>
        {allUser
          .filter((user) => {
            return searchValue.toLowerCase() === ""
              ? user
              : user.name.toLowerCase().includes(searchValue);
          })
          .map((user) => (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{
                      height: "6rem",
                      width: "6rem",
                      paddingRight: "2rem",
                    }}
                    src={user.picture}
                    alt={user.name}
                  />
                  <Typography variant="h4" color="text.secondary" gutterBottom>
                    {user.name}
                  </Typography>
                </Box>

                <Typography variant="h6" component="div">
                  {user.email}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {user.phone}
                </Typography>
                <Typography variant="body2">{user.about}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleLearnMore(user._id)}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
      </StyledDiv>
    </Box>
  );
};

export default DisplayProfiles;
