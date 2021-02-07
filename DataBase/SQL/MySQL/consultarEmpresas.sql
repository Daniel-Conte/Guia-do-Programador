-- Retorna as empresas e as cidades sede
SELECT e.nome AS Empresa, c.nome AS Cidade
FROM empresas e INNER JOIN empresas_unidades eu ON
     e.id = eu.empresa_id
INNER JOIN cidades c ON -- Encadeando "INNER JOINs"
     eu.cidade_id = c.id
AND eu.sede
    -- "0" é interpretado como "false" e "1" como "true"