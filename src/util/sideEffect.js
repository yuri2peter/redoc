/* eslint-disable import/prefer-default-export */
import storeRoot from '../store';

/**
 * react-router redirect
 * @param {string} path
 */
export const redirect = (path) => {
  storeRoot.router.routing.push(path);
};
