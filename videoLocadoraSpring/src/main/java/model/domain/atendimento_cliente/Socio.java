package model.domain.atendimento_cliente;

import java.util.Date;

public class Socio extends Cliente {
    
    private String cpf;
    private String endereco;
    private String telefone;

    public Socio() {
    }

    public Socio(String cpf, String endereco, String telefone, int numInscricao, String nome, Date dataNascimento, char sexo, boolean estaAtivo) {
        super(numInscricao, nome, dataNascimento, sexo, estaAtivo);
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    
}
