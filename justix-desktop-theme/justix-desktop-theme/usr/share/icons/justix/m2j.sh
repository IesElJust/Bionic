#!/bin/bash

for i in `ls /usr/share/icons/masalla/status`; do
         mkdir "./${i}/status"
         cp /usr/share/icons/masalla/status/${i}/* ./${i}/status/
done    

