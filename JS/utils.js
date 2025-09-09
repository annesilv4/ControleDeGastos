// Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const formataMoeda = (valor) => valor.toFixed(2).replace(".", ",");

// Funções Puras
export const isNegativo = (valor) => valor < 0;
export const atualizarInterface = (gastosPorCategoria) => {
    const categorias = gastosPorCategoria.categorias;

    categorias.forEaxh((categoria) => {
        const element = obterElemento(categoria.nome);
        element.textContent = `${categoria.nome}: R$ ${formataMoeda(categoria.valor)}`;
    });

    const elementTotal = obterElemento("Total");
    elementTotal.textContent = `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`;
};