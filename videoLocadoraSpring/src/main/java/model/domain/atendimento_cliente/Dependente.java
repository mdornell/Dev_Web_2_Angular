package model.domain.atendimento_cliente;

import java.util.Date;

public class Dependente extends Cliente {
    
    public Dependente() {
    }

    public Dependente(int numInscricao, String nome, Date dataNascimento, char sexo, boolean estaAtivo) {
        super(numInscricao, nome, dataNascimento, sexo, estaAtivo);
    }
}
