import React, { useState } from 'react';
import { product } from '../productid';

import styles from '../styles/product.module.scss';





function Tab() {

    const [data, setdata] = useState(product);
    // const filterid = (carItem) => {
    //     const result = product.filter(carData => carData.catigory === carItem)
    //      if(filterid = "all")
    //      setdata(result)
    // }
    const filterid = (carItem) => {
        const result = product.filter(carData => carData.catigory === carItem)
         if(filterid = "all")
         setdata(result)
    }
    // const search = (searchText) => {
    //     const ser = product.filter(carData => carData.catigory == searchText)
        

    // }

    return (
        <>


            <div>
                <ul>
                    <li>
                        <button type="btn" value="all" onClick={() => setdata(product)}>All</button>
                    </li>
                    <li>
                        <button type="btn" value="breakfast" onClick={() => filterid('breakfast')}>breakfast</button>
                    </li>
                    <li>
                        <button type="btn" value="lunch" onClick={() => filterid('lunch')}>lunch</button>
                    </li>
                    <li>
                        <button type="btn" value="dinner" onClick={() => filterid('dinner')}>dinner</button>
                    </li>

                    <li>
                        {/* <form>
                            <input type="text"  onChange={(e) => search(e.target.value)}></input>
                            
                        </form> */}

                    </li>
                </ul>
                <div className="row">
                    
                    {data && data.map(product => (
                        <div key={product.id} className="col-lg-4">

                            <div className={styles.block}>
                                <div className={styles.block_img}>
                                    <img className='img-fluid' src={product.photo} alt="" />
                                </div>
                                <div className={styles.block_title}>
                                    <h4 className={styles.block_title_text}>
                                        {product.title}
                                    </h4>
                                    <h5 className={styles.block_title_text2}>
                                        {product.catigory}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div></>
    )
}

export default Tab;

