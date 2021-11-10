import React from "react";
import Footer from "../components/footer";
import Page from "../components/page.client";
import Story from "../components/story.client";
import fetchData from "../lib/fetch-data";
import { transform } from "../lib/get-item";

const List = (props) => {
  const { data } = props;

  return (
    <Page>
      {data.map((item, i) => {
        return <Story key={i} {...item} />;
      })}
      <Footer />
    </Page>
  );
};

export async function getServerSideProps() {
  const storyIds = await fetchData("topstories", 1000);
  const data = await Promise.all(
    storyIds
      .slice(0, 30)
      .map((id) => fetchData(`item/${id}`, 1500).then(transform))
  );

  return {
    props: {
      data,
    },
  };
}

export default List;
