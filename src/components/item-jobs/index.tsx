import { ISingleJob } from "@/interfaces";
import React from "react";
import { styled } from "@mui/system";
import { MainHeading, MainText, ThirdHeading } from "../common";
import { Button } from "@mui/material";

const CustomSingleJob = styled("li")`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 30px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;
const LeftBox = styled("div")`
  display: flex;
`;

const CustomImage = styled("img")`
  display: block;
  margin-right: 10px;
  width: 90px;
  height: 90px;
`;

export default function ItemJob({ job }: { job: ISingleJob }) {
  return (
    <CustomSingleJob>
      <LeftBox>
        <CustomImage src={job.thumbnail} alt={job.company} />
        <div>
          <ThirdHeading text={job.company} />
          <MainHeading text={job.title} />
          <Button
            variant="outlined"
            href="#outlined-buttons"
            sx={{
              color: "#334680",
              borderColor: "#334680",
              width: 100,
              padding: "5px",
              marginTop: "10px",
            }}
          >
            {job.type}
          </Button>
        </div>
      </LeftBox>

      <div>
        <MainText text={job.location} />
        <MainText text={job.created_time} />
      </div>
    </CustomSingleJob>
  );
}
