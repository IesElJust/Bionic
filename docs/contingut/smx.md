---
title: Justix SMX meta
permalink: /smx
---

# Programari per a SMX

El paquet encarregat per al programari del CFGM de Sistemes Microinformàtics i Xarxes és el `justix-smx-meta`, i incorpora el següent programari:

## Programari d'ofimàtica

El paquet que inclou el programari d'ofimàtica és `justix-office-pack`, i conté el programari de la suite LibrOffice que no s'instal·la per defecte: 

  Paquet   Descripció  
 -------- ------------ 
 libreoffice-base-core   Base de dades de Libreoffice  
  libreoffice-base   Base de dades de Libreoffice  

## Programari multimèdia

El programari multimèdia s'incorpora a través del metapaquet `justix-multimedia-pack`, i conté:

  Paquet   Descripció  
 -------- ------------ 
  gimp    Tractament de la imatge  
  inkscape   Disseny vectorial  
  audcity   Eina per a l'edició d'àudio  
  kdenlive   Eina per a l'edició de vídeo  

## Arbre de dependències

```
justix-smx-meta
   justix-desktop-theme
   justix-cicles-meta
   justix-office-pack
        libreoffice-base-core
        libreoffice-base
   justix-multimedia-pack
        gimp
        inkscape
        audcity
        kdenlive
```




