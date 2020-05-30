/* eslint-disable import/prefer-default-export */
/**
 * Headers for API REQUEST
 * @const HEADERS
 * @desc Headers options to pass at all the request API
 */
export const HEADERS = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer APIKey'
});

/** Domain API
 * @const API_URI
 */
export const API_URI = '/api';
