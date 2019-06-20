---
title: Instal·lació
permalink: /instalacio
---

# Instal·lació de Justix

Justix es basa en Ubuntu Mate 18.04 64 bits, pel que haurem de partir d'aquest sabor per tal de continuar.

Els pasos a seguir per a la instal·lació seran els següents:

## 1. Afegir el repositori de Justix al sistema

```sh
sudo add-apt-repository ppa:ieseljust/bionic
sudo apt-get update
```
## 2. Instal·lació de fonts externes

Justix arrossega paquets de diferents orígens de programari, pel que caldrà afegir-los al sistema abans que res. Per tal de facilitar aquesta tasca, s'utilitza el paquet `justix-external-sources`, que **caldrà instal·lar i configurar abans d'instal·lar cap metapaquet de Justix**

Per a això, farem:

```
$ sudo apt install justix-external-sources
```

Amb açò configurarem els diversos fitxers de font de programari (*sources.list*), i actualitzarem automàticament la llista de paquets.

## 3. Instal·lació del metapaquet de cicles genèric

```
$ sudo apt install justix-cicles-meta
```

Aquest paquet arrossega diferents paquets d'utilitat bàsics i de configuració del sistema. Trobareu més informació a la pàgina de [Justix Base](/base). 

Cal tenir especial atenció en la instal·lació d'aquest paquet, ja que ens demanarà en finalitzar la instal·lació que acceptem algunes llicències d'usuari.

## 4. Instal·lació del metapaquet necessari per al cicle

Ara ja podem instal·lar els metapaquets necessaris per a cada cicle. Estos metapaquets ja arrosseguen tot allò necessari per a cadascun, sempre que la seua llicència ho permeta:

  * **Metapaquet per a CFGS ASIX**

```
$ sudo apt install justix-asix-meta
```
Aquest metapaquet arrossegarà les aplicacions necessàries per treballar als CFGS d'Administració de Sistemes Informàtics. Podeu trobar més informació a la [pàgina corresponent](/asix).

* **Metapaquet per a CFGS DAM**

```
$ sudo apt install justix-dam-meta
```
Aquest metapaquet arrossegarà el programari necessàri per treballar als CFGS de Desenvolupament d'Aplicacions Multiplataforma. Podeu trobar més informació a la [pàgina corresponent](/dam).

* **Metapaquet per a CFGM SMX**

```
$ sudo apt-install justix-smx-meta
```
Aquest metapaquet arrossegarà les aplicacions necessàries per treballar als CFGM de Sistemes Microinformàtics i Xarxes. Podeu trobar més informació a la [pàgina corresponent](/smx).
