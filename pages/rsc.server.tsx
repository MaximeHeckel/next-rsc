import React, { Suspense } from "react";
import Footer from "../components/footer";
import Page from "../components/page.client";
import Spinner from "../components/spinner";
import Story from "../components/story.client";
import SystemInfo from "../components/system-info";
import fetchData from "../lib/fetch-data";
import { transform } from "../lib/get-item";
import useData from "../lib/useData";

function StoryWithData({ id }) {
  const data = useData(`s-${id}`, () =>
    fetchData(`item/${id}`, 1500).then(transform)
  );
  return <Story {...data} />;
}

function NewsWithData() {
  const storyIds = useData("top", () => fetchData("topstories", 1000));
  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return (
          <Suspense fallback={<Spinner />} key={id}>
            <StoryWithData id={id} />
          </Suspense>
        );
      })}
    </>
  );
}
/**
 *
 * Notes
 *
 * It looks like components taking children need to have the distinction .client or .server
 * e.g. Page MUST have `.client.tsx` extension otherwise we get an error "This Hook is not supported in Server Components."
 *
 *
 * However Footer and SystemInfo are fine without the extension
 */

export default function News() {
  return (
    <Page>
      <Suspense fallback={<Spinner />}>
        <NewsWithData />
      </Suspense>
      {/* <Footer />
      <SystemInfo /> */}
    </Page>
  );
}
