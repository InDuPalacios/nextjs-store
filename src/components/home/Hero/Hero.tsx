// src/app/components/shared/Hero.tsx
// Description: TODO

// Importing External Modules

// Importing Internal Modules
import style from "./Hero.module.scss"


export const Hero = () => {
    console.log(style)
    return(
        <section className={style.Hero}>
            <h1>MISHTYCUS</h1>
            <h2>The wisdom of a purr, turned into guidance</h2>
        </section>
    )
}
