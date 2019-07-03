export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => (
    () => dispatch({type: CLEAR_ERRORS}) 
)