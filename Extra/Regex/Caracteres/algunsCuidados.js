/*
    Cuidado com o tab!
        - Dependendo da configuração do tab pode ocorrer 2 coisas:
            - O tab em espaços -> Se o tab estiver configurado para dar espaços normais, a expressão a seguir irá retornar  os espaços dentro de um array
            - O tab em tab -> Se o tab estiver configurado para dar um tab mesmo, a expressão irá retornar "\t", dizendo que encontrou um espaço do tipo tab
*/ 
console.log('   '.match(/\s/g)) // "\s" busca os espaços