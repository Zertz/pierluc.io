export default () => (
  <section>
    <h2>JavaScript.</h2>
    <h3>Classcraft.</h3>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 2rem;
      }
      h2,
      h3 {
        color: #fff;
        letter-spacing: 1px;
        margin: 0;
        margin-left: 0.5rem;
        padding: 0;
        text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
      }
      h2 {
        font-size: 4em;
        font-weight: 300;
        margin-top: auto
        margin-bottom: 1rem;
      }
      h3 {
        font-size: 3em;
        font-weight: 300;
      }
    `}</style>
  </section>
);
