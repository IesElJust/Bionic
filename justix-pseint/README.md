# PSEInt Binaries

Distribució dels binaris del PSEInt, un editor de pseudocodi.

Paquet original a: [https://sourceforge.net/projects/pseint/](https://sourceforge.net/projects/pseint/)

El paquet es distribueix en format .tar.gz, i dóna bastants complicacions per reempaquetar-se com a deb. 

S'ha hagut d'empaquetar com a appImage. El directori per a la seua construcció és PseInt.AppDir.

Per tal ge generar l'appImage, necessitem l'eina `appimagetool`, de https://github.com/AppImage/AppImageKit.

Una vegada hem descarregat l'AppImageKit, podem fer, dins del directori `PseInt.AppDir`:

```
$ appimagetool-x86_64.AppImage .
```

O indicant l'arquitectura:

```
$ ARCH=x86_64 appimagetool-x86_64.AppImage .
```

I ens generarà un fitxer.appImage. 

Si posem directament l'appImage dins un `.deb`, sembla que dóne problemes, pel que farem, dins el propi preinstall, que es descarregue l'appImage des de github directament amb:

```
wget https://github.com/IesElJust/Bionic/blob/master/justix-pseint/pseInt.AppDir/pseint-x86_64.AppImage?raw=true -O pseint-x86_64.AppImage
```