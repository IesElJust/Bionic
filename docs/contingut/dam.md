---
title: Justix DAM meta
permalink: /dam
---

# Programari per a DAM

El programari per a DAM s'afig amb el paquet `justix-dam-meta`, i conté:

## Bases de dades

Les aplicacions per tal de gestionar bases de dades s'afigen al paquet `justix-db-pack`i inclouen:

| Aplicació  |  Descripció |
|-----------|------------|
| mysql-workbench | Client de MySQL |
| mongodb-org  |   Base de dades mongoDB |

## Eines de desenvolupament genèriques

Les eines de desenvolupament incorporades en Justix s'instal·len amb el paquet `justix-devel-pack`, i són:

| Aplicació | Descripció| 
|-----------|------------|
| Visual Studio Code | Editor de codi |
| justix-pseint | Eina pseint per treballara mb diagrames de flux |

## Desenvolupament Java

El desenvolupament en Java, més específic de DAM, incorpora diverses eines, que s'instal·len a través del paquet `justix-java-pack`:

| Aplicació | Descripció |
| -----------|------------|
| Netbeans | Entorn de Desenvolupament Integrat |
| default-jre | Entorn d'execució de Java |
| oracle-java10-installer | Instal·lador de Java 10 |
| openjdk-11-jdk | Versió lliure del Java Developement Kit 11 |
| gradle | Gestor de projectes i dependències per a java |
| gradle-ppa | Gestor de projectes i dependències per a java |

A més, s'incorpora l'eina `ghex` per analitzar codi compilar.

# Arbre de dependències

```
justix-dam-meta
    justix-desktop-theme
    justix-cicles-meta
    justix-db-pack
        mysql-workbench
        mongodb-org
    justix-devel-pack
          code
          justix-pseint
     justix-java-pack
        netbeans
        default-jre
        oracle-java10-installer
        openjdk-11-jdk
        gradle
        gradle-ppa
     ghex
```