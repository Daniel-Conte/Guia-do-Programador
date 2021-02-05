-- Somente para atualizar as linhas, não serve para atualizar a estrutura da tabela

-- "UPDATE <tabela>"
-- "SET <modificação>" especifica o que quer mudar
-- "WHERE <condição>" especifica em quais linhas a modificação deverá ser aplicada

--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

--        NUNCA SE ESQUEÇA DE COLOCAR "WHERE" NA ATUALIZAÇÃO
--        Se não colocar, a modificação se aplicará em TODOS os dados na tabela

--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

UPDATE estados
SET    nome = 'Maranhão'
WHERE  sigla = 'MA'
    -- Muda o "nome" para "Maranhão" somente nas linhas onde a "sigla" é "MA"

UPDATE  estados
SET     nome = 'Paraná',
        populacao = 11.32 -- É possível aplicar mais de uma modificação ao mesmo tempo
WHERE   sigla = 'PR'