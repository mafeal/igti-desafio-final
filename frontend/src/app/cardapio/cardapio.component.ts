import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto";
import { PedidoService } from "../pedido/pedido.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cardapio",
  templateUrl: "./cardapio.component.html",
  styleUrls: ["./cardapio.component.css"],
})
export class CardapioComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(public pedidoService: PedidoService, private router: Router) {}

  ngOnInit(): void {
    this.pedidoService.listarProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  verPedido() {
    this.router.navigate(["/pedido"]);
  }
}
