import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <div id="detail">
        <Stack m={2} direction={"row"} justifyContent={"space-between"}>
          <Box m={2} flex={4}>
            <Outlet />
          </Box>
        </Stack>
      </div>
      <Footer />
    </div>
  );
}
