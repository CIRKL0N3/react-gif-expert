import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, [])



    return {
        images: images,
        isLoading: isLoading
        // En las dos líneas anteriores al regresar el valor de su mismo nombre se puede eliminar la segunda opción.
        // Se quedan así por ahora, para entender mejor de dónde provienen.
    }

}
