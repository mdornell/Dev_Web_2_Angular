package com.videoLocadora;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.videoLocadora.domain.controle_acervo.Ator;
import com.videoLocadora.domain.controle_acervo.Classe;
import com.videoLocadora.domain.controle_acervo.Diretor;
import com.videoLocadora.repository.AtorRepository;
import com.videoLocadora.repository.ClasseRepository;
import com.videoLocadora.repository.DiretorRepository;

@SpringBootApplication
public class VideoLocadoraApplication {

	public static void main(String[] args) {
		SpringApplication.run(VideoLocadoraApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(AtorRepository aR, DiretorRepository dR, ClasseRepository cR) {
		return args -> {
			// Criando um ator
			aR.deleteAll();

			Ator a = new Ator();
			a.setNome("Marco");
			aR.save(a);

			// Criando um diretor
			dR.deleteAll();

			Diretor d = new Diretor();
			d.setNome("João");
			dR.save(d);

			// Criando uma classe
			cR.deleteAll();

			Classe c = new Classe();
			c.setNome("Ação");
			c.setPrazoDevolucao(new java.sql.Date(System.currentTimeMillis()));
			c.setValor(0);
			cR.save(c);

		};
	}

	
}
