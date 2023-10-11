import './scss/magStyles.scss';
import Cover from '../../assets/PFHMagCover.jpg';

const FrontCover = () => {
    return (
        <>
            <label htmlFor="page-1" className="mag__page mag__page--1">
                <img src={Cover} alt="PF&HCover"/>
            </label>
        </>
    );
}

export default FrontCover;
