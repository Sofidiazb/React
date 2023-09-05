
//const newMesage = [1,2,3,4,5,6,7,8,9];
/*const getResult = () =>{
    return 4;
}*/

import PropTypes from 'prop-types';


export const FirstApp = ({title,subTitle}) => {

    


    return (
        <>

            <h1>{ title }</h1>
            <p>{subTitle}</p>
        </>  
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo'
}

