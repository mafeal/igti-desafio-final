package igti.desafio.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import igti.desafio.DTO.ProdutoDTO;
import igti.desafio.modelo.Produto;
import igti.desafio.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;
	
	public List<ProdutoDTO> findAll() {
		List<Produto>res=produtoRepository.findAll();
		return res.stream().map(p -> new ProdutoDTO(p)).collect(Collectors.toList());
	}
}
