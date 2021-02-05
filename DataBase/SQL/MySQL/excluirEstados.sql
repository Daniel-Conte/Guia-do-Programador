-- "DELETE FROM <tabela>"
-- "WHERE <condição>"

--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

--        NUNCA SE ESQUEÇA DE COLOCAR "WHERE"
--        Se não colocar, TODOS os dados na tabela serão excluídos

--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

DELETE
FROM  Estados
WHERE sigla = 'MN'

DELETE
FROM  Estados
WHERE id >= 1000