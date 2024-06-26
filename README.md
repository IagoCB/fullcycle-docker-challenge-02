# Desafio 2 Docker Full Cycle

Neste desafio, você irá configurar um ambiente Docker que consiste em Nginx como proxy reverso, uma aplicação Node.js que se comunica com um banco de dados MySQL para cadastrar e listar nomes. O acesso à aplicação estará disponível na porta 8080.

## Como Executar

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

1. Clone este repositório:

   ```
   git clone git@github.com:IagoCB/fullcycle-docker-challenge-02.git
   ```

2. Navegue até o diretório clonado:

   ```
   cd fullcycle-docker-challenge-02
   ```

3. Execute o seguinte comando para iniciar os serviços:

   ```
   docker-compose up -d
   ```

Isso irá iniciar os contêineres Docker para o Nginx, o Node.js e o MySQL, configurando tudo conforme as especificações fornecidas.

## Acesso à Aplicação

Após a execução bem-sucedida do comando acima, você pode acessar a aplicação em: http://localhost:8080

Você verá a mensagem "Full Cycle Rocks!" junto com a lista de nomes cadastrados no banco de dados MySQL.

## Estrutura do Projeto

- `docker-compose.yml`: Arquivo de configuração do Docker Compose para definir os serviços.
- `nginx/nginx.conf`: Arquivo de configuração do Nginx como proxy reverso.
- `node/Dockerfile`: Arquivo de configuração do Docker para a aplicação Node.js.
- `node/index.js`: Código-fonte da aplicação Node.js.
- `database/schema.sql`: Script SQL para criar a tabela e inserir dados iniciais no MySQL.

## Observações

- Este projeto é apenas para fins educacionais e de demonstração.
- Este é um desafio proposto pela Full Cycle. Para mais informações, visite o site oficial em [link para o site](https://www.fullcycle.com.br/).
