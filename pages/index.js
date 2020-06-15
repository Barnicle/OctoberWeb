import Page from '../components/page';
import axios from 'axios';
export default function Index() {
  return <Page />;
}

export async function getStaticProps() {
  let data;
  await axios
    .get('https://test.octweb.ru/api/pages/index/?format=json')
    .then((res) => (data = res.data));

  return {
    props: {
      initialReduxState: {
        data,
        form: {
          phone: false,
          email: false,
          text: false,
          checkBox: false,
          isValid: false,
        },
      },
    },
  };
}
