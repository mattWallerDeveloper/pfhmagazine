import React, {useEffect} from 'react';
import './scss/contentsPage.scss';
import MagContext from '../../hooks/use-mag-context';

const ContentsPage = () => {
    const {getMagContent, contentData} = MagContext();

    useEffect(() => {
        getMagContent();
    }, []);

    return (
        <>
            <div className="page__content">
                <h1 className="page__content-title">Contents</h1>
                <table className="page__content-table">
                    {contentData.map((content, index) => {
                        return (
                            <tr key={index}>
                                <td className="content-left" align="left">{content.title}</td>
                                <td className="content-right" align="right">{content.startPage}</td>
                            </tr>
                        )
                    })}
                </table>
                <div className="page__number">1</div>
            </div>
        </>
    );
}

export default ContentsPage;
