#Por defecto corre en modo Build
if [ $RUN_BUILD -eq 0 ]; then
    echo "RUN_BUILD: Dev Mode - Trabajador Microservice  "
    #printenv
    pnpm start:dev
else
    echo "RUN_BUILD: Build Mode - Trabajador Microservice"
    #printenv
    pnpm start:prod
fi
