import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from '@/components/layout/navbar/navbar.module.scss'

const SearchBar = () => {
  //控制搜尋元件
  const [searchItem, setSearchItem] = useState('')
  return (
    <>
      <div className={styles.display}>
        <button type="button" className={`${styles.button}`}>
          <FaSearch className={styles.icon} />
        </button>
        <input
          text="search"
          placeholder="搜尋所有商品..."
          className={styles.search}
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value)}}
        />
      </div>
    </>
  )
}

export default SearchBar
