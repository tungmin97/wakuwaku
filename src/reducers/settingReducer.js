export const settingReducer = (state, action) => {
  const { item, value } = action;
  return { ...state, [item]: value };
};
