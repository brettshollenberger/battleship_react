# Battleship React

## Create SSL Cert for dev

```bash
make root-ca
make create-rsa.key KEY=./ssl/battleship.key
make create-csr KEY=./ssl/battleship.key CSR=./ssl/battleship.csr DN='/CN=localhost/C=US/'
make sign-cert CSR=./ssl/battleship.csr PEM=./ssl/battleship.pem
```

Import these certificates into your Trust Store.

## Running the Server

1) Start the user matching service

```bash
bin/matchingd start
```

2) Run workers, http server, https server, and cable server

```bash
foreman start
```

3) Run webpack to watch for javascript changes

```bash
webpack -w ./webpack.config.js
```
