// src/app/components/shared/Hero.tsx
// Description: TODO

// Importing External Modules

// Importing Internal Modules
import style from "./Hero.module.scss"


export const Hero = () => {
    console.log(style)
    return(
        <section className={style.Hero}>
            <h1>MISTYCUS</h1>
            <h2>El poder del ronroneo hecho consejo.</h2>
        </section>
    )
}
