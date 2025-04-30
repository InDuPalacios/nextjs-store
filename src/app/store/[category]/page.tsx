// src/app/store/[category]
// Description: TODO

// Importing External Modules

// Importing Internal Modules


interface CategoryProps{
    params:{
        category: string
    }
}

export default function Category(props: CategoryProps){
    const { category } = props.params

    return(
        <h1>Categoria dinámica: {category}</h1>
    )
}