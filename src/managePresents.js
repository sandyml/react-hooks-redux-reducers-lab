const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  switch (action.type) {
    case "presents/increase":
      return { 
        numberOfPresents: state.numberOfPresents + 1
       };
       default: 
       return state;
  }
}

// If the reducer receives a type set to "presents/increase", 
// return a new state where the value of numberOfPresents is increased by one.