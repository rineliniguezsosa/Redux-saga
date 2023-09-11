## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

<ul>
   <li>Node.js (versión >=14.18.0)</li>
   <li>npm (versión >=8.0.0)</li>
</ul>

## Instalación

1. Clona este repositorio en tu máquina local:

```shell
https://github.com/rineliniguezsosa/Redux-saga.git
```

2. Navega al directorio del proyecto:

```shell
cd playground-reduxsaga
```

3. Instala las dependencias del proyecto:

```shell
npm install
```

## USO

1. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```shell
npm run dev
```

1. Abre tu navegador y visita http://127.0.0.1:5173/ para ver la aplicación en funcionamiento

## Documentando lo aprendido

### call

La función **call** de **redux-saga/effects** se utiliza en las sagas de Redux Saga para realizar llamadas a funciones, métodos u otras sagas de manera sincrónica.

### yield

La función **yield** se utiliza en las sagas de redux para pausar la ejecución de una tarea ó para esperar hasta que una tarea se complete 

### put

La función **put** de **redux-saga/effects** se utiliza para despachar una acción dentro de un generador de funciones de Saga. Cuando se llama a put, se crea una instrucción que indica a Redux que se debe despachar una acción en el almacén Redux.

### connect

Para acceder al store y despachar acciones utilizamos la función **connect** de **react-redux** en lugar de **useDispatch** 

**Nota: la función connect se usa para los componentes de Clase**

**mapDispatchToProps.** es una función que se utiliza en la biblioteca React Redux para mapear acciones de Redux,Esta función se utiliza comúnmente junto con **connect**

**mapStateToProps.** es una función utilizada en la biblioteca React Redux para mapear el estado de Redux,Esta función se utiliza comúnmente junto con **connect**

## Aplicación aún en construcción 
## Seguimos trabajando :hammer: