import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => { 
    
    test('Debe de cambiar el valor de la caja de texto', () => { 
        
        // Se crea el sujeto de pruebas.
        render( <AddCategory onNewCategory={ () => {} } /> );
        // Extraemos el input el cual ahora tenemos ya a la mano.
        const input = screen.getByRole('textbox');
        // Disparamos el evento.
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        // Y finalmente podemos hacer la aserción de lo que estamos esperando que suceda después de disparar dicho evento.
        expect( input.value ).toBe('Saitama');
    
    }); 

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue    = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe(''); 

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    
    });

    test('No debe de llamar el onNewCategory si el input está vacío', () => { 
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        // expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        // Cualquiera de estas dos opciones es correcta y aceptable.
        expect( onNewCategory ).not.toHaveBeenCalled();
    
    });

});