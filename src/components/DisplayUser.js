import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { toast } from "react-toastify";
import Card from "./Card";
import {
  TableContainer,
  TableRow,
  Table,
  TableBody,
  Button,
  Box,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
});

const DisplayUser = () => {
  const [userData, setUserData] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const fetchData = async () => {
    await axios
      .get(`https://express-t4.onrender.com/api/users/${location.state.id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        toast.error(err, {
          autoClose: 2000,
          position: "bottom-left",
        });
      });
  };

  const handleBack = () => {
    navigate("/allUser");
  };

  useEffect(() => {
    fetchData();
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
          onClick={handleBack}
        >
          Back
        </Button>
      </Box>
      <StyledDiv>
        <Typography variant="h3" color="initial">
          Details
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {userData ? (
                Object.keys(userData).map((key) => (
                  <TableRow>
                    <Card
                      key={key}
                      keyData={key}
                      details={userData[key].toString()}
                    />
                  </TableRow>
                ))
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Card />
      </StyledDiv>
    </Box>
  );
};

export default DisplayUser;
