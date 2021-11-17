package igti.desafio.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import igti.desafio.DTO.PedidoDTO;
import igti.desafio.modelo.Pedido;
import igti.desafio.repository.PedidoRepository;
import igti.desafio.repository.ProdutoRepository;

@Service
public class PedidoService {
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public List<PedidoDTO> findAll() {
		produtoRepository.findAll();
		List<Pedido>res=pedidoRepository.findAll();
		return res.stream().map(p -> new PedidoDTO(p)).collect(Collectors.toList());
	}
	
	public Optional<Pedido> findById(int id) {
		return pedidoRepository.findById(id);
	}
	
	public Pedido savePedido(Pedido pedido) {
		return pedidoRepository.save(pedido);
	}
	
	public Pedido fromDTO(PedidoDTO pedidoDTO) {
		Pedido entidade = new Pedido(0, pedidoDTO.getDataHora(), pedidoDTO.getSituacao(), pedidoDTO.getItens());
		return entidade;
	}
	
	public Pedido updatePedido(Integer id, Pedido newPedido) {
		return pedidoRepository.findById(id).map(p -> {
			p.setSituacao(newPedido.getSituacao());
			Pedido atualizado = pedidoRepository.save(p);
			return atualizado;
		}).orElse(null);
	}
	
	
}
