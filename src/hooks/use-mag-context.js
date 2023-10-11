import {useContext} from 'react';
import MagContext from '../context/MagContext';

function useMagContext() {
    return useContext(MagContext);
}

export default useMagContext;