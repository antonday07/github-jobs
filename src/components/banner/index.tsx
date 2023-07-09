import { TextField } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <div className="d-flex">
      <TextField
        id="outlined-basic"
        label="Title, companies or benefit"
        variant="outlined"
        sx={{
          width: 500,
          color: "success.main",
        }}
      />
    </div>
  );
}
