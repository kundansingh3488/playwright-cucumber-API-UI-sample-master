import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // virtual users
  vus: 5,
  // duration of execution
  duration: '5s',
};
export default function () {
  // http.get('http://test.k6.io');
  http.get(process.env.PERF_API_URL);
  sleep(1);
}

