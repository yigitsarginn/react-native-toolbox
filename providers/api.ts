import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './fetch';

// TODO: change api name
export const mvpApi = createApi({
  reducerPath: 'mvpApi',
  baseQuery,
  endpoints: () => ({}),
});
