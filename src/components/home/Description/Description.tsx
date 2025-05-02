// src/app/components/shared/Description.tsx
// Description: TODO

// Importing External Modules

// Importing Internal Modules
import style from './Description.module.scss';

export const Description = () => {
    return(
        <section className={style.Description}>
            <img src="/images/mishtycus_9.jpg" alt="products marketplace" />
            <div className={style.Description__text}>
                <h2> Let Mistycus guide you, one meow at a time.</h2>
                <p>At Mistycus, the keepers of wisdom don’t wear 
                    long beards — they wear whiskers. Our mystical 
                    cats have gathered the universe’s secrets
                    and the art of the perfect nap — into enchanted 
                    boxes filled with quirky advice, soft spells, and 
                    oddly useful magic.</p>
            </div>
        </section>
    )
}
