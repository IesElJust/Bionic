#!/bin/bash

# Potser necessitem pkexec

hostnamectl set-hostname ${2}
sed -i "s/${1}/${2}/" /etc/hosts

