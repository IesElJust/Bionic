#/bin/bash 

for i in `find -name "changelog"`; do 
	PKG=`head -1 $i | cut -d "(" -f 1 | sed 's/[ \t\n]*$//'`
	VER=`head -1 $i | cut -d "(" -f 2 | cut -d ")" -f 1`

	PPA_VER=`apt-cache madison $PKG | grep http://ppa.launchpad.net/ieseljust/bionic/ubuntu | head -1 | tr -s "" | cut -d"|" -f 2 | sed 's/^[ \t]*//' | sed 's/[ \t\n]*$//'`


	if [ ! -z $PPA_VER ]; then 
		if [ $VER != $PPA_VER ]; then
			echo -e "\e[93m $PKG ($VER): ${PPA_VER} \e[39m"
		else
			echo -e "$PKG ($VER): ${PPA_VER}"
		fi
	fi

	 
done
echo -e "\e[39m"
