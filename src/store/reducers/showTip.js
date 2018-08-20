import { SHOW_TIP } from '../types/showTip';
import { handleActions } from 'redux-actions';


export default handleActions(
    {
        [SHOW_TIP] (state, {payload}) {
            let defaultData = {
                content: 'content null',
                duration: 2000,
                dir: 'center'
            };
            if (typeof payload === 'string') {
                defaultData.content = payload;
                return defaultData;
            } else {
                return Object.assign(defaultData, payload)
            }

        }
    },
    {
        content: 'content null',
        duration: 2000,
        dir: 'center'
    }
)
