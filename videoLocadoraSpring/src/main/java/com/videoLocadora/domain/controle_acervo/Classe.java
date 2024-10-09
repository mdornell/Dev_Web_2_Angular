package com.videoLocadora.domain.controle_acervo;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Classe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, nullable = false)
    private String nome;

    @Column(nullable = false)   
    private double valor;

    @Column(nullable = false)
    private Date prazoDevolucao;

}
