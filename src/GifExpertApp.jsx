import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;

        // categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);
    }

  return (
    <>  
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ onAddCategory }
            // onNewCategory={ event => onAddCategory(event) } 
            // La línea comentada de arriba es exactamente igual al evento. (Se cancela el event)
        />

        {/* Listado de Gif */}
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }/>
                )) 
            }

            {/* Gif Item */}
    </>
  )
}
