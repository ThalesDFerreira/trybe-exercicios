export const ADD_PERSONAL = 'ADD_PERSONAL';
export const ADD_PROFESSIONAL = 'ADD_PROFESSIONAL';

export const addPersonalAction = (state) => ({
  type: ADD_PERSONAL,
  payload: state,
});

export const addProfessionalAction = (state) => ({
  type: ADD_PROFESSIONAL,
  payload: state,
});
