INSERT INTO Estados
    (id, nome, sigla, regiao, populacao)
VALUES
    (1000, 'Novo', 'NV', 'Sul', 2.54)
        -- Mesmo o "id" tendo "AUTO_INCREMENT" é possível adicionar linhas passando o valor do "id" (desde que não seja repetido)

INSERT INTO Estados
    (nome, sigla, regiao, populacao)
VALUES
    ('Mais Novo', 'MN', 'Norte', 2.51)
        -- O "AUTO_INCREMENT" sempre vai incrementar a partir do maior valor(última linha), então já que o maior valor é '1000' (que foi adicionado logo acima), as próximas linhas vão ter o "id" a partir deste valor (neste caso '1001)