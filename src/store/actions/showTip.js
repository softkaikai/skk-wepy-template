import { SHOW_TIP } from '../types/showTip';
import { createAction } from 'redux-actions';

// preload = {content: '', duration: '', dir: ''}
export const showTip = createAction(SHOW_TIP)
