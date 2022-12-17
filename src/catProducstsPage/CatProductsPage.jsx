import React, { useState, useEffect } from 'react'
import SidebarComponent from '../components/sideBarComponent/SidebarComponent'
import CatImagesComponent from '../components/catImagesComponent/CatImagesComponent';
import useCats from '../redux/actions/dataActions';
import { useSelector } from 'react-redux';
import styles from './catsProducts.module.scss';


const CatProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState(localStorage.getItem('activeID'));

  const [requestParams, setRequestParams] = useState({
    offset: 1,
    limit: 10,
    category_ids: activeCategory

  })
  const data = useSelector((data) => data.data);

  const { getCats } = useCats(requestParams);

  const handleSelectActive = () => {
    setRequestParams({ ...requestParams, category_ids: localStorage.getItem('activeID') });

  };
  const handleMoreData = () => {
    setRequestParams({ ...requestParams, offset: requestParams.offset + 1 });
  }
  useEffect(() => {
    getCats()
  }, [requestParams])
  return (
    <div className={styles.catsproductscontainer}>
      <button
        onClick={handleMoreData}
        className={styles.btn}
      >Load more
      </button>
      <div className={styles.catsproductsconent}>
        <SidebarComponent
          setActiveCategory={setActiveCategory}
          handleClick={handleSelectActive}
        />
        <CatImagesComponent
          data={data}
        />
      </div>
    </div>
  )
};
export default CatProductsPage