package model.domain.controle_acervo;

import java.util.Date;

public class Item {
    private int numSerie;
    private Date dataAquisicao;
    private String tipoItem;

    public Item() {
    }

    public Item(int numSerie, Date dataAquisicao, String tipoItem) {
        this.numSerie = numSerie;
        this.dataAquisicao = dataAquisicao;
        this.tipoItem = tipoItem;
    }

    public int getNumSerie() {
        return numSerie;
    }

    public void setNumSerie(int numSerie) {
        this.numSerie = numSerie;
    }

    public Date getDataAquisicao() {
        return dataAquisicao;
    }

    public void setDataAquisicao(Date dataAquisicao) {
        this.dataAquisicao = dataAquisicao;
    }

    public String getTipoItem() {
        return tipoItem;
    }

    public void setTipoItem(String tipoItem) {
        this.tipoItem = tipoItem;
    }

    
}
