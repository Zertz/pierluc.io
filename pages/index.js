import { Fragment } from "react";
import dynamic from "next/dynamic";

import App from "../components/App";
import Header from "../components/Header";
import Content from "../components/Content";

const Particles = dynamic(import("../components/Particles"), {
  loading: () => null,
  ssr: false
});

export default () => (
  <Fragment>
    <Particles />
    <App>
      <Header />
      <Content />
    </App>
  </Fragment>
);
