CREATE TABLE IF NOT EXISTS Empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj INT UNSIGNED,
    PRIMARY KEY(id),
    UNIQUE KEY(cnpj)
)

ALTER TABLE Empresas MODIFY cnpj VARCHAR(14);
    -- Alterando o tipo de dados do campo 'cnpj'

-- Tratando o relacionamento "N para N"(muitos para muitos)
-- Cria-se uma outra tabela com as PKs das 2 tabelas relacionadas
CREATE TABLE IF NOT EXISTS Empresas_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL,
        -- Valor "0" para falso e "1" para verdadeiro
        --"TINYINT" número inteiro pequeno
    PRIMARY KEY(empresa_id, cidade_id),
        -- Chave composta
    FOREIGN KEY(empresa_id) REFERENCES Empresas(id),
    FOREIGN KEY(cidade_id) REFERENCES Cidades(id)
);