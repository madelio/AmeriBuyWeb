export default function createAsyncAction (type, fn) {
    return (...args) => (dispatch) => {
      dispatch({
        type: `${type}_STARTED`,
        payload: args
      });
      let result;
      try {
        result = await fn(...args);
      } catch (error) {
        dispatch({
          type: `${type}_FAILED`,
          error: true,
          payload: error
        });
        throw error;
      }
      dispatch({
        type: `${type}_ENDED`,
        payload: result
      });
      return result;
    }
  }
  