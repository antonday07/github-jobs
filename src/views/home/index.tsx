import Banner from "@/components/banner";
import ItemJob from "@/components/item-jobs";
import { ISingleJob } from "@/interfaces";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

export default function Home() {
  const getData = () => {
    return fetch("src/data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(function (response) {
      return response.json();
    });
  };
  useEffect(() => {
    getData()
      .then(function (myJson) {
        setListJob(myJson.jobs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [listJob, setListJob] = useState<ISingleJob[]>([]);

  return (
    <div>
      <Banner />
      <Stack direction="row"
        justifyContent="space-between"
        spacing={2} mt={10}>
        <Sidebar className="sidebar">
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Filter by location</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel value="London" control={<Radio />} label="London" />
              <FormControlLabel value="Hanoi" control={<Radio />} label="Hanoi" />
              <FormControlLabel value="Newyork" control={<Radio />} label="Newyork" />
              <FormControlLabel value="Sydney" control={<Radio />} label="Sydney" />
            </RadioGroup>
          </FormControl>
        </Sidebar>
        <ListJob className="list-jobs">
          <ul>
            {listJob &&
              listJob.map((item) => {
                return <ItemJob key={item.title} job={item} />;
              })}
          </ul>
        </ListJob>
      </Stack>
    </div>
  );
}

const Sidebar = styled("div")`
 flex-basis: 30%;
`;

const ListJob = styled("div")`
  flex: 1;
`

const StyleInput = styled("input")`
  border: none;
  outline: none;
  font-size: 19px;
  margin-left: 10px;
  width: 400px;
  font-family: Inter, sans-serif;
`;
