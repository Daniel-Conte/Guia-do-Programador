CREATE TABLE IF NOT EXISTS Cidades (
    -- "IF NOT EXISTS" é uma condição. Cria a tabela somente se ela não existir, assim quando ela é criada novamente não gerará um erro
    id        INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome      VARCHAR(255) NOT NULL,
    area      DECIMAL(10,2),
    estado_id INT UNSIGNED NOT NULL,

    PRIMARY KEY(id),
    -- "FOREIGN KEY(<coluna>) REFERENCES <tabela>(<coluna>)" estabelece uma relação com outra tabela
    FOREIGN KEY(estado_id) REFERENCES Estados(id)
        -- Estabelece uma relação com a tabela "Estados"
        -- "estado_id" é a coluna nesta tabela que irá receber o valor do "id" da tabela "Estados"
);

CREATE TABLE IF NOT EXISTS teste (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

-- "DROP TABLE <tabela>" exclui uma tabela
DROP TABLE IF EXISTS teste;
-- "IF EXISTS" exclui a tabela somente se existir, assim não dá erro caso exclua uma tabela que não existe