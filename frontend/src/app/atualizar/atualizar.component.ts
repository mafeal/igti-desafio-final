import { Component, Input, OnInit, Output } from "@angular/core";
import { PedidoService } from "../pedido/pedido.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { Pedido } from "../pedido";
import { Produto } from "../produto";

@Component({
  selector: "app-atualizar",
  templateUrl: "./atualizar.component.html",
  styles: [],
})
export class AtualizarComponent implements OnInit {
  constructor(
    public pedidoService: PedidoService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  pedidoId: number = 0;
  pedidoAtual!: Pedido;
  itens: { produto: Produto; quantidade: number }[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.pedidoId = params.id;
      this.pedidoService.carregarPedido(this.pedidoId).subscribe((pedido) => {
        this.pedidoAtual = pedido;
        pedido.itens.forEach((item) => {
          this.itens.push(item);
        });
      });
    });
  }

  get valorTotal() {
    let valor = 0;
    for (const item of this.itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }

  atualizarStatus() {
    if (this.pedidoAtual) {
      this.pedidoService
        .atualizaPedido(this.pedidoAtual, this.pedidoId)
        .subscribe((pedido) => {
          console.log("Pedido atualizado com sucesso.");
          this.router.navigate(["/pedidos"]);
        });
    }
  }
}
