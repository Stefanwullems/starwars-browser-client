import * as React from "react";
import Info from "../Reusable/Info";

interface IProps {
  content: Content;
}

const FilmsPage: React.FC<IProps> = ({ content }) => {
  return (
    <React.Fragment>
      <Info title="Film Info" info={getFilmInfo(content as Film)} />
      <Info
        title="Opening Crawl"
        info={{ opening_crawl: (content as Film).opening_crawl }}
      />
    </React.Fragment>
  );
};

function getFilmInfo({ director, producer, release_date }: Film) {
  return { director, producer, release_date };
}

export default FilmsPage;
