// This file is kept for compatibility but is no longer used
import { GraphQLClient } from 'graphql-request';
import { getDatoCmsToken } from './getDatoCmsToken';

// Create a dummy client that won't actually be used
const datoCMSClient = {
  request: async <T>(): Promise<T> => {
    // This function will never be called since we've replaced all query functions
    throw new Error('DatoCMS client is no longer in use');
  }
};

export default datoCMSClient;
