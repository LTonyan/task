export const dataReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_CATS":
        return action.payload;
      default:
        return state;
    }
  };
  