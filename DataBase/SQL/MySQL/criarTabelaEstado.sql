-- Comentários utilizam 2 hífens '--'

CREATE TABLE Estados (
    -- <nome> <tipo de dado> <regras/constraints>
    id  INT UNSIGNED NOT NULL AUTO_INCREMENT,
        -- "INT" tipo de dado Número Inteiro
        -- "INT UNSIGNED" não permite que o valor integer tenha sinal negativo
        -- "NOT NULL" Não permite que este campo seja vazio
        -- "AUTO_INCREMENT" Incrementa o valor a cada linha que for inserida
    nome VARCHAR(45) NOT NULL,
        -- "VARCHAR(<qtd>)" tipo de dado String, define a quantidade de caracteres que este campo aceita
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
        -- "ENUM(<valores>)" Define um conjunto de valores que serão aceitos, não será aceito um valor diferente desses
    populacao DECIMAL(5,2) NOT NULL,
        -- "DECIMAL(<inteiros>, <decimais>)" Tipo de dados Número Decimal, define as casas decimais antes e depois da vírgula
    PRIMARY KEY(id),
        -- Define qual campo será a chave primária(PK)
    UNIQUE KEY(nome),
        -- Impede que o campo tenha valores duplicados nas outras linhas
    UNIQUE KEY(sigla)
);