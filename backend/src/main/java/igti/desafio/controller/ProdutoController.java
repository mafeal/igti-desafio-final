package igti.desafio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import igti.desafio.DTO.ProdutoDTO;
import igti.desafio.services.ProdutoService;

@RestController
@RequestMapping("/cardapio")
public class ProdutoController {
	@Autowired
	private ProdutoService produtoService;

	@GetMapping()
	public ResponseEntity<List<ProdutoDTO>>findAll() {
		List<ProdutoDTO>lista=produtoService.findAll();
		return ResponseEntity.ok(lista);
	} 
}
