import Banner from "@/components/banner";
import ItemJob from "@/components/item-jobs";
import { ISingleJob } from "@/interfaces";
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
        console.log(myJson);
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
      <div className="home">
        <div className="sidebar">
          <StyleInput
            type="text"
            placeholder="Title, companies, expertise or benefits"
          />
        </div>
        <div className="list-jobs">
          <ul>
            {listJob &&
              listJob.map((item) => {
                return <ItemJob key={item.title} job={item} />;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const StyleInput = styled("input")`
  border: none;
  outline: none;
  font-size: 19px;
  margin-left: 10px;
  width: 400px;
  font-family: Inter, sans-serif;
`;
