package igti.desafio.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import igti.desafio.DTO.PedidoDTO;
import igti.desafio.modelo.Pedido;
import igti.desafio.services.PedidoService;

@RestController
@RequestMapping("/pedidos")
public class PedidoControler {
	@Autowired
	private PedidoService pedidoService;

	@GetMapping()
	public ResponseEntity<List<PedidoDTO>>findAll() {
		List<PedidoDTO>lista=pedidoService.findAll();
		return ResponseEntity.ok(lista);
	} 
	
	@GetMapping(path ="/{id}")
	public ResponseEntity<Optional<Pedido>> findById(@PathVariable Integer id) {
		Optional<Pedido>item=pedidoService.findById(id);
		return ResponseEntity.ok(item);
	} 
	
	@PostMapping
	@ResponseBody
	public ResponseEntity<PedidoDTO>savePedido( @RequestBody PedidoDTO pedidoDTO) {
		Pedido entidade = pedidoService.fromDTO(pedidoDTO);
		pedidoService.savePedido(entidade);
		return new ResponseEntity<PedidoDTO>(pedidoDTO, HttpStatus.CREATED);
	}
	
	@PutMapping(path ="/{id}")
	@ResponseBody
	public ResponseEntity<PedidoDTO>updatePedido(@PathVariable Integer id, @RequestBody PedidoDTO pedidoDTO) {
		Pedido entidade = pedidoService.fromDTO(pedidoDTO);
		if(pedidoService.updatePedido(id, entidade) != null) {
			return new ResponseEntity<PedidoDTO>(pedidoDTO, HttpStatus.OK);
		}
		return ResponseEntity.notFound().build();
	}
}
