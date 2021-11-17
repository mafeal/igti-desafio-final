package igti.desafio.DTO;

import igti.desafio.modelo.Produto;

public class ProdutoDTO {

	private Integer id;
	private String categoria;
	private String descricao;
	private Double preco;

	public ProdutoDTO() {
	}
	
	public ProdutoDTO(Produto entidade) {
		this.id = entidade.getId();
		this.categoria = entidade.getCategoria();
		this.descricao = entidade.getDescricao();
		this.preco = entidade.getPreco();
	}
	
	public ProdutoDTO(Integer id, String categoria, String descricao, Double preco) {
		super();
		this.id = id;
		this.categoria = categoria;
		this.descricao = descricao;
		this.preco = preco;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

}
