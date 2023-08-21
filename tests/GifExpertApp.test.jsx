import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => { 
    
    test('should first', () => { 
        
        render( <GifExpertApp />);
        screen.debug();
    
    }); 

});

// Regresar más adelante y tratar de hacer más pruebas sobre la primera parte del componente
// (La mayoría de las otras partes ya fueron testeadas)