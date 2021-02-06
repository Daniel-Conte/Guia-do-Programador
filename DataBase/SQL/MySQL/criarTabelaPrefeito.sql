-- Prefeitos e Cidades tem relação de "1 para 1", ou seja, UM prefeito comanda UMA cidade e UMA cidade tem UM prefeito
-- As vezes as relações "1 para 1" podem ser desfeitas se 1 tabela entra na outra tabela como um atributo, assim a consulta fica mais rápida, porém, precisa analizar as 2 tabelas pra ver se isso é possível
CREATE TABLE IF NOT EXISTS Prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED,
        -- "cidade_id" está sem "NOT NULL", então a relação entre as tabelas fica opcional(Podem existir prefeitos sem cidade)
        -- Em casos onde uma relação "1 para 1" tem uma lado(tabela) que é opcional e o outro obrigatório, a FK sempre deve ir no lado obrigatório pra evitar campos "NULL". Neste caso, a FK deveria estar na tabela "Cidades"
    PRIMARY KEY(id),
    UNIQUE KEY(cidade_id),
        -- Para estabelecer uma relação "1 para 1" a tabela que irá receber a FK(esta) deve tornar a FK como valor ÚNICO
    FOREIGN KEY(cidade_id) REFERENCES Cidades(id)
);