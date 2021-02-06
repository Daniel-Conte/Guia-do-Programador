-- Esta forma não é a ideal para fazer isso
SELECT
    e.nome AS Estado,
    c.nome AS Cidade,
    regiao AS Região
FROM estados e, cidades c
    -- Para add outras tabelas na consulta basta separar por vírgula
WHERE e.id = c.estado_id;
    -- Para fazer a junção das tabelas precisa add a condição em que a PK de uma que seja igual a FK da outra (Esquema da FOREIGN KEY)

-- Forma ideal
SELECT
    e.nome AS Estado,
    c.nome AS Cidade,
    regiao AS Região
-- FROM <tabela1> INNER JOIN <tabela2> ON
--      <PK da tabela1> = <FK da tabela2>
-- Faz a junção das tabelas e retorna os dados relacionados
-- É possível fazer isso com várias tabelas ao mesmo tempo (encadeado)
FROM Estados e INNER JOIN Cidades c ON
    e.id = c.estado_id