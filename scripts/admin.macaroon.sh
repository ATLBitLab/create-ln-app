echo $PWD

VOLUMES_PATH=../../backend/docker/compose/create-ln-app-0/volumes/lnd/
MACAROON_PATH=/data/chain/bitcoin/regtest/admin.macaroon
NODES=$(ls $VOLUMES_PATH)
echo $NODES
NL="\n"
for node in $NODES
do
  MACAROON=$(xxd -ps -u -c 1000 $VOLUMES_PATH/$node/$MACAROON_PATH)
  echo "$node Macaroon: $MACAROON"$NL
  echo "$node Header:""'Grpc-Metadata-macaroon':'$MACAROON'"$NL$NL
done
