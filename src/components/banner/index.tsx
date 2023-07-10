import { TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

import BannerImg from "@/assets/images/banner-3.jpeg";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export default function Banner() {
  return (
    <BannerBox className="banner-box">
      <CustomBoxSearch>
        <StyleDiv>
          <WorkOutlineOutlinedIcon />
          <StyleInput
            type="text"
            placeholder="Title, companies, expertise or benefits"
          />
        </StyleDiv>
        <StyleSearchButton>Search</StyleSearchButton>
      </CustomBoxSearch>
    </BannerBox>
  );
}

const StyleDiv = styled("div")`
  display: flex;
`;

const CustomBoxSearch = styled("div")`
  padding: 10px;
  background-color: #fff;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

const StyleInput = styled("input")`
  border: none;
  outline: none;
  font-size: 19px;
  margin-left: 10px;
  width: 400px;
  font-family: Inter, sans-serif;
`;

const StyleSearchButton = styled("button")`
  background-color: #1e86ff;
  font-size: 19px;
  width: 200px;
  padding: 20px;
  outline: none;
  border: none;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  font-family: Inter, sans-serif;
  cursor: pointer;
  transition: all 0.2s;

  &::hover {
    opacity: 1.2;
  }
`;

const CustomInput = styled(TextField)`
  & .MuiInputBase-input {
    color: #eeeeee;
    border: none;
    outline: none;
  }
`;

const BannerBox = styled("div")`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${BannerImg});
`;
