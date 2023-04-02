![Kanbana](https://user-images.githubusercontent.com/48220676/229336320-f422fd9d-462f-468d-a873-e433a1e7f229.png)

## Descripción

Kanbana es una plataforma que automatiza el procedimiento de creación de tareas para llevar a cabo un proyecto de software y su asignación a la persona que posea las aptitudes que se ajusten a los requerimientos de la misma, mediante el uso de inteligencia artificial. Puede ver un video explicativo del proyecto [aquí](https://youtu.be/yR7c0GzsxKc).

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

## Ejemplo de proyecto para probar la aplicación

* **Name**: Kanbana
* **Purpose**: web application that uses chatgpt to understand a project description (with its functional and technical requirements), list all initial tasks (which are created automatically through ChatGPT) and assign the tasks to people based on their skillset and know-how
* **Key Features**: The user can describe the project based on a series of questions, indicating the purpose, functional features, target audience, technical requirements and any additional information they consider necessary. They will also describe the members of the team, providing their names and relevant skillsets. Then, the application will process all this data and create a kanban board with the appropriate tasks and their corresponding assigned developers.
* **Target Audience**: The main target audience are project and recruiting managers. Anyone who needs a jumpstart on listing tasks and assigning responsible parties can benefit from the app.
* **Technical Requirements**: Web Application that uses FastApi (Python) for the backend API, calling the ChatGPT API and React and Next.JS for the frontend.
* **Further Comments**: I expect the tasks to be divided equally among the team, with a proper balance of people in the backend and the frontend. I would like the tasks to detail the different components of the frontend typically seen in a kanban table and to detail the components from the project description page.
* **Team**:
  * Alejo: Graphic Design, Docker, Docker-Compose, Java OOP
  * Nehuén: React, NodeJS, NextJS
  * Mateo: FastAPI, Python, PostgreSQL
  * Ippo: Graphic design, NextJS, React

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
