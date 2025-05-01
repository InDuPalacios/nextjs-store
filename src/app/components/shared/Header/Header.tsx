// src/app/components/shared/Header.tsx
// Description: TODO

// Importing External Modules
import Link from 'next/link'


// Importing Internal Modules


export const Header = () => {
    console.log('Hola mundo Header')
    return(
    <header>
        <nav>
         <ul>
            <Link href={"/"}>
                <li>Home</li>
            </Link>
            <Link href={"store"}>
                <li>Store</li>
            </Link>
         </ul>
        </nav>
    </header>
    )
}
