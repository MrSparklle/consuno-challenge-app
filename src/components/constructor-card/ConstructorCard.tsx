import React from 'react'
import styles from './ConstructorCard.module.scss';

const ConstructorCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img src="https://placekitten.com/200/200" alt="Constructor Logo" />
        <div>
          <h3>Alpha Constructor Co</h3>
          <span>Berlin</span>
        </div>
        <ul>
          <li>plubing</li>
          <li>eletrical</li>
        </ul>
      </div>
    </div>
  )
}

export default ConstructorCard