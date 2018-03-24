export default ({ children }) => (
  <main>
    {children}
    <style global jsx>{`
      body {
        background-color: #ef4545;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        font-size: calc(8px + (24 - 8) * ((100vw - 375px) / (1024 - 375)));
        margin: 0;
      }
    `}</style>
    <style global jsx>{`
      main {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    `}</style>
  </main>
);
