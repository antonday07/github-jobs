import { ISingleJob } from "@/interfaces";
import React from "react";
import { styled } from "@mui/system";
import { MainHeading, ThirdHeading } from "../common";

const CustomSingleJob = styled("li")`
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 30px;
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
      <CustomImage src={job.thumbnail} alt={job.company} />
      <div>
        <ThirdHeading text={job.company} />
        <MainHeading text={job.title} />
      </div>
    </CustomSingleJob>
  );
}
