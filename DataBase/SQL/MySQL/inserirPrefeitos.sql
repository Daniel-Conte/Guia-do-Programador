INSERT INTO Prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo', 2),
    ('Raquel', 3),
    ('Zenaldo', null),
    ('Rafael', null);
        -- A coluna da FK deve ir no lado obrigatório da relação justamente para evitar linhas com valor nulo
        -- Mesmo a FK sendo UNIQUE, é possível varios campos com valor NULL