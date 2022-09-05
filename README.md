# Battle Ship en React JS

---

> App creada con Create React App (CRA)
> Para documentación sobre CRA, consultar la [documentación](https://create-react-app.dev/).

> Se utilizó HTML5, CSS3, Bootstrap, JavaScript y React para su creación.
> README escrito utilizando sintaxis de Markdown (.md).

> Adicionalmente se utilizó la librería Notiflix para las notificaciones, loading y reportes.
> Consultas sobre [Notiflix](https://notiflix.github.io/documentation).
> Y React Router Dom para la navegación entre views.

---

## Correr la app

Clonar repositorio

    $ git clone git@github.com:Alejors/battle-ship.git

Instalar las librerías:

    $ npm install

Correr programa:

    $ npm run start

La App correrá en [localhost](http://localhost:3000/)

---

### Instrucciones:

1. Al cargarse la aplicación, se define de manera **automática** la ubicación de los barcos del PC.
2. Los barcos del jugador deberán seleccionarse. El subtítulo indicará qué barco debes ubicar y
cuántos espacios ocupa.

>Los espacios seleccionados por el jugador se marcarán con un símbolo numeral o gato (**#**).

![Imagen de subtítulo](https://res.cloudinary.com/alejors/image/upload/v1662148847/proyect-avatars/battleship-readme/Captura_de_pantalla_de_2022-09-02_15-56-19_zko2u2.png)

3. El primer espacio seleccionado corresponde a la *proa del barco*, por lo que debe seleccionar un casillero **al menos a la distancia suficiente del final del tablero** (el final del tablero serían la *columna F o fila 9*) para que entren las siguientes partes. 
4. El siguiente espacio determinará la **dirección** en que irá tu barco. Los barcos se ubican de manera *vertical u horizontal*. Si intentas seleccionar un casillero **no permitido** se enviará un aviso, recordando las condiciones para su ubicación.

![Imagen de alerta por posición incorrecta](https://res.cloudinary.com/alejors/image/upload/v1662148847/proyect-avatars/battleship-readme/Captura_de_pantalla_de_2022-09-02_15-56-19_zko2u2.png)

5. Una vez ubicados los cinco (5) barcos. Comenzarán las *rondas de disparos*. El primero en disparar será el jugador. El disparo se realiza haciendo **clic** sobre un casillero del tablero. Si **aciertas el disparo**, se te avisará y el casillero quedará marcado con una **X**. Si *erras*, el casillero quedará marcado con *dos tildes (~)*, asemejando olas de agua.

    ![Acierto y Error](https://res.cloudinary.com/alejors/image/upload/v1662149837/proyect-avatars/battleship-readme/Captura_de_pantalla_de_2022-09-02_16-16-43_gtaun3.png)

6. Cuando hundas barcos enemigos se te avisará y se verificará si aún quedan barcos enemigos sin hundir.

7. Atacarás a tu enemigo en el tablero superior. Tu enemigo te atacará en el tablero inferior, donde tus barcos se verán marcados en un fondo gris.

![tablero del enemigo](https://res.cloudinary.com/alejors/image/upload/v1662335082/proyect-avatars/battleship-readme/Captura_de_pantalla_de_2022-09-04_20-42-49_ydmax7.png)

8. Cuando uno de los dos jugadores (El PC o Tú) se quede sin barcos, se terminará el juego.

    ![Fin del juego](https://res.cloudinary.com/alejors/image/upload/v1662150158/proyect-avatars/battleship-readme/Captura_de_pantalla_de_2022-09-02_16-21-10_vtafrr.png)

9. Si quieres volver a jugar, sólo presiona **Sí** a la consulta de volver a jugar.