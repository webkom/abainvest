import { Button } from "@/components/ui/button";
import styles from "./index.module.css";


export default function FrontPage() {
  return (
    <> 
    
      <div className={styles.heroSection}>
        <div id = {styles.textContainer}>
          <h3>Investeringsgruppen</h3>
          <h1>AbaInvest</h1>
          <p> En investeringsgruppe med fokus på analyse, disiplinert kapitalforvaltning
            og langsiktig avkastning. </p>
        </div>

        <Button> En knapp </Button>
      </div>
      
      <div className= {styles.wrapper}>
        <div className = {styles.container}>
          <h2>PORTEFØLJEUTVIKLING</h2>


        </div>
      </div>
      
      <div className= {styles.wrapper}>
        <div className = {styles.container}>
          <h2>PORTEFØLJEFORDELING</h2>


        </div>
      </div>
      
      <div className= {styles.wrapper}>
        <div className = {styles.container}>
          <h2>BEHOLDNINGER</h2>


        </div>
      </div>

      <div className= {styles.footer}>

      </div>
    </> 

  );
}

