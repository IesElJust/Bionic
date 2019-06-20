---
title: Instal·lació
permalink: /instalacio
---

# Instal·lació de Justix

Justix es basa en Ubuntu Mate 18.04 64 bits, pel que haurem de partir d'aquest sabor per tal de continuar.

## Passos per a una instal·lació neta de Justix

Els pasos a seguir per a la instal·lació seran els següents:

### 1. Afegir el repositori de Justix al sistema

```sh
sudo add-apt-repository ppa:ieseljust/bionic
sudo apt-get update
```
### 2. Instal·lació de fonts externes

Justix arrossega paquets de diferents orígens de programari, pel que caldrà afegir-los al sistema abans que res. Per tal de facilitar aquesta tasca, s'utilitza el paquet `justix-external-sources`, que **caldrà instal·lar i configurar abans d'instal·lar cap metapaquet de Justix**

Per a això, farem:

```
$ sudo apt install justix-external-sources
```

Amb açò configurarem els diversos fitxers de font de programari (*sources.list*), i actualitzarem automàticament la llista de paquets.

### 3. Instal·lació del metapaquet de cicles genèric

```
$ sudo apt install justix-cicles-meta
```

Aquest paquet arrossega diferents paquets d'utilitat bàsics i de configuració del sistema. Trobareu més informació a la pàgina de [Justix Base](/Bionic/base).

Cal tenir especial atenció en la instal·lació d'aquest paquet, ja que ens demanarà en finalitzar la instal·lació que acceptem algunes llicències d'usuari.

### 4. Instal·lació del metapaquet necessari per al cicle

Ara ja podem instal·lar els metapaquets necessaris per a cada cicle. Estos metapaquets ja arrosseguen tot allò necessari per a cadascun, sempre que la seua llicència ho permeta:

  * **Metapaquet per a CFGS ASIX**

```
$ sudo apt install justix-asix-meta
```
Aquest metapaquet arrossegarà les aplicacions necessàries per treballar als CFGS d'Administració de Sistemes Informàtics. Podeu trobar més informació a la [pàgina corresponent](/Bionic/asix).

* **Metapaquet per a CFGS DAM**

```
$ sudo apt install justix-dam-meta
```
Aquest metapaquet arrossegarà el programari necessàri per treballar als CFGS de Desenvolupament d'Aplicacions Multiplataforma. Podeu trobar més informació a la [pàgina corresponent](/Bionic/dam).

* **Metapaquet per a CFGM SMX**

```
$ sudo apt-install justix-smx-meta
```
Aquest metapaquet arrossegarà les aplicacions necessàries per treballar als CFGM de Sistemes Microinformàtics i Xarxes. Podeu trobar més informació a la [pàgina corresponent](/Bionic/smx).

## Clonació d'equips

Els següents passos són els utilitzats per a la instal·lació d'equips per al curs 2019-2020.

### Genració de la imatge de base

En primer lloc, partim d'una Ubuntu Mate actualitzada, **a la que haurem donat per nom de màquina `justix`**. Sobre aquest ordinador instal·larem tot el programari de base, tal i com s'ha indicat en l'apartat anterior:

 ```
 $ sudo apt-add-repository ppa:ieseljust/bionic
 ...
 $ sudo apt-get update
 ...
 $ sudo apt-get install justix-external-sources
 ...
 $ sudo apt-get install justix-cicles-meta
 ```

 Amb açò, reiniciem, i ja tindrem una Justix de base funcionant.

Una vegada instal·lat açò, s'ha instal·lat el paquet `check-hostname`, per tal de modificar de manera fàcil el nom dels ordinadors clonats.

### Instal·lació a les aules

Una vegada clonada la imatge a les diferents aules, en iniciar cada ordinador, el paquet `check-hostname` comprovarà el nom d'aquest, i en cas d'anomenar-se `justix`, ens demanarà que el modifiquem, de manera que poguem especificar el nom de cada equip en l'aula.

Fet açò, ja podrem instal·lar el metapaquet corresponent a cada cicle en concret.

## Ordinadors del professor

Per als ordinadors del professor, s'instal·larà el paquet `justix-profe`, que afig un parell d'eines com l'`arpon`, per evitar atacs ARP i el `Cluster-ssh`, per accedir als equips de l'aula de forma més fàcil. A més, aquest paquet crea l'usuari genèric **profe**, per a professorat genèric, sense permís d'administració.