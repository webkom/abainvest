import { Button } from "@/components/ui/button";
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
        <Button> Se rapporter </Button>
      </div>
      
      <div className= {styles.wrapper}>
        <div className = {styles.container}>
          <h1>Porteføljeutvikling</h1>
          Dette er seksjon 2
          Hei, dette er forsiden!
        </div>
      </div>
      
      <div className= {styles.wrapper}>
        <div className = {styles.container}>
          <h1>Porteføljefordeling</h1>
        </div>
      </div>
      
      <div className= {styles.wrapper}>
        <div className = {styles.container}>
          <h1>Beholdninger</h1>
        </div>
      </div>

      <div className= {styles.footer}>

      </div>
    </> 

  );
}

