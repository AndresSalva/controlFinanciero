class informePresupuesto {
    constructor() {
        this.categorias = [];
    }

    agregarOActualizarCategoria(nombre, presupuesto, gasto) {
        const categoriaExistente = this.categorias.find(categoria => categoria.nombre === nombre);

        if (categoriaExistente) {
            categoriaExistente.presupuesto += presupuesto;
            categoriaExistente.gasto += gasto;
        } else {
            this.categorias.push({ nombre, presupuesto, gasto });
        }
    }

    obtenerCategorias() {
        return this.categorias;
    }
}

export default informePresupuesto;