-- "SELECT <colunas>" retorna as colunas que deseja consultar
-- "FROM   <tabela>"  especifica a tabela que deseja consultar

SELECT * FROM Estados
    -- "*" seleciona todas as colunas

SELECT sigla, nome AS 'Nome do Estado'
    -- "<coluna> AS '<nome>'" muda o nome da coluna que será apresentada na consulta
FROM   Estados
WHERE regiao = 'Sul' -- "WHERE <condição>" filtra os dados e retorna somente as linhas que se encaixam na condição

SELECT est.sigla, est.nome AS 'Nome do Estado'
    -- Outra forma de escrever a coluna é colocando o <tabela>.<coluna>
FROM   Estados est
    -- "<tabela> <apelido>" é possível criar um apelido para a tabela, assim escrevendo menos dentro da consulta
    -- O apelido é válido somente dentro desta consulta
WHERE regiao = 'Sul'

SELECT   nome,
         regiao,
         populacao
FROM     Estados
WHERE    populacao >= 10
ORDER BY populacao DESC
    -- "ORDER BY <coluna> <direção>" ordena as linhas conforme a coluna passada
    -- "direção" é opcional. Por padrão é "ASC"(crescente), para ordenar de forma decrescente use "DESC"