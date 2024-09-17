import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import Constants from 'expo-constants';

import { type RootState } from './store';

export const baseQuery = fetchBaseQuery({
  baseUrl: Constants?.expoConfig?.extra?.BASE_URL as string,
  headers: {},
  prepareHeaders: (headers, { getState }) => {
    const installationId = (getState() as RootState).analytics.installationId;
    headers.set('X-USERID', installationId);
    return headers;
  },
});
