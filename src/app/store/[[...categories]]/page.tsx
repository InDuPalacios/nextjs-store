// src/app/store/[[...category]]
// Description: TODO

// Importing External Modules

// Importing Internal Modules


interface CategoryProps{
    params:{
        categories: string[],
        searhParams?: string
    }
}

export default function Category(props: CategoryProps){
    const {categories} = props.params

    return(
        <h1>Categoria dinámica: {categories}</h1>
    )
}