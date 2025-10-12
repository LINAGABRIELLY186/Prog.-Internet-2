Estrutura da API - Clean DDD

Neste projeto, utilizo os princiios de CLEAN Architecture como tambem os padrões SOLID.

A implementação desses padrões mantem o codigo limpo, organizado e de facil manutenção.

    ESTRUTURA:

**apresentacao** -> Lida com o mundo externo, como o cliente interge com a aplicação. |ROTAS & CONTROLADORES|

**aplicacao** -> Contem a logica de negocio de modo que coordenadas os pedidos feitos |casosDeUsos|.

**dominio** ❤-> O coração da aplicação, aqui temos as regras puras, modelos e a definição essencial do que é válido.

**persistencia** -> Lida com o armazenamento, onde o estado da aplicação é mantido.

                    Lina Gabrielly 

