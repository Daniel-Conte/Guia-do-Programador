SELECT * FROM Cidades c INNER JOIN Prefeitos p ON c.id = p.cidade_id
    -- "INNER JOIN" retorna somente as linhas que estão relacionadas entre as 2 tabelas

SELECT * FROM Cidades c LEFT JOIN Prefeitos p ON c.id = p.cidade_id
    -- "LEFT JOIN" retorna todas as linhas da tabela À ESQUERDA, independentemente se elas estão relacionadas com a outra tabela ou não
        -- Tabela à esquerda é a tabela que foi definida à esquerda do "LEFT JOIN", ou seja, a tabela "Cidades"

SELECT * FROM Cidades c RIGHT JOIN Prefeitos p ON c.id = p.cidade_id
    -- "RIGHT JOIN" retorna todas as linhas da tabela À direita, independentemente se elas estão relacionadas com a outra tabela ou não
        -- Tabela à direita é a tabela que foi definida à direita do "RIGHT JOIN", ou seja, a tabela "Prefeitos"

-- Existe o conceito do "FULL JOIN" que retorna todas as linhas das 2 tabelas, independentemente se elas estão relacionadas ou não. Porém, o MySQL não suporta este comando, mas é possível obter o mesmo resultado unindo a consulta do "LEFT JOIN" com a do "RIGHT JOIN"
SELECT * FROM Cidades c LEFT JOIN Prefeitos p ON c.id = p.cidade_id
UNION
SELECT * FROM Cidades c RIGHT JOIN Prefeitos p ON c.id = p.cidade_id
    -- Basta separar as 2 consultas com "UNION" e executar tudo ao mesmo tempo