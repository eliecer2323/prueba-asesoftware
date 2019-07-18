package com.jorge.asesoftware.prueba.carcenter.DTO;

import java.io.Serializable;
import java.math.BigInteger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Mecanicos implements Serializable {

	private static final long serialVersionUID = -3791780604598444798L;

	@Column(name="tipo_documento")
	private String tipoDocumento;
	
	@Id
	@Column(name="documento")
	private Long documento;
	
	@Column(name="primer_nombre")
	private String primerNombre;
	
	@Column(name="segundo_nombre", nullable=true)
	private String segundoNombre;
	
	@Column(name="primer_apellido")
	private String primerApellido;
	
	@Column(name="segundo_apellido", nullable=true)
	private String segundoApellido;
	
	@Column(name="celular")
	private String celular;
	
	@Column(name="direccion")
	private String direccion;
	
	@Column(name="email")
	private String email;
	
	@Column(name="estado")
	private String estado;

	public String getTipoDocumento() {
		return tipoDocumento;
	}

	public void setTipoDocumento(String tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}

	public Long getDocumento() {
		return documento;
	}

	public void setDocumento(Long documento) {
		this.documento = documento;
	}

	public String getPrimerNombre() {
		return primerNombre;
	}

	public void setPrimerNombre(String primerNombre) {
		this.primerNombre = primerNombre;
	}

	public String getSegundoNombre() {
		return segundoNombre;
	}

	public void setSegundoNombre(String segundoNombre) {
		this.segundoNombre = segundoNombre;
	}

	public String getPrimerApellido() {
		return primerApellido;
	}

	public void setPrimerApellido(String primerApellido) {
		this.primerApellido = primerApellido;
	}

	public String getSegundoApellido() {
		return segundoApellido;
	}

	public void setSegundoApellido(String segundoApellido) {
		this.segundoApellido = segundoApellido;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	
}
