SELECT
    regiao as 'Região',
    SUM(populacao) as 'Total'
        -- "SUM(<coluna>)" é um agregador que soma o valor de todas as linhas desta coluna
        -- Se usado junto com "GROUP BY", será feito uma soma para cada grupo gerado
FROM estados
GROUP BY regiao
    -- "GROUP BY <coluna>" forma grupos para cada valor da coluna passada. Neste caso, cada região terá um grupo com as linhas que tem aquela regiao
    -- Deve ser usado junto com algum agregador e a coluna passada deve estar no "SELECT"

SELECT AVG(populacao) as 'Total'
    -- "AVG(<coluna>)" é um agregador que soma todas as linhas do grupo e retorna a média
from   Estados