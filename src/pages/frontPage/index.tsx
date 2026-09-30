import Header from "../../components/Header/Header"
import styles from "./index.module.css"


export default function FrontPage() {
  return (
    <> 
      <div className={styles.heroSection}>
        <h3>Investeringsgruppe</h3>
        <h1>AbaInvest</h1>
        <p>Litt info om abainvest</p>
        Dette er seksjon 1
      </div>
      <div className= {styles.portfolioDevelopment}>
        <h1>Porteføljeutvikling</h1>
         Dette er seksjon 2
         Hei, dette er forsiden!
      </div>
      <div className= {styles.portfolioDistribution}>
        <h1>Porteføljefordeling</h1>
      </div>
      <div className= {styles.holdings}>
      <h1>Beholdninger</h1>
      </div>
      <div className= {styles.footer}>

      </div>
    </> 

  );
}

