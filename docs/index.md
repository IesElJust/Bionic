# Introducció

Justix és una capa de programari i configuració per sobre d'Ubuntu Mate per tal de facilitar la tasca docent als cicles d'informàtica a l'IES Jaume II el Just.

Justix no és, per tant, una distribució Linux com a tal.

## Què podem trobar

Els aspectes més rellevants de Justix són:

* Està pensada per instal·lar-se sobre la base d'una Ubuntu Mate 18.04.
* Afig automàticament dipòsits de programari de tercers, per disposar de versions actualitzades de diversos paquets i d'altres no disponibles de base en Ubuntu.
* Crea un usuari *alumne* amb privilegis d'administrador restringits. L'alumne podrà actualitzar els repositoris i el prorgamari de la màquina, però no podrà instal·lar programari nou. D'aquesta manera, quan es necessite incorporar programari nou, aquest s'afegirà com a dependència als metapaquets ja instal·lats, i s'instal·larà com a una dependència dels metapaquets de Justix.
* Incorpora de base Docker-ce, crea el grup *docker*, i afig l'usuari *alumne* a aquest, de manera que els alumnes podran utilitzar Docker sense privilegis d'administrador.
