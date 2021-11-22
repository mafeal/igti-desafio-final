import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PedidoService } from "../pedido/pedido.service";
import { Pedido } from "../pedido";
import { Router } from "@angular/router";

@Component({
  selector: "app-gerenciar",
  templateUrl: "./gerenciar.component.html",
  styles: [],
})
export class GerenciarComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    public pedidoService: PedidoService,
    private router: Router
  ) {}

  pedidos: Pedido[] = [];

  ngOnInit(): void {
    this.pedidoService.listarPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    });
  }

  selecionaPedido(pedido: Pedido) {
    this.router.navigate(["/atualizar-pedido"], {
      queryParams: { id: pedido.id },
    });
  }
}
