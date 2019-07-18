package com.jorge.asesoftware.prueba.carcenter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.jorge.asesoftware.prueba.carcenter.DAO.MecanicosRepository;
import com.jorge.asesoftware.prueba.carcenter.DTO.Mecanicos;

@RestController
public class MecanicosController {
	
	@Autowired
	private MecanicosRepository mecanicosRepository;
	
	@GetMapping(value = "/mecanicos")
	public List<Mecanicos> all(){ 
       return mecanicosRepository.findAll();
    } 

	@PostMapping(value = "/mecanicos")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Mecanicos save(@RequestBody Mecanicos mecanico) {
		return mecanicosRepository.save(mecanico);
	 }
	
}
