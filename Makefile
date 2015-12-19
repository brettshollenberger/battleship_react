OPENSSL=/usr/local/Cellar/openssl/1.0.2d_1/bin/openssl
ROOT_DN= /CN=Cassette Localhost/C=US/
ISSUING_DN= /CN=Cassette Issuing CA/C=US/

#
## Create Self-Signed Certificate for the Root CA
#
root-ca.key:
	$(OPENSSL) genpkey -algorithm RSA -out root-ca.key 2048

root-ca: root-ca.key
	$(OPENSSL) req -batch -new -x509 -days 13650 -key root-ca.key -subj "$(ROOT_DN)" -utf8 -extensions v3_ca -out $@.pem

#
## Create an RSA key
# Example: make create-rsa.key KEY=my-program.key
# #
create-rsa.key:
	$(OPENSSL) genpkey -algorithm RSA -out $(KEY) 2048

#
# Create a Certificate Signing request:
# Example: make create-csr KEY=my-program.key CSR=my-program.csr DN='/CN=my-program.com/C=US/'
#
create-csr:
	$(OPENSSL) req -new -key "$(KEY)" -out "$(CSR)" -subj "$(DN)" 

#
# And finally, sign this certificate request:
# Example: make sign-cert CSR=my-program.csr PEM=my-program.pem
#
sign-cert:
	$(OPENSSL) x509 -req -in "$(CSR)" -CA root-ca.pem -CAkey root-ca.key -CAcreateserial -extensions usr_cert -days 1365 -out $(PEM)

.PHONY: clean

clean:
	rm -rf passphrase *.key *.csr *.param *.pem *.srl
