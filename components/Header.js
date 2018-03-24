export default () => (
  <header>
    <h1>
      Pier-Luc<small>.io</small>
    </h1>
    <style jsx>{`
      header {
        flex-shrink: 0;
        padding: 2rem;
      }
      h1 {
        color: #fff;
        font-size: 8em;
        font-weight: 700;
        letter-spacing: 2px;
        margin: 0;
        padding: 0;
        text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
      }
      small {
        font-size 0.375em;
      }
    `}</style>
  </header>
);
