---
title: Justix ASIX meta
permalink: /asix
---

# Programari per a ASIX

El programari per a ASIX s'afig amb el paquet `justix-asix-meta`, i conté eines relacionades amb l'edició de codi i gestió de bases de dades necessaris per al mòdul:

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

## Arbre de dependències

```
justix-asix-meta
    justix-asix-meta
    justix-desktop-theme
    justix-cicles-meta
    justix-db-pack
        justix-db-pack
        mysql-workbench
        mongodb-org
    justix-devel-pack
        justix-external-sources
        code
        justix-pseint
```
