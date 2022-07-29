import { createApi } from 'unsplash-js';
import Config from 'react-native-config';
import fetch from 'node-fetch';

// browser
import 'whatwg-fetch';

const apiUnsplash = createApi({
  accessKey: Config.ACCESS_KEY,
  headers: { 'X-Custom-Header': 'foo' },
  fetch: fetch,
});

export default apiUnsplash;
