import axios from 'axios';

export const isPending = () => {
  return {
    type: 'PENDING',
  };
};
export const isFetched = (data) => {
  return {
    type: 'FETCHED',
    data,
  };
};

export const fetchData = () => {
  console.log('fetch');
  return (dispatch) => {
    try {
      const data = axios
        .get('https://test.octweb.ru/api/pages/index/?format=json')
        .then((res) => dispatch(isFetched(res.data)));
    } catch {
      throw error;
    }
  };
};
