import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useCategories from '../../redux/actions/categoriesAction';
import styles from './sidebarComponent.module.scss'

const SidebarComponent = ({ setActiveCategory, handleClick }) => {
  const categories = useSelector((categories) => categories.categories);
  const { getCategories } = useCategories();

  useEffect(() => {
    getCategories()
  }, []);

  const handleSelectActive = (id) => {
    setActiveCategory(id);
    handleClick()
    localStorage.setItem('activeID', id)
  }
  return (
    <section className={styles.categoriesSection}>
      {categories.map((category, i) =>
        <nav
          className={styles.navBar}
          key={i}
          onClick={() => handleSelectActive(category.id)}
        >
          {category.name}
        </nav>)}
    </section>
  )
};

export default SidebarComponent;