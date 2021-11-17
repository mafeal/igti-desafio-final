package igti.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import igti.desafio.modelo.Pedido;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Integer> {

}
