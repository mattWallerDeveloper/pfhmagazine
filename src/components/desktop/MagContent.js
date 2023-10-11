import './scss/magStyles.scss';
import './scss/images.scss';
import FrontCover from "./FrontCover";
import ContentsPage from "./ContentsPage";
import Page2 from "./Page2";
import Page3 from './Page3';
import coFounder from '../../assets/andyBlow.png';
import Crowley from '../../assets/scrowley.png';

const MagContent = () => {
    return (
        <>
            <div className="mag">
                <FrontCover/>
                <label htmlFor="page-2" className="mag__page mag__page--4">
                    <div className="page__content">
                       <Page3/>
                       <img className="crowleyImg" src={Crowley} alt={'SCrowley'} />
                    </div>
                </label>

                <input type="radio" name="page" id="page-1"/>
                <input type="radio" name="page" id="page-2"/>

                <label className="mag__page mag__page--2">
                    <div className="mag__page-front">
                        <ContentsPage/>
                    </div>
                    <div className="mag__page-back">
                        <Page2/>
                        <img className="andyImg" src={coFounder} alt="Andy Blow"/>
                    </div>
                </label>
            </div>
        </>
    );
}

export default MagContent;
