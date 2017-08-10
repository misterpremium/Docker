#!/bin/bash
# progbar: una barra de progreso en bash
# por ratoncio
# ver. 0.1
SPEED=0.1
DEL="\\x08\\x08\\x08\\x08\\x08\\x08\\x08\\x08"


FLAG=0
function cargar {

while [ $FLAG -eq 0 ];do
    echo -en "0-------" && sleep $SPEED && echo -en $DEL
    echo -en "-0------" && sleep $SPEED && echo -en $DEL
    echo -en "--0-----" && sleep $SPEED && echo -en $DEL
    echo -en "---0----" && sleep $SPEED && echo -en $DEL
    echo -en "----0---" && sleep $SPEED && echo -en $DEL
    echo -en "-----0--" && sleep $SPEED && echo -en $DEL
    echo -en "------0-" && sleep $SPEED && echo -en $DEL
    echo -en "-------0" && sleep $SPEED && echo -en $DEL
    echo -en "------0-" && sleep $SPEED && echo -en $DEL
    echo -en "-----0--" && sleep $SPEED && echo -en $DEL
    echo -en "----0---" && sleep $SPEED && echo -en $DEL
    echo -en "---0----" && sleep $SPEED && echo -en $DEL
    echo -en "--0-----" && sleep $SPEED && echo -en $DEL
    echo -en "-0------" && sleep $SPEED && echo -en $DEL

done
echo -en $DEL"        "$DEL

}
cargar
exit 0
