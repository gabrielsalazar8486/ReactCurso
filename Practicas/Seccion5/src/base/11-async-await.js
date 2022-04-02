

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

import axios from "axios"

export const getImagen = async() => {

    try {

        const apiKey = 'F35DaWXAH0TwkGFVxszauS71Pz9N6als';
        const resp   = await axios(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.data;

        const { url } = data.images.original;

        return url

    } catch (error) {
        return 'No existe'
    }
}



