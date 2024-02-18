# quantum-sapiens

## Creacion NFT com Metaplex Y Sugar

Sugar es un CLI de Candy Machine para crear NFT de manera sencilla en Solana esta es su pagina donde esta la intalacion:

https://docs.metaplex.com/developer-tools/sugar/overview/introduction

### Requisitos previos

1. Instalar CLI de Solana en: https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool

2. Crear una direccion de Solana y solicitar unos tokens de prueba: https://solfaucet.com/

3. Instalar Metaplex Sugar CLI: https://docs.metaplex.com/developer-tools/sugar/overview/installation

4. Crea una cuenta de alamacenamiento IPFS en Pinata cloud: https://www.pinata.cloud/

### Estructua de archivos

Es muy importante tner la estructura de archivos que vemo en la carpeta nft-collection/ y respetar la estructura de los archivos .json y .jpg, en la carpeta esta el ejemplo de cada uno de ellos

### Creacion coleccion NFT

Es importante para ejecutar los comandos estar a un nivel superior de la carpeta assets/

1. Configurar la conexion con Pinata cloud

``` shell
sugar config create
```

2. Subir los archivos

``` shell
sugar upload
```

3. Con este comando verificamos nuestra direccion del NFT en Solana

``` shell
sugar verify
```

4. Con la direccion que podemos ver a generar este comando en la terminal podemos consultar nuestro NFT

https://www.solaneyes.com/address/944eKENZZmn2RcB52QaWSMyKTd7qvSEd4t3cGMb4B45M?cluster=devnet

Con la direccion tambien podemos buscar en el solana Explorer nuestro NFT:

https://explorer.solana.com/address/944eKENZZmn2RcB52QaWSMyKTd7qvSEd4t3cGMb4B45M?cluster=devnet