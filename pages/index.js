import App from "../components/App";
import Header from "../components/Header";
import Repositories from "../components/Repositories";
import Footer from "../components/Footer";
import withData from "../lib/withData";

export default withData(() => (
  <App>
    <Header>Repositories</Header>
    <Repositories />
    <Footer />
  </App>
));
