import React from 'react'
import PropTypes from 'prop-types';
import styles from './catImagesComponent.module.scss'

const CatImagesComponent = ({ data }) => {
    return (
        <div className=''>
            {data?.map((image, i) => <div key={i}>
                <img
                    src={image?.url}
                    alt={'cat-image'}
                />
            </div>
            )}
        </div>
    )
};

CatImagesComponent.propTypes = {
    imagesData: PropTypes.array

}

export default CatImagesComponent;