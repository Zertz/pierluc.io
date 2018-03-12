export default ({ children }) => (
  <header>
    <h1>{children}</h1>
    <style jsx>{`
      header {
        padding: 2rem;
      }
      h1 {
        font-size: 72px;
        font-weight: 300;
        margin: 0;
        padding: 0;
        text-align: center;
      }
    `}</style>
  </header>
);
