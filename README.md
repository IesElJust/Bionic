# Bionic
Paquets de a la distribució Justix del Jaume II

## Instal·lació
- Sobre una Ubuntu Mate 18.04 64 bits, afegir el repositori de Justix

sudo add-apr add-repository ppa:ieseljust/bionic
sudo apt-get update

Per a veure els paquets de la distribució:

sudo apt-cache search justix

justix-common-utils
justix-external-sources
justix-devel-pack
justix-network-pack
...

Els metapaquets dels cicles son:
justix-asix-meta
justix-dam-meta
justix-smx-meta



Instal·lem primer el justix-external-sources que afigirà els ppas necessaris, i després instal·lem el metapaquet de cada cicle. El metapaquet dels cicles arrastra ja tot lo necessari per a cada cicle. Poden 

sudo apt install justix-external-sources
sudo apt update
sudo apt install justix-asix-meta

Ens demanarà acceptar la llicènsia del VirtualBox Extension Pack. Contestem que si. Es crea l'usuari alumne/alumne automàticament, que estarà al grup de docker i podrà actualitzar l'equip. COMPTE!!! No és usuari administrador!!!! Sols pot actualitzar l'equip.

