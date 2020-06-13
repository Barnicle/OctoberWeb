import Page from "../components/page";
import axios from "axios";
export default function Index() {
  return <Page />;
}
export async function getStaticProps() {
  // Note that in this case we're returning the state directly, without creating
  // the store first (like in /pages/ssr.js), this approach can be better and easier
  // const result = await axios.get(
  //   "https://test.octweb.ru/api/pages/index/?format=json"
  // );
  // console.log(data);
  return {
    props: {
      initialReduxState: {
        data: null,
      },
    },
  };
}
