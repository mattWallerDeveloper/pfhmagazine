import {createContext, useState} from 'react';
import axios from 'axios';

const MagContext = createContext();

function MagProvider({children}) {
    const [contentData, setContentData] = useState([]);

    const getMagContent = async () => {
        const response = await axios.get('http://localhost:3001/contents');
        setContentData(response.data);
    }

    const valueToShare = {
        getMagContent: getMagContent,
        contentData: contentData,
    };

    return (
        <MagContext.Provider value={valueToShare}>
            {children}
        </MagContext.Provider>
    );
}

export {MagProvider};
export default MagContext;