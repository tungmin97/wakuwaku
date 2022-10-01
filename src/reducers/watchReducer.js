export const watchReducer = (list, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      const isWatch = list.watching.find((item) => item.id === action.id);

      if (isWatch) {
        const newWatch = list.watching.map((item) =>
          item.id === action.id ? { ...item, value: action.value } : item
        );

        return { ...list, watching: newWatch };
      } else {
        return {
          ...list,
          watching: [...list.watching, { id: action.id, value: action.value }],
        };
      }

    case "REMOVE_FROM_LIST":
      return {
        ...list,
        watching: list.watching.filter((item) => item.id !== action.id),
      };

    default:
      return list;
  }
};
