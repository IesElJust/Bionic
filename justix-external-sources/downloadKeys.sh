#!/bin/sh

GPG_PATH="./justix-external-sources/etc/apt/trusted.gpg.d"

[ -d ${GPG_PATH} ] && rm -r ${GPG_PATH}
mkdir ${GPG_PATH}

# MongoDB
# Amb apt-key:     apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "[Justix] Downloading mongoDB keys..."
curl "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x68818C72E52529D4" | gpg --dearmor > ${GPG_PATH}/mongodb.gpg

echo "[Justix] Downloading VSCode keys..."
curl "https://packages.microsoft.com/keys/microsoft.asc" | gpg --dearmor > ${GPG_PATH}/microsoft.gpg

# Google Chrome Key
echo "[Justix] Importing Google Chrome keys..."
curl "https://dl-ssl.google.com/linux/linux_signing_key.pub" | gpg --dearmor > ${GPG_PATH}/google.gpg

# Virtualbox Keys
echo "[Justix] Importing Oracle Virtualbox keys..."
curl "https://www.virtualbox.org/download/oracle_vbox_2016.asc"   | gpg --dearmor > ${GPG_PATH}/oracle.gpg

# Docker
echo "[Justix] Importing Docker keys..."
curl -fsSL "https://download.docker.com/linux/ubuntu/gpg" |  gpg --dearmor > ${GPG_PATH}/docker.gpg
    
# Xenlism icon theme
#apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 2B80AC38
echo "[Justix] Importing Xenlism keys..."
curl "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xB5C583782B80AC38" |  gpg --dearmor > ${GPG_PATH}/xenlism.gpg
