package igti.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import igti.desafio.modelo.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

}
