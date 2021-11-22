import { Component, OnInit } from "@angular/core";
import { PedidoService } from "../pedido/pedido.service";
import { Pedido } from "../pedido";

@Component({
  selector: "app-acompanhe",
  templateUrl: "./acompanhe.component.html",
  styles: [],
})
export class AcompanheComponent implements OnInit {
  constructor(public pedidoService: PedidoService) {}

  pedidos: Pedido[] = [];
  ultimoPedido: Pedido = {
    id: 0,
    dataHora: "",
    situacao: "",
    itens: [],
  };

  intId: number = 0;

  ngOnInit(): void {
    this.carregaPedidos();
    this.intId = setInterval(() => {
      this.carregaPedidos();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intId) {
      clearInterval(this.intId);
    }
  }

  carregaPedidos() {
    return this.pedidoService.listarPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
      this.ultimoPedido = this.pedidos[this.pedidos.length - 1];
    });
  }
}
