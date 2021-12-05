// == Import : local
import './spinnerLoader.scss';

/**
 * Display a spinning loader
 * @param {string} classWidthAndHeight - Corresponds to the name of a class CSS that contains the width and height of the spinning loader
 * @returns {JSX.Element}
 */
const SpinnerLoader = ({ classWidthAndHeight }) => (
    <div className={'loading'}>
        <div className={`loading_spinnerLoader ${classWidthAndHeight}`} />
    </div>
);

export default SpinnerLoader;
