import axios from 'axios';
import styles from 'src/styles/Home.module.css'
import React, { useState } from "react";
function Index({ produtos }) {

  var [showCurrent, setShowCurrent] = useState(false);

  const setCurrent = (index) => {
    setShowCurrent(index);
  }

  return (
    <ul>
      {produtos?.map((produto, i) => (
        <li key={produto.id} onClick={() => setCurrent(produto.id)}>
          <div className={styles.card}>
            <div className={styles.card}>
              {showCurrent !== false && showCurrent == produto.id ? <span> {produto.description} </span> : <span>{produto.title}</span>}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

Index.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    const produtos = res.data;
    return { produtos };
  } catch (error) {
    return { error };
  }
};


export default Index;