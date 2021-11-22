import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Produto } from "../produto";
import { Pedido } from "../pedido";
import { Router } from "@angular/router";

const urlBase = "http://localhost:8080";

@Injectable({
  providedIn: "root",
})
export class PedidoService {
  constructor(private http: HttpClient, private router: Router) {}

  itens: { produto: Produto; quantidade: number }[] = [];

  adicionaProduto(produto: Produto) {
    let item = this.itens.find(
      (item) => item.produto.descricao === produto.descricao
    );
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }
  }

  listarProdutos() {
    return this.http.get<Produto[]>(`${urlBase}/cardapio`);
  }

  limpaPedido() {
    this.itens = [];
  }

  atualizaPedido(pedido: Pedido, id: number) {
    return this.http.put<Pedido>(`${urlBase}/pedidos/${id}`, pedido);
  }

  carregarPedido(id: number) {
    return this.http.get<Pedido>(`${urlBase}/pedidos/${id}`);
  }

  listarPedidos() {
    return this.http.get<Pedido[]>(`${urlBase}/pedidos`);
  }

  salvaPedido() {
    // vai persistir o conteudo de "itens" no BD
    let pedido = {
      dataHora: this.dataHoraAtual,
      situacao: "Aguardando",
      itens: this.itens,
    };
    console.log(pedido);

    return this.http.post<Pedido>(`${urlBase}/pedidos`, pedido);
  }

  get valorTotal() {
    let valor = 0;
    for (const item of this.itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }

  get quantidadeTotal() {
    let quantidade = 0;
    for (const item of this.itens) {
      quantidade += item.quantidade;
    }
    return quantidade;
  }

  get dataHoraAtual() {
    let data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    let dataCompleta = `${ano}-${mes}-${dia}T${hora}:${minutos}`;

    return dataCompleta;
  }
}
