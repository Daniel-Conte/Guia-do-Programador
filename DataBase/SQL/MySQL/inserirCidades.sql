INSERT INTO Cidades(nome, area, estado_id)
VALUES ('Campinas', 795, 25);
    -- Inserindo o "id" de São paulo na FK(estado_id), pois "Campinas" pertence à São Paulo

INSERT INTO Cidades(nome, area, estado_id)
VALUES ('Niterói', 133.9, 19);

INSERT INTO Cidades
    (nome, area, estado_id)
VALUES
    ('Caruaru', 920.6, (SELECT id FROM Estados WHERE sigla = 'PE'))
        -- É possível inserir um dado a partir de uma consulta, pois as consultas retornam valores. Basta add uma consulta que retorne o dado necessário entre parêntese

INSERT INTO Cidades
    (nome, area, estado_id)
VALUES
    ('Juazeiro do Norte', 248.2, (SELECT id FROM Estados WHERE sigla = 'CE'))