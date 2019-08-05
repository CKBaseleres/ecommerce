import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  directory => directory.collections
);
