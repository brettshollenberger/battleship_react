# Battleship React

![Architecture](./architecture.png)

## Create SSL Cert for dev

```bash
make root-ca
make create-rsa.key KEY=./ssl/battleship.key
make create-csr KEY=./ssl/battleship.key CSR=./ssl/battleship.csr DN='/CN=localhost/C=US/'
make sign-cert CSR=./ssl/battleship.csr PEM=./ssl/battleship.pem
```

Import these certificates into your Trust Store.

## Purposes of the Server

1. Match up users for games of Battleship
2. Proxy between Firebase and game clients with "game creation" events. This way clients only receive their own game creation events, and can only subscribe to their own events on Firebase. The intent of this setup is to improve client security and performance.

Once games are setup, clients manage the logic for the actual Battleship games, utilizing their private Firebase rooms to synchronize data between clients.

## Running the Server's services

1) Start the game matching service

```bash
bin/matchingd start
```

2) Run workers, http server, https server, cable server, and webpack

```bash
foreman start
```

### Secure Production Deployment

In a production deployment, use Nginx to proxy `wss` connections (which clients will be obligated to use, since the whole deployment is over SSL) into the unencrypted `ws` connections used on the server.

https://github.com/nicokaiser/nginx-websocket-proxy
http://nginx.org/en/docs/http/websocket.html
