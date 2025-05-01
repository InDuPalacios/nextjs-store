// src/app/page.tsx
// Description: TODO


// Importing External Modules

// Importing Internal Modules
import { Description } from "./components/home/Description";
import { Hero } from "./components/home/Hero";
import { MainProducts } from "./components/home/MainProducts/MainProducts";


export default function Home() {
  return (
      <main>
        <Hero />
        <Description />
        <MainProducts />
      </main>
  );
}
