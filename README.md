# Bionic
Paquets de a la distribució Justix del Jaume II

## Instal·lació

Justix es basa en Ubuntu Mate 18.04 64 bits, pel que haurem de partir d'aquest sabor per tal de continuar. 

Els pasos a seguir per a la instal·lació seran els següents:

1. Afegir el repositori de Justix:

```sh
sudo add-apt-repository ppa:ieseljust/bionic
sudo apt-get update
```

Podem veure els diferents paquets de la distribució consultant aquells que porten *justix* al nom:

```
sudo apt-cache search justix

justix-common-utils
justix-external-sources
justix-devel-pack
justix-network-pack
...
```

Entre ells, podem distingir els metapaquets corresponents als diferents cicles:

* `justix-asix-meta`
* `justix-dam-meta`
* `justix-smx-meta`

2. Instal·lació de fonts externes

Abans d'instal·lar qualsevol d'aquests metapaquets, i donat que JustiX utilitza molts paquets de tercers, haurem de configurar diversos `sources.list`. D'això s'encarregarà el paquets `justix-external-sources`, pel que **serà aquest paquet el primer que caldrà instal·lar**:

```
$ sudo apt-get install justix-external-sources
```

Amb açò configurarem diversos fitxers de font de programari, i actualitzarem automàticament la llista de paquets. 

3. Instal·lat els metapaquets corresponents

Ara ja podem instal·lar els metapaquets necessaris per a cada cicle. Estos metapaquets ja arrosseguen tot allò necessari per a cadascun, sempre que la seua llicència ho permeta:

```
$ sudo apt install justix-asix-meta
```

```
$ sudo apt install justix-dam-meta
```

```
sudo apt-install justix-smx-meta
```


// TO-DO: Fem aci una xicoteta descripció de cada paquet
El paquet `justix-common-utils` descarrega i instal·la automàticament el paquet d'extensions del VirtualBox (VB Extension Pack). Contestem que si. Es crea l'usuari alumne/alumne automàticament, que estarà al grup de docker i podrà actualitzar l'equip. COMPTE!!! No és usuari administrador!!!! Sols pot actualitzar l'equip.

