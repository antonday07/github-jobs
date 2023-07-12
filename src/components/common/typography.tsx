import React from "react";

import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const StyleMainHeading = styled(Typography)`
  font-weight: 400;
  color: #334680;
  font-size: 18px;
  line-height: 21px;
`;

const StyleSecondaryHeading = styled(Typography)`
  font-weight: 500;
  color: #334680;
  font-size: 14px;
  line-height: 21px;
`;

const StyleThirdHeading = styled(Typography)`
  font-weight: 700;
  color: #334680;
  font-size: 12px;
  line-height: 21px;
  m
`;

const StyleMainText = styled(Typography)`
  font-weight: 500;
  color: #b9bdcf;
  font-size: 12px;
  line-height: 14px;
`;
function MainHeading({ text }: { text: string }) {
  return <StyleMainHeading>{text}</StyleMainHeading>;
}

function SecondaryHeading() {
  return <StyleSecondaryHeading />;
}

function ThirdHeading({ text }: { text: string }) {
  return <StyleThirdHeading>{text}</StyleThirdHeading>;
}

function MainText({ text }: { text: string }) {
  return <StyleMainText>{text}</StyleMainText>;
}

export { MainHeading, SecondaryHeading, ThirdHeading, MainText };
