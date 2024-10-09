package com.videoLocadora.domain.atendimento_cliente;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Socio extends Cliente {

    @Column
    private String cpf;

    @Column
    private String endereco;

    @Column
    private String telefone;

}
