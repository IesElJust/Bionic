---
title: Justix base
permalink: /base
---

# Justix de base

El paquet que s'encarrega de realitzar la instal·lació de programari de base per als cicles és el `justix-cicles-meta`. Aquest paquet realitza la instal·lació de diversos metapaquets que aporten progrmari divers. Veiem com s'organitza aquest.

![Escriptori](https://raw.githubusercontent.com/IesElJust/Bionic/master/docs/_img/escriptori.png)

## Entorn d'escriptori

La capa de personalització de l'escriptori es realitza a través del paquet `justix-cicles-meta`, i afig el següent **programari** al sistema:

| Aplicació | Descripció |
|-----------|------------|
| plank     | Dock inferior |
| arc-theme | Temàtica per a les finestres |
| xenlism-wildfire-icon-theme | Joc d'icones principal |

A més, afig una **configuració** personalitzada del *dock plank* per tal de disposar d'accessos directes i carpetes d'accessos a les aplicacions més utilitzades.

## Creació de l'usuari alumne

El paquet `justix-common` s'encarrega principalment de crear l'usuari `alumne` i afegir-lo al grup d'admonostradors amb permisos restringits.

## Eines comunes
   
Justix aporta una sèrie d'utilitats d'ús comú  i per millorar el sistema que no venen per defecte en Ubuntu, a través del paquet `justix-common-utils`. Aquest paquets instal·la el següent **programari**:

| Aplicació | Descripció |
|-----------|------------|
| tilix     | Terminal de tipus mosaic, com a alternativa al mate-terminal, que ens permet partir la finestra tant com desitgem |
| vim       | Editor de text |
| tree      | Llistat de directoris en forma d'arbre |
| Oracle Virtualbox 6.0 | Programari de virtualització  |
| docker-ce | Interfície en línia d'ordres pe gestionar imatges i contenidors Docker |
| docker-compose | Eina per crear i executar aplicacions multi-contenidor amb Docker |

A més, es descarrega i instal·la automàticament el pack d'extensions de virtualbox, per al qual s'ha d'acceptar la llicència prèviament. Per altra banda, es configura l'usuari *alumne* com a membre del grup *docker*, de manera que pot utilitzar aquest sense necessitat d'executar-lo com a *sudo*. 

## Utilitats de xarxa

A través del paquet `justix-network-pack`, s'instal·la el següent programari:

| Aplicació | Descripció |
|-----------|------------|
| nmap  | Analitzador de xarxa |
| openssh-server    | Servidor d'SSH |
| filezilla | Client d'FTP |
| google-chrome-stable | Navegador web |


## Arbre de dependències

A continuació es detalla l'arbre de dependències del paquet `justix-cicles-meta`:

```
justix-cicles-meta
   justix-desktop-theme
     plank
     arc-theme
     xenlism-wildfire-icon-theme
     tilix
   justix-common
   justix-common-utils
     justix-external-sources
     justix-common
     ubuntu-mate-default-settings
     tilix
     vim
     tree
     virtualbox-6.0
     docker-ce
     docker-compose
   justix-network-pack
     justix-external-sources
     nmap
     openssh-server
     filezilla
     google-chrome-stable
```