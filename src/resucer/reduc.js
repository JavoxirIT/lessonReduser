import { ADD_TYPE, DELETE_TYPE } from './types';

export function reducers(state, action) {
    switch (action.type) {
        case ADD_TYPE:
            return {
                count: state.count + 1,
            };
        case DELETE_TYPE:
            return {
                count: state.count - 1,
            };
        default:
            console.log('Not initialization');
    }
}


