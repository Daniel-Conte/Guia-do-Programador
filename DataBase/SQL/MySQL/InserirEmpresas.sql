INSERT INTO Empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 12345678901234),
    ('Vale', 11223344556677),
    ('Cielo', 98765432123456);

-- "DESC <tabela>" mostra informações sobre a tabela
DESC Empresas;
DESC Cidades;

INSERT INTO Empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);