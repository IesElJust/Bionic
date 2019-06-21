---
title: Continguts
permalink: /caracteristiques
---

# Què conté JustiX?

JustiX està pensada per instal·lar-se sobre la base d'una Ubuntu Mate 18.04, sobre la que instal·la programari i configuracions addicionals.

D'entre les principals característiques de Justix podem destacar:

* Afig automàticament dipòsits de programari de tercers, per disposar de versions actualitzades de diversos paquets i d'altres no disponibles de base en Ubuntu.
* Crea un usuari *alumne* amb privilegis d'administrador restringits. L'alumne podrà actualitzar els repositoris i el programari de la màquina, però no podrà instal·lar programari nou. D'aquesta manera, quan es necessite incorporar programari nou, aquest s'afegirà com a dependència als metapaquets ja instal·lats, i s'instal·larà com a una dependència dels metapaquets de Justix.
* Incorpora de base Docker-ce, crea el grup *docker*, i afig l'usuari *alumne* a aquest, de manera que els alumnes podran utilitzar Docker sense privilegis d'administrador.
