import { Fragment, PureComponent } from "react";

import initParticles from "../lib/initParticles";

export default class extends PureComponent {
  componentDidMount() {
    initParticles();
  }

  render() {
    return (
      <Fragment>
        <canvas id="particlesjs" />
        <style jsx>{`
          canvas {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}
