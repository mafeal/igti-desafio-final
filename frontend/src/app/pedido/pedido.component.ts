import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PedidoService } from "./pedido.service";

@Component({
  selector: "app-pedido",
  templateUrl: "./pedido.component.html",
})
export class PedidoComponent {
  constructor(public pedidoService: PedidoService, private router: Router) {}

  enviaPedido(): void {
    this.pedidoService.salvaPedido().subscribe((pedido) => {
      this.router.navigate(["/acompanhe"]);
    });
  }
}
