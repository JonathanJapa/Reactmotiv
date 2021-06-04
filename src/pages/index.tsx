import { GetStaticProps } from 'next'

import styles from './home.module.scss'

import Head from "next/Head"
import { stripe } from '../services/stripe'
import { SubsButton } from '../components/SubsButton'

interface HomeProps {
  product:{
    priceId:string,
    amount:number,
  }
  };

  

export default function Home( {product}:HomeProps ) {
  return (  
    <>
 
      <Head>

        <title> Motive | Inicio </title>

      </Head>
     
      <main className={styles.contentContainer}> 
        
        <section className={styles.hero}>
         
          <span> olá Dev 🚀 </span> 
         
          <h1> Te oferecemos conteúdos e posts sobre <span>React</span> que irão agregar á sua carreira</h1>
         
          <p>Por apenas  <span>{product.amount} </span> por mes.</p>
         
          <SubsButton priceId={ product.priceId }/>


        </section>
        
        <img src="/images/codeimg.svg" alt="man coding"/>
        
      </main>
      
    



      </>
     )
    
 }
 export const getStaticProps : GetStaticProps= async() => {
  
  const price = await stripe.prices.retrieve('price_1IxNv4AWogO3VnPx5tmvKBx9')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style:'currency',
      currency:'USD',
     }).format(price.unit_amount /100),
  };

  return{
    props:{
      product,
      
    },
    revalidate: 60 * 60* 20 //24 hs
  
  }

  
  

 }
