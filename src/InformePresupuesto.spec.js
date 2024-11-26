import informePresupuesto from './InformePresupuesto';

describe('Informe Presupuesto', () => {
    it('Debería agregar una nueva categoría correctamente', () => {
        const informe = new informePresupuesto();
    
        informe.agregarOActualizarCategoria('Alimentos', 1000, 200);
    
        const categorias = informe.obtenerCategorias();
        expect(categorias).toEqual([
          { nombre: 'Alimentos', presupuesto: 1000, gasto: 200 }
        ]);
    });
    it('Debería agregar una nueva categoría si no existe', () => {
        const informe = new informePresupuesto();
    
        informe.agregarOActualizarCategoria('Ropa', 500, 50);
    
        const categorias = informe.obtenerCategorias();
        expect(categorias).toEqual([
          { nombre: 'Ropa', presupuesto: 500, gasto: 50 }
        ]);
    });
    it('Debería manejar correctamente la actualización de categorías sin duplicar', () => {
        const informe = new informePresupuesto();
    
        informe.agregarOActualizarCategoria('Electrónica', 1200, 400);
        informe.agregarOActualizarCategoria('Electrónica', 300, 150);
    
        const categorias = informe.obtenerCategorias();
        expect(categorias).toEqual([
          { nombre: 'Electrónica', presupuesto: 1500, gasto: 550 }
        ]);
    });

});
