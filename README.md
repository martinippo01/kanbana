![Kanbana](https://user-images.githubusercontent.com/48220676/229336320-f422fd9d-462f-468d-a873-e433a1e7f229.png)

## Descripción

Kanbana es una plataforma que automatiza el procedimiento de creación de tareas para llevar a cabo un proyecto de software y su asignación a la persona que posea las aptitudes que se ajusten a los requerimientos de la misma, mediante el uso de inteligencia artificial.

## Prerrequisitos

Para ejecutar la aplicación, se requieren los siguientes paquetes extra:

* `Docker`. Se puede obtener Docker [en el siguiente enlace](https://docs.docker.com/get-docker/).
* `Docker-Compose`. Este paquete viene incluido con la distribución de Docker para los usuarios de macOS y Windows. Para usuarios de Linux, obtenga instrucciones [en el siguiente enlace](https://docs.docker.com/compose/install/)

## Ejecutar Kanbana

Primero, clonar el repositorio utilizando `git clone https://github.com/martinippo01/kanbana.git` y cambiar el directorio a él.

Proveemos un simple _script_ para iniciar la aplicación. Para ejecutarlo, debemos otorgarle los permisos pertinentes:

```Bash
chmod u+x run.sh
```

Luego, simplemente corra el _script_. `Docker Compose` construirá dos imágenes de Docker y creará una red para que los contenedores se comuniquen.

```Bash
./run.sh
```

Por último, acceda a la aplicación web visitando `http://localhost:3000` en el navegador.

## Tecnologías utilizadas en el proyecto

* JavaScript
* Python
* FastAPI
* Next.js
* React
* Docker

## Autores

* [Alejo Flores Lucey](https://github.com/alejofl)
* [Martín Augusto Ippolito](https://github.com/martinippo01)
* [Mateo F. Bartellini Huapalla](https://github.com/m-bartel)
* [Nehuén Gabriel Llanos](https://github.com/NehuenLlanos)

<hr>

Desarrollado por FLAN durante HackIT/BA 2023
