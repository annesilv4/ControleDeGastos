// Modularização (ES6)
import { Categoria, listaGastosPorCategoria } from "./classes.js";
import { isNegativo, atualizarInterface } from "./utils.js";

const gastosPorCategoria = new listaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
);

const formulario = document.querySelector("form");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;

    if (isNegativo(valorInformado)) {
        console.log("Valor inválido! O valor não pode ser negativo");
        return;
    }

    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);

    atualizarInterface(gastosPorCategoria);
    formulario.reset();
})