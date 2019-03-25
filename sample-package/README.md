# Creació d'un paquet d'exemple

Aquest paquet s'ha generat amb la següent ordre:

```
$ dh_make --native --single --packagename sample-package_1.0.0 --email joamuran@gmail.com
```

L'ordre `dh_make` ens prepara l'estructura d'empaquetat necessària per generar un .deb.

Les opcions utilitzades han estat:

* `--native`: Crea un paquet Debian natiu.
* `--single`: Genera un únic fitxer binari.
* `--packagename sample_package_1.0.0`: Indica el nom del paquet (sample_package) i la versió (1.0.0)
* `--email`: Correu del *mantenidor* (*maintainer*) del paquet.

Quan llancem l'ordre, ens mostra els diferents paràmetres configurats per al nostre paquet i ens demanarà confirmació:

```
$ dh_make --native --single --packagename sample-package_1.0.0 --email joamuran@gmail.com
Maintainer Name     : Jose A. Múrcia
Email-Address       : joamuran@gmail.com
Date                : Sat, 23 Mar 2019 20:02:45 +0100
Package Name        : sample-package
Version             : 1.0.0
License             : gpl3
Package Type        : single
Are the details correct? [Y/n/q]
Please respond with "yes" or "no" (or "y" or "n")
Currently there is not top level Makefile. This mayrequire additional tuning
Done. Please edit the files in the debian/ subdirectory now.
```

Una vegada confirmat, ens crea el directori `debian` amb el següent contingut de base:

```
e$ tree debian/
debian/
├── changelog
├── compat
├── control
├── copyright
├── manpage.1.ex
├── manpage.sgml.ex
├── manpage.xml.ex
├── menu.ex
├── postinst.ex
├── postrm.ex
├── preinst.ex
├── prerm.ex
├── README
├── README.Debian
├── README.source
├── rules
├── sample-package.cron.d.ex
├── sample-package.doc-base.EX
├── sample-package-docs.docs
└── source
    └── format
    
```
Com veiem, ens ha creat una estructura bastant gran de fitxers. Anem a netejar aquesta estructura i ens quedem amb els fitxers necessaris i d'ús més habitual:

```
$ tree . 
.
├── changelog
├── compat
├── control
├── copyright
├── postinst.ex
├── postrm.ex
├── preinst.ex
├── prerm.ex
├── rules
└── source
    └── format
```

En principi, per tal de generar nous paquets, podem bé generar de nou tota l'estructura, i quedar-nos amb el que més ens interesse, o fer una còpia d'aquest paquet, realitzant les modificacions oportunes als diferents fitxers.

Veiem doncs, a grans trets el contingut d'aquests fitxers, i què hauriem de modificar per fer nous paquets o realitzar modificacions.

## Fitxers al directori /debian

### changelog

El fitxer de changelog és un dels fitxers *requerits* dins l'estructura debian, i és el fitxer que s'encarrega d'oferir la versió, revisió, distribució i urgència del paquet. L'ordre `dh_make`, ens crea un fitxer de changelog inicial amb el següent contingut:

```
sample-package (1.0.0) unstable; urgency=medium

  * Initial Release.

 -- Jose A. Múrcia <joamuran@gmail.com>  Sat, 23 Mar 2019 20:02:45 +0100

```
En ell es descriu:

* A la primera línia, el **nom del paquet**, seguit de **la versió** entre parèntesi, la **distribució** i la **urgència** del paquet.
* Les següents línies contenen una descripció de la revisió/versió, junt amb qui l'ha pujat i la data en què s'ha realitzat.

Cada vegada que realitzem canvis que impliquen una nova versió o revisió del paquet, haurem d'indicar-ho al changelog. Per a això, disposem de l'ordre `dch` del paquet `devscripts`, que utilitzarem de la següent forma:

```
$ dch -i
```

Des del directori pare al directori `debian`. Amb açò, se'ns obrirà un editor al que podrem afegir les modificacions corresponents al fitxer per reflexar els canvis de versió:

```
sample-package (1.0.0ubuntu1) UNRELEASED; urgency=medium
  
  * Aci posarem la descripció del canvi que hem fet

 -- Jose A. Múrcia <joamuran@neon>  Sun, 24 Mar 2019 17:22:10 +0100

sample-package (1.0.0) unstable; urgency=medium

  * Initial Release.

 -- Jose A. Múrcia <joamuran@gmail.com>  Sat, 23 Mar 2019 20:02:45 +0100
```

Com veiem, ens oferix un nou número de versió *(1.0.0ubuntu1)*. Podem trobar més informació sobre el format dels números de versió [al propi manual de `deb-version`](http://manpages.ubuntu.com/manpages/artful/en/man5/deb-version.5.html).

Com veiem, caldrà modificar aquesta primera línia, per indicar que la distribució destí serà `bionic` en lloc de `UNRELEASED`, així com per establir el número de versió corresponent. Per altra banda, també caldrà revisar els correus que afig automàticament el sistema, i modificar tota la informació que considerem necessària.

### compat

Aquest fitxer defineix el nivell de compatibilitat amb `debhelper`. Actualment, es deixa amb un valor 10.

### control

Es tracta d'altre dels fitxers importants, i en ell s'especifiquen molts dels paràmetres utilitzats per les eines de gestió de paquets com `dpkg`, `dselect`, `apt-get`, `apt-cache` o `aptitude`.

El seu aspecte inicial és el següent:

```Source: sample-package
Section: unknown
Priority: optional
Maintainer: Jose A. Múrcia <joamuran@gmail.com>
Build-Depends: debhelper (>= 10)
Standards-Version: 4.1.2
Homepage: <insert the upstream URL, if relevant>
#Vcs-Git: https://anonscm.debian.org/git/collab-maint/sample-package.git
#Vcs-Browser: https://anonscm.debian.org/cgit/collab-maint/sample-package.git

Package: sample-package
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends}
Description: <insert up to 60 chars description>
 <insert long description, indented with spaces>
```

En aquest fitxer, de cara a crear nous paquets, és important que ens fixem en els diferents paràmetres:

* `Source: sample-package`, indica el nom del paquet font,
* `Section: unknown`: Indica la secció de la distribució a què s'assigna el paquet. Les seccions poden ser`main`, `non-free`, `contrib` (paquets de codi lliure, propietaris i que depenen de programari propietari, respectivament). Dins de cada secció hi ha divisions segons el tipus de programari, així tenim `admin`, per als programes d'administració del sistema, `base` per a les eines bàsiques del sistema, `devel` per al programari de desenvolupament, `doc` per a la documentació, `libs` per a les llibreríes, `mail`, per a lectors de correu, `net` per a aplicacions i dimonis de xarxa, i `x11` per a programes d'X11 i d'altres. La forma d'indicar-ho, sería secció/subsecció, tot i que si la secció és main, aquesta es pot ometre.
* `Priority: optional`: Indica la importància del paquet per a l'usuari o el sistema. `Optional` indica que el paquet no té conflictes amb altres. Tenim altres prioritats com `required`, `important`o `standard`.
* `Maintainer: Jose A. Múrcia <joamuran@gmail.com>`: Nom i adreça electrònica del mantenidor o mantenidors.
* `Build-Depends: debhelper (>= 10)`: Indica la llista de paquets necessaris per construïr el paquet (dependències de construcció). Tots els paquets construïts amb `dh_make`, hauran de dependre de `debhelper` per a la seua construcció. 
* `Standards-Version: 4.1.2`: Indica la versió dels estàndards definits en les normes Debian seguides en la construcció del paquet.
* `Homepage: <insert the upstream URL, if relevant>`: Aci indicarem la URL del lloc web de l'aplicació.
* `Package: sample-package`: Indica el nom del paquet binari, normalent el mateix que el paquet font. Cal dir que un mateix paquet font pot generar diversos binaris.
* `Architecture: any`: Indica les arquitectures per a les que serà compilat el paquet. Si indiquem `any`, el paquet és compilat per a cada arquitectura, mentre que si indiquem `all` el paquet serà independent de l'arquitectura. 
* `Depends: ${shlibs:Depends}, ${misc:Depends}`: Aci s'especifiquen les dependències del paquet. Es tracta d'una de les línies més importants, sobretot quan es tracta d'un metapaquet. A banda de `Depends` que estableix les dependències, podem trobar `Recommends` per a recomanacions, `Suggests` pe a suggerències, `Pre-Depends` (predependència), `Breaks` (trenca), `Conflicts` (entra en conflicte), `Provides` (proveeix altre paquet) o `Replaces` (reemplaça).
* `Description: <insert up to 60 chars description>` i lés línies següents `<insert long description, indented with spaces>` (aquestes últimes comencen per un espai), indiquen la descripció curta i la descripció llarga del paquet, respectivament.

### copyright

Indica les diferents llicències amb què es publica el paquet.

### Maintainer scripts: postinst.ex, postrm.ex, preinst.ex i prerm.ex

Es tracta dels scripts del desenvolulador (*maintainer scripts*). La creació per defecte els afig l'extensió `.ex`, d'exemple, que haurem d'eliminar. Aquests script s'encarreguen de realitzar determinades tasques prèvies o posteriors a la instal·lació o supressió del paquet:

* `preinst`: Script que s'executa abans de realitzar la instal·lació del paquet,
* `postinst`: Script que s'executa després de realitzar la instal·lació del paquet,
* `prerm`: Script que s'executa abans de realitzar la desinstal·lació del paquet,
* `postrm`: Script que s'executa després de realitzar la desinstal·lació del paquet.

### rules

Aquest fitxer indica les regles que seguirà l'ordre `dpkg-buildpackage` per tal de crear el paquet. Es tracta d'una espècie de *Makefile*, però diferent al dels fonts originals. Es tracta també d'un fitxer executable. 

El fitxer consta de diferents objectius i regles. Cada regla comença amb la declaració dels objectius a la prier columna i la resta de línies comencen amb una tabulació i les seues regles.  A més, gràcies a debhelper, podem utilitzar diversos *assistents*, per a la generació del paquet. Des de ja fa bastant temps, aquest fitxer s'ha simplificat bastant, i el seu contingut consta de només un objectiu i una regla:

```
%:
	dh $@
```

Que bàsicament indiquen que s'apliquen tots els *helpers* d'empaquetat possibles segons el que tinguem. (Es tracta d'una espècie d'*abracadabra* aplicat als helpers d'empaquetat)

### Altres fitxers

Un altre fitxer que no existeix i que anem a crear s'anomenarà `sample-package.install`, i que indicarà quins fitxers o carpetes es "*deixaran caure*" al sistema amb la instal·lació. Per exemple, si tinguérem les següents carpetes al directori arrel del nostre paquet:

```
.
├── debian
│   ├── changelog
│   ├── compat
│   ├── control
    ...
├── backgrounds
│   ├── [...]
├── app
│   ├── [...]
└── README.md

```

I volguérem que el contingut de `backgrounds` s'instal·lara a la carpeta `/usr/share/backgrounds` i la carpeta `app` s'instal·lara a `/usr/share`, el contingut del fitxer `sample-package.install`, sería:

```
backgrounds /usr/share/backgrounds
app /usr/share
```

## Paquets necessaris

* build-essential
* devscripts
* debhelper

## Algunes lectures de base

* [https://www.debian.org/doc/manuals/maint-guide/dother.ca.html](https://www.debian.org/doc/manuals/maint-guide/dreq.ca.html)
* [https://www.debian.org/doc/manuals/maint-guide/dother.ca.html](https://www.debian.org/doc/manuals/maint-guide/dother.ca.html)
* [https://www.debian.org/doc/manuals/maint-guide/dother.ca.html](https://blog.heckel.xyz/2015/10/18/how-to-create-debian-package-and-debian-repository/)