import Head from 'next/head';
import styles from '../styles/product.module.scss';
import { product } from '../productid';
import Tab from '../companet/tab';



export const getStaticProps = async () => {
  return {
    props: {
      setProduct: product
    }
  }
}
export default function Home({ setProduct }) {
  return (
    <>
      <>
        <section className={styles.block_bg}>
          <div className="container">
            <Tab />   
          </div>
        </section>
      </>
    </>
  )
}
