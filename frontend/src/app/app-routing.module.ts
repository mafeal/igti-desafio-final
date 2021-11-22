import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcompanheComponent } from "./acompanhe/acompanhe.component";
import { AtualizarComponent } from "./atualizar/atualizar.component";
import { CardapioComponent } from "./cardapio/cardapio.component";
import { GerenciarComponent } from "./gerenciar/gerenciar.component";
import { PedidoComponent } from "./pedido/pedido.component";

const routes: Routes = [
  { path: "cardapio", component: CardapioComponent },
  { path: "pedido", component: PedidoComponent },
  { path: "acompanhe", component: AcompanheComponent },
  { path: "pedidos", component: GerenciarComponent },
  { path: "atualizar-pedido", component: AtualizarComponent },
  { path: "", redirectTo: "cardapio", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
