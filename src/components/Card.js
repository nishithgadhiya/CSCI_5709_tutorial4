import React from "react";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { TableCell } from "@mui/material";

const StyledDiv = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "40%",
  margin: "auto",
});

const Card = (props) => {
  const { keyData, details } = props;

  return (
    <StyledDiv>
      <TableCell>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {keyData ? `${keyData}: ` : ""}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h6">{details}</Typography>
      </TableCell>
    </StyledDiv>
  );
};

export default Card;
