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
});
