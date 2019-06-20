#!/bin/bash

# Potser necessitem pkexec

NOM=`hostname`
UNKNOWN_NAME="justix"

a=`date`
echo "Passe per aci ${a}" >> /tmp/check

if [ ${NOM} = ${UNKNOWN_NAME} ]; then
	NOMNOU=`zenity --entry --text "S'ha detectat que el host no té encara un nom a l'aula.\n\nIndiqueu el nom per a aquest host: " --title "Modificació del hostname"`
	pkexec update_hostname.sh ${UNKNOWN_NAME} ${NOMNOU}

fi
