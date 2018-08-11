export function reducer(state, action) {
  switch (action.type) {
    case 'TOOGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload
      };
    default:
      return state;
  }
}
