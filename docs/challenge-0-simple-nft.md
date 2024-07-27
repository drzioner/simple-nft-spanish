## ¡Desafío #0: Ejemplo Simple de NFT 🎟️!

> [!NOTE]
> Nota:
> Esta es una traducciòn del tutorial **Challenge #0: 🎟 Simple NFT Example** original en inglés, si quieres ver el
> tutorial original puedes hacerlo [aqui](https://speedrunethereum.com/challenge/simple-nft-example).
>

📚 Este tutorial está pensado para desarrolladores que ya entienden los 🖍️ conceptos básicos.

🧑‍🏫 Si buscas una introducción más suave para desarrolladores, mira nuestra serie de 15 videos 🎥 "De Web2 a Web3".

🎫 ¡Crea un NFT simple!:
👷‍♀️ Compilarás y desplegarás tus primeros contratos inteligentes. Luego, usarás una plantilla React llena de componentes y hooks útiles de Ethereum. ¡Finalmente, desplegarás un NFT en una red pública para compartir con amigos! 🚀

🌟 El resultado final es una app que permite a los usuarios comprar e intercambiar NFTs. ¡Despliega tus contratos en una red de prueba, luego construye y sube tu app a un servidor web público! ¡Envía la URL a SpeedRunEthereum.com!

💬 ¡Conoce a otros constructores trabajando en este desafío y recibe ayuda en el canal de Telegram del Desafío 0!

🤖 Si tienes alguna pregunta durante tu desafío, puedes probar el asistente de IA del Desafío y obtener respuestas a tus preguntas sobre el Desafío/Scaffold-ETH. ¡Comunícate con nosotros en Telegram si algo parece incorrecto!

**Checkpoint 0: 📦 Preparando el Entorno 📚**

Antes de empezar, necesitas instalar las siguientes herramientas:

- Node (>= v18.17)
- Yarn (v1 o v2+)
- Git

Luego, descarga el desafío a tu computadora e instala las dependencias ejecutando:

```bash
git clone https://github.com/scaffold-eth/se-2-challenges.git challenge-0-simple-nft
cd challenge-0-simple-nft
git checkout challenge-0-simple-nft
yarn install
```

En la misma terminal, inicia tu red local (una instancia local de una blockchain):

```bash
yarn chain
```

En una segunda ventana de terminal, 🛰️ despliega tu contrato (localmente):

```bash
cd challenge-0-simple-nft
yarn deploy
```

En una tercera ventana de terminal, inicia tu 📱 frontend:

```bash
cd challenge-0-simple-nft
yarn start
```

📱 Abre http://localhost:3000 para ver la app.

**Checkpoint 1: ⛽️ Gas y Carteras 👛**

⛽️ Necesitarás obtener algo de fondos del grifo para el gas.

🦊 Al principio, **no** conectes MetaMask. Si ya estás conectado, haz clic en "Desconectar".

🔥 Usaremos carteras efímeras (burner wallets) en localhost.
👛 Explora cómo funcionan las burner wallets en 🏗 Scaffold-ETH 2 abriendo una nueva ventana de incógnito y navegando a http://localhost:3000. Notarás que tiene una nueva dirección de cartera en la esquina superior derecha. Copia la dirección del navegador de incógnito y envía fondos de prueba de localhost desde tu primer navegador (usando el botón "Faucet" en la esquina inferior izquierda).

👨🏻‍🚒 Cuando cierras la ventana de incógnito, la cuenta desaparece para siempre. Las burner wallets son geniales para el desarrollo local, pero usarás carteras más permanentes cuando interactúes con redes públicas.

**Checkpoint 2: 🖨 Acuñando NFTs**

✏️ ¡Acuña algunos NFTs! Haz clic en el botón "MINT NFT" en la pestaña "My NFTs".

👀 Deberías ver cómo empiezan a aparecer tus NFTs:

👛 Abre una ventana de incógnito y navega a http://localhost:3000.
🎟️ Transfiere un NFT a la dirección de la ventana de incógnito usando la interfaz de usuario:

👛 Intenta acuñar un NFT desde la ventana de incógnito.
¿Puedes acuñar un NFT sin fondos en esta dirección? ¡Puede que necesites obtener fondos del grifo para pagar el gas!
🕵🏻‍♂️ Inspecciona la pestaña "Debug Contracts" para averiguar qué dirección es la propietaria de YourCollectible.
🔏 También puedes revisar tu contrato inteligente YourCollectible.sol en packages/hardhat/contracts.
💼 Echa un vistazo rápido a tu script de despliegue 00_deploy_your_contract.js en packages/hardhat/deploy.
📝 Si quieres editar el frontend, navega a packages/nextjs/app y abre la página específica que quieres modificar. Por ejemplo: /myNFTs/page.tsx. Para obtener orientación sobre el enrutamiento y la configuración de páginas/layouts, consulta la documentación de Next.js.

**Checkpoint 3: 💾 ¡Despliega tu contrato! 🛰️**

🛰️ ¿¿¿Listo para desplegar en una red de prueba pública???
Cambia defaultNetwork en packages/hardhat/hardhat.config.ts a sepolia.

🔐 Genera una dirección de deployer con yarn generate. Esto crea una dirección de deployer única y guarda la frase semilla localmente.
Esta cuenta local desplegará tus contratos, permitiéndote evitar ingresar una clave privada personal.

👩‍🚀 Usa yarn account para ver los saldos de tu cuenta de deployer.

⛽️ Necesitarás enviar ETH a tu dirección de deployer con tu cartera, o obtenerlo de un grifo público de la red elegida.
Algunos grifos populares de Sepolia son Alchemy Faucet, Infura Faucet y Google Cloud Faucet.
⚔️ Misión secundaria: Mantén una 🧑‍🎤 punkwallet.io en la pantalla de inicio de tu teléfono y mantenla cargada con ETH de la red de prueba. 🧙‍♂️ ¡Parecerás un mago cuando puedas financiar tu dirección de deployer desde tu teléfono en segundos!
🚀 Despliega tu contrato inteligente NFT con yarn deploy.
💬 Pista: Puedes establecer defaultNetwork en hardhat.config.ts a sepolia O puedes yarn deploy --network sepolia.

**Checkpoint 4: 🚢 ¡Despliega tu frontend! 🚁**

✏️ Edita tu configuración de frontend en packages/nextjs/scaffold.config.ts para cambiar targetNetwork a chains.sepolia:

Deberías ver la red correcta en el frontend (http://localhost:3000):

🦊 Como hemos desplegado en una red de prueba pública, ahora necesitarás conectarte usando una cartera que poseas o usar una cartera efímera. De forma predeterminada, 🔥 las carteras efímeras solo están disponibles en hardhat. Puedes habilitarlas en todas las cadenas estableciendo onlyLocalBurnerWallet: false en tu configuración de frontend (scaffold.config.ts en packages/nextjs/).

💬 Pista: Para una carga más rápida de tu página de transferencias, considera actualizar fromBlock pasado a useScaffoldEventHistory en packages/nextjs/app/transfers/page.tsx a blocknumber - 10 en el que se desplegó tu contrato. Ejemplo: fromBlock: 3750241n (donde n representa que es un BigInt). Para encontrar este blocknumber, busca la dirección de tu contrato en Etherscan y encuentra la línea de transacción Contract Creation.
🚀 Despliega tu aplicación NextJS

```bash
yarn vercel
```

Sigue los pasos para desplegar en Vercel. Una vez que inicies sesión (correo electrónico, GitHub, etc.), las opciones predeterminadas deberían funcionar. Te dará una URL pública.
Si quieres volver a desplegar en la misma URL de producción, puedes ejecutar yarn vercel --prod. Si omites el indicador --prod, se desplegará en una URL de vista previa/prueba.
⚠️ Ejecuta la función de prueba automatizada para asegurarte de que tu aplicación pasa

```bash
yarn test
```

**Configuración de Servicios de Terceros para Aplicaciones de Grado de Producción.**

De forma predeterminada, 🏗 Scaffold-ETH 2 proporciona claves API predefinidas para servicios populares como Alchemy y Etherscan. Esto te permite comenzar a desarrollar y probar tus aplicaciones más fácilmente, evitando la necesidad de registrarte en estos servicios.
Esto es genial para completar tu SpeedRunEthereum.
Para aplicaciones de grado de producción, se recomienda obtener tus propias claves API (para evitar problemas de limitación de velocidad). Puedes configurarlas en:
🔷 ALCHEMY_API_KEY variable en packages/hardhat/.env y packages/nextjs/.env.local. Puedes crear claves API desde el panel de control de Alchemy.
📃 ETHERSCAN_API_KEY variable en packages/hardhat/.env con tu clave API generada. Puedes obtener tu clave aquí.
💬 Pista: Se recomienda almacenar env's para nextjs en la configuración de entorno de Vercel/sistema para aplicaciones en vivo y usar .env.local para pruebas locales.

**Checkpoint 5: 📜 Verificación de Contrato**

Puedes verificar tu contrato inteligente en Etherscan ejecutando (yarn verify --network network_name):

```bash
yarn verify --network sepolia
```

Está bien si dice que tu contrato ya está verificado. Copia la dirección de YourCollectable.sol y búscala en sepolia Etherscan para encontrar la URL correcta que necesitas enviar para este desafío.

**Checkpoint 6: 💪 ¡Presume!**

👩‍❤️‍👨 ¡Comparte tu URL pública con un amigo y pídele su dirección para enviarle un coleccionable! :)

**⚔️ Misiones Secundarias**

🐟 **Open Sea**
🐃 ¿Quieres ver tus nuevos NFTs en Opensea? Dirígete a Testnets Opensea.
🎫 Asegúrate de haber