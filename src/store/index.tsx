import { createStore } from 'redux';
import mainReducer from './reducers';


export const store = createStore(mainReducer);

export type RootState = ReturnType<typeof store.getState>
