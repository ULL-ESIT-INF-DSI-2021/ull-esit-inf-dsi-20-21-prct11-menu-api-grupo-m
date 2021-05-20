# Práctica 11. API Node/Express de gestión de información nutricionalTarea

## Grupo M

Karina Kalwani

Micaela Lucia Mungay Juncal

Carla Oval Torres

Eduardo Pérez Suárez

Xue Mei Lin


## Repositorio de GitHub con el código fuente de la práctica:

[https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-m](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-m)


## Descripción de la práctica

En esta práctica tendremos que desarrollar una API a basándonos en la anterior práctica grupal que hemos desarrollado. Las instrucciones de la tarea se encuentran en el siguiente recurso:

https://ull-esit-inf-dsi-2021.github.io/prct11-menu-api/

Sintetizando, tendremos que implementar una API, haciendo uso de Node/Express, que permita llevar a cabo operaciones de creación, lectura, modificación y borrado (Create, Read, Update, Delete - CRUD) de ingredientes, platos y menús.
Los requisitos que se nos exigen en la práctica abarcan la existencia de un objeto Alimento/Ingrediente, un objeto Plato, un objeto Menú, un objeto Carta y un objeto Comanda, que ya implementamos en la práctica anterior. Estos objetos interactuarán entre sí y tendrán cada uno una serie de elementos internos, atributos o características que los componen. 

A continuación, se enumeran algunos requisitos que deberá cumplir el API, en lo que respecta a las diferentes rutas o puntos de acceso JSON que deberá proporcionar:

- En la ruta /ingredients del API, se deberá poder crear, leer, actualizar o borrar un ingrediente a través de los métodos HTTP necesarios. Las características de estos elementos serán las mismas que definimos en la práctica anterior.

- En la ruta /courses del API, se deberá poder crear, leer, actualizar o borrar un plato a través de los métodos HTTP necesarios. Los platos de un menú estarán compuestos por alimentos y/o ingredientes como los definidos anteriormente.

- En la ruta /menus del API, se deberá poder crear, leer, actualizar o borrar un menú a través de los métodos HTTP necesarios. Como definimos anteriormente, un menú estará compuesto por platos, incluyendo un plato de cada categoría o, al menos, tres de ellas. Para cada menú, se debe poder consultar la siguiente información

## Enunciados de los distintos elementos u objetos propuestos en el ejercicio

Primero haremos un repaso rápido de los elementos que definimos en la anterior práctica y que usaremos en esta. Empezando por las clases Alimento/Ingrediente, Plato, Menú, Carta y Comanda:

### Clase ingrediente/alimento

Hemos incluido un objeto de tipo ingrediente o alimento, como lo queramos llamar (en nuestro caso hemos escogido "ingrediente"). Para cada alimento o ingrediente considerado dentro del sistema de diseño de menús se debe almacenar la información siguiente:

- Nombre del alimento
- Origen del alimento
- Grupo de alimentos al que pertenece (carnes, pescados, huevos, tofu, frutos secos, semillas o legumbres).
- Verduras y hortalizas.
- Leche y derivados.
- Cereales.
- Frutas.
- La composición nutricional del alimento, es decir, macronutrientes (hidratos de carbono, proteínas y lípidos) y kcal por 100 gr.
- Precio del alimento y/o ingrediente por kg en euros.

*En la clase que representará cada alimento o ingrediente, llamada Ingredient, hemos definido una serie de atributos y métodos para poder implementar las características que se nos describen en el enunciado.*

*Tenemos dos elementos, un tipo y un enumerable, y que representan los grupos a los que puede pertenecer un ingrediente (en el caso del enumerable) y una tupla  que representa un macro nutriente (compuesta por el string de su nombre y su cantidad) y que añadiremos como atributo de la clase.*

*A parte de éste, como atributos de la clase definidos en el constructor a su vez tenemos los strings `name` (que representa el nombre del ingrediente) y `origin` (que representa el origen del mismo, de dónde viene o dónde ha sido producido), los tipo number `lipids`, `carbohydrates` y `proteins` (que representan los valores de los distintos macronutrientes que después al almacenaremos junto con su nombre en la tupla macronutrient) y los tipo number `kcalories` (número de calorías por 100g) y `price` (precio por kg)*

*Asimismo, los métodos que hemos definido para esta clase son `getGroup()`, `getPrice()` y `printIngredient()`, que nos devuelven el valor de los atributos `group`, `price` y nos imprimen por pantalla todos los atributos del ingrediente respectivamente.*

### Clase plato

También hemos definido un objeto de tipo plato. Los platos de un menú estarán compuestos por alimentos y/o ingredientes.

- Categoría (entrante, primer plato, segundo plato y postre).
- Lista de alimentos y/o ingredientes que lo componen.
- Composición nutricional del plato (suma de la composición nutricional de los alimentos que componen el plato. Hay que tener en cuenta que los valores nutricionales se definen por 100 gr de ingrediente, pero no siempre se usan 100 gr de cada ingrediente para elaborar un plato.
- Grupo de alimento predominante (entre los ingredientes del plato).
- Precio total del plato en euros en función de la suma de los precios de los ingredientes y sus cantidades que lo componen.

*Esta clase representa cada plato mediante una serie de atributos, los cuales serán los que nos transmitan la información sobre el mismo*

*Tiene un enumerable, el cual usamos para indicar el tipo de plato, que puede ser, según las categorías que hemos definido: entrante, primer plato, segundo plato o postre*

*Ademas tiene como atributos `dishprice`, el cual representará el precio total del plato (calculado con el precio de cada ingrediente segun su peso), `predominantGroup` que nos dice el grupo alimenticio principal del plato (es decir, el que se repite mas veces), `nameDish` el nombre del plato, `ingredientList` que es un vector de ingredientes (en el cual ademas de almacenar el ingrediente almacena el peso en gramos que se utiliza del mismo), `nutritionalValue` valor total nutricional del plato, y por ultimo, `type`, que es donde se almacena el tipo de plato (es decir, el enumerable antes mencionado)*

*Así mismo, los métodos que hemos definido para esta clase son `getName()` (que devuelve el nombre del plato o `nameDish`), `getIngredientList()` (que devuelve la lista de ingredientes) y `getType()` (que devuelve el tipo de plato). Además también tenemos los métodos `setPredominantGroup()` (lo que hace es ir por cada uno de los ingredientes mediante un bucle `forEach` haciendo un count, y va viendo de que grupo es cada ingrediente comparándolos y dándole valor a `predominantGroup` para saber ya definitivamente cuál es el predominante), `getPredominantGroup()` (devuelve el grupo predominante), `setPrice()` (va ingrediente por ingrediente calculando el precio de cada uno y mediante una regla de tres lo va sumando al `dishPrice` hasta terminar con la lista de ingredientes, quedando al final en la variable el precio total del plato como la suma de la que cuesta cada ingrediente), `getPrice()` (devuelve el precio del plato `dishPrice`), `getNutritionalValue()` (devuelve `nutritionalValue`) y por último `print()` (que imprime todas las características del plato).*


### Clase menú

En cuanto al objeto menú, este está compuesto por platos, incluyendo un plato de cada categoría o al menos tres de ellas. Para cada menú, se puede consultar la siguiente información:

- Precio total del menú en euros.
- Platos que lo componen con sus correspodientes alimentos y/o ingredientes.
- Composición nutricional del menú.
- Listado de grupos de alimentos por orden de aparición.

*Esta clase representa cada menú del programa, es decir, cada uno de los conjuntos de platos (de al menos tres) compuestos por platos del tipo entrante, primero, segundo o postre, mediante una serie de atributos que se explicarán a continuación*

*Tenemos `nameMenu`, el cual usamos como identificador para distinguir entre diferentes menus, `priceMenu` que nos da el precio total del menu calculado gracias a un metodo, `dishesMenu` que es un vector que almacena la totalidad de platos del menu para poder trabajar con ellos de manera mas sencilla, `nutriValue` que contiene el valor nutricional total del menu, `typeMenu` donde se almacenan los principales grupos alimenticios por los que está conformado el menu*

*Además, los metodos definidos para esta clase son: `getName()`, el cual nos devuelve el nombre o identificador del menu, `getDishes()`, que nos devuelve el array `dishesMenu` para poder ver los platos que forman el menu, `calculateTotalMoney()`, que calcula el valor total del menu, `getTotalMoney()`, que nos devuelve el atributo `priceMenu` para poder saber el valor antes de calculado, `calculateNutriValue()`, que nos calcula el valor nutricional total del menu, `getNutriValue()`, que nos devuelve el atributo `nutriValue` para poder saber el valor antes calcularlo, `setTypeMenu()`, donde se busca entre los platos que forman el menu el grupo de alimento predominante y se agrega a la lista, `getTypeMenu()`, que nos devuelve el atributo `typeMenu` para poder ver los grupos de alimentos a los que pertenece que definimos con aterioridad, `printMenu()`, que nos visualiza el menú, y por último, `addDish(newDish: Dish)` el cual nos da la posibilidad de agregar un nuevo plato al menu *


### Clase carta

El objeto carta se compondría de una serie de menús prediseñados. Además, en la carta se incluyen platos individuales para que los comensales diseñen sus propios menús. Los menús a diseñar por los clientes pueden tener todos los platos que deseen.

*Para la clase carta tenemos que importar las clases menú (`menu`) y plato (`dish`), ya que la carta se compone de este tipo de elementos.*

*La estructura de esta clase será bastante sencilla, pues tendremos dos atributos de tipo protected que representarán el identificador de la carta `name` y los elementos (menús y platos) que la conforman mediante el atributo `menuCarte` en forma de vector o lista.*

*El cuanto a métodos tendremos simplemente tres: el `constructor` que nos asignará valor a los dos atributos de la clase, un método `displayCarte` que nos mostrará la carta y un método `addMenu` que servirá para que los clientes puedan crear su propio menú personalizado.*


### Clase comanda

Por último, deberá crear una clase Comanda que permita almacenar la comanda de un nuevo cliente de restaurante. Recuerde que la comanda de un cliente puede ser un menú predefinido o un menú personalizado con los platos que el cliente desee.

Para el funcionamiento de la clase Comanda, también necesitará hacer uso de Inquirer.js. En concreto, un cliente podrá:

Visualizar la carta del restaurante. Para cada menú y/o plato, el cliente querrá poder observar toda la información que tiene (precio, ingredientes, composición nutricional y grupos de alimentos).
Realizar una comanda. Un cliente podrá realizar una comanda a partir de un menú preestablecido o bien solicitando un menú personalizado. En caso de solicitar un menú personalizado, se deberá proporcionar la opción de visualizar la carta completa del restaurante, seleccionar cualquier plato del sistema y en la cantidad que el cliente considere oportuna (siempre de manera entera, no una ración y media por ejemplo). Por último, considere que un cliente puede solicitar un menú personalizado a partir de un menú existente. Por ejemplo, eliminando o añadiendo distintos platos al menú.

*Por último, tenemos la clase comanda, la cual la utilizamos para guardar los pedidos de los clientes*

*En esta clase utilizamos los siguientes atributos: en `menuCommand` el cual es un vector de menús, se guardan los menus pedidos o los nuevos menís creados a partir de los platos y en `menuCard` está la carta completa, con todos los platos y menús*

*Por ultimo, como únicos metodos tenemos el `constructor`, el cual va a separar los menús y crear los nuevos con los platos pedidos, y el `printCard()` el cual va a visualizar la carta completa, que es el atributo `menuCard` antes mencionado.*


## Explicación del código o implementación desarrollados

### Clase ingrediente/alimento

```
import {Document, Schema, model} from 'mongoose';

export interface IngredientInterface extends Document {
    name: string,
    origin: string,
    group: 'group1' | 'group2' | 'group3' | 'group4' | 'group5',
    lipids: number,
    carbohydrates: number,
    proteins: number,
    kcalories: number,
    price: number,
}

export const IngredientSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: (value: string) => {
            if (!value.match(/^[A-Z]/)) {
              throw new Error('Ingredient name must start with a capital letter');
            }
        },
    },
    origin: {
        type: String,
        required: true,
        trim: true,
    },
    group: {
        type: String,
        required: true,
        trim: true,
        default: 'group1',
        enum: ['group1', 'group2', 'group3', 'group4' ,'group5'],
    },
    lipids: {
        type: Number,
        required: true,
    },
    carbohydrates: {
        type: Number,
        required: true,
    },
    proteins: {
        type: Number,
        required: true,
    },
    kcalories: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

export const Ingredient = model<IngredientInterface>('Ingredient', IngredientSchema);

```

### Clase plato

```
```

### Clase menú

```
```

### Clase carta

```
```

### Clase comanda

```
```

## MongoDB y Monguss

```
```


