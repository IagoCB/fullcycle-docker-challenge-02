FROM node:14

# Instalando o wait-for e outras dependências
RUN apt-get update && apt-get install -y wget netcat-openbsd

# Baixando o wait-for e atribuindo permissões de execução
RUN wget -O /usr/local/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/master/wait-for \
    && chmod +x /usr/local/bin/wait-for

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos do aplicativo
COPY . .

# Instalando as dependências do Node.js
RUN npm install

# Expondo a porta do aplicativo
EXPOSE 3000

# Definindo o comando de inicialização
CMD ["node", "index.js"]
