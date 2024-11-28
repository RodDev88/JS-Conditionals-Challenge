MODULO 3 JAVASCRIPT

---

Clase 1 JS Intro variables

---

INDEX CLASE del profe ( no la del pdf de Desafío Latam)con fines orientativos

1. Historia
   - 1995 > X
   - Netscape 2
   - Mozilla
   - BUM
   - Timeline
2. Variables
   - Tipos de variables
   - Tipos de datos
     - Primitivos
3. Runtime

   - Chromium (https://www.chromium.org/chromium-projects/)

   * Node.js (https://nodejs.org/en/)
   * Deno (https://deno.com/)

4. Condiciones
   - If
   - If, else-if, else
   - Operadores comparación

---

Clase 2 Javascript Condiciones

---

Esquema para enfrentar un ejercicio, así lo ordeno el profe Francisco y creo que es muy útil para sortear la confusa redacción del desafío Latam

1. Agregar los elementos al HTML (input, botón y párrafo o span)
   HTML
   - <input id/>
   - <button onclick="validarPassword()">
   - <p>
2. Agregar evento al disparador (el botón)
   onclick = "validarPassword()"
3. Seleccionar el valor del input y guardarlo en una variable
   utilizamos document.querySelector()
4. Si se cumple la condicion
   a. Seleccionar el párrafo
   b. Modificar el contenido del parrafo (.innerHTML) mostrando "Lo lograste"

FROM CHAPGPT

    Diferencia entre if, else-if y else:

    En JavaScript, if evalúa una condición y ejecuta el bloque de código asociado si esta es verdadera. else-if se usa después de un if para agregar una segunda condición si la primera no se cumple. else, en cambio, no tiene una condición; simplemente ejecuta el bloque asociado si ninguna de las condiciones anteriores fue verdadera.

    El if y el else en JavaScript se utilizan para evaluar condiciones en términos de "sí" o "no" (verdadero o falso):

    if ejecuta su bloque de código cuando la condición es verdadera.
    else actúa como una alternativa: si ninguna de las condiciones if o else-if anteriores es verdadera, entonces el bloque de else se ejecutará.

    De este modo, if y else forman una estructura básica de decisión binaria.

      LABEL E INPUTS

         Los elementos `<label>` son opcionales, y puedes trabajar directamente con los `<input>` si no necesitas etiquetas visuales para ellos.

         Sin embargo, los `<label>` tienen algunas ventajas en términos de accesibilidad y experiencia de usuario:

         ### **Ventajas de usar `<label>`:**

         1. **Accesibilidad:**

            - Asociar un `<label>` con un `<input>` permite que los lectores de pantalla describan el propósito del campo.
            - Puedes hacer esto usando el atributo `for` en el `<label>` y el `id` correspondiente en el `<input>`:
            ```html
            <label for="checkbox1">Opción 1</label>
            <input type="checkbox" id="checkbox1" />
            ```

         2. **Área clicable más grande:**

            - Cuando usas `<label>` asociado, puedes hacer clic tanto en el texto como en el checkbox.

         3. **Mejor legibilidad del código:**
            - Proporciona una descripción clara de qué representa cada `<input>`.

      OPERADOR TERNARIO

         El operador ternario es una forma compacta de escribir una instrucción condicional if-else. Tiene la siguiente sintaxis:

         condición ? valor_si_verdadero : valor_si_falso;

         Es decir, evalúa la condición y si es true ejecuta el primer valor (después del ?), si es false ejecuta el segundo valor (después de los :).



         ###
          Uso del Operador `||` para Asignación de Valores por Defecto

            El operador `||` no solo se utiliza para operaciones lógicas (como en comparaciones booleanas), sino también para **asignar un valor por defecto** a una variable.

            Esto es muy útil cuando queremos que una variable tenga un valor predeterminado en caso de que el valor ingresado por el usuario sea vacío, `null`, `undefined` o cualquier valor que se considere "falsy" en JavaScript.

                  ### **Concepto Básico**

                  El operador `||` evalúa la expresión de la izquierda (el valor que ha ingresado el usuario) y, si es un valor considerado "falsy", pasa a la expresión de la derecha (el valor por defecto). Si la primera expresión no es "falsy", entonces la variable toma ese valor.

                  ### **Valores "falsy" en JavaScript:**
                  En JavaScript, los siguientes valores se consideran "falsy":
                  - `false`
                  - `0`
                  - `""` (cadena vacía)
                  - `null`
                  - `undefined`
                  - `NaN`

                  ### **Sintaxis:**
                  ```javascript
                  variable = valor_ingresado || valor_por_defecto;
                  ```

                  Si `valor_ingresado` es "falsy", entonces se asigna `valor_por_defecto`.

                  ### **Ejemplo 1: Valor por Defecto con `""` (Cadena Vacía)**

                  Imagina que quieres que el usuario ingrese su nombre, pero si no lo hace, se le asigna un nombre predeterminado.

                  ```javascript
                  let nombre = "" || "Juan";  // El valor ingresado está vacío
                  console.log(nombre);  // "Juan"
                  ```

                  **Explicación:** El valor ingresado es una cadena vacía `""`, que es "falsy". Entonces, la variable `nombre` toma el valor por defecto `"Juan"`.

                  ### **Ejemplo 2: Valor por Defecto con `null`**

                  Supón que tenemos una variable que puede ser `null`, y queremos darle un valor por defecto si no se ha asignado ningún valor.

                  ```javascript
                  let edad = null || 25;  // El valor es null
                  console.log(edad);  // 25
                  ```

                  **Explicación:** El valor de `edad` es `null`, que es "falsy", por lo tanto, `edad` recibe el valor por defecto `25`.

                  ### **Ejemplo 3: Uso con un Valor Válido**

                  Si el usuario ingresa un valor válido, el operador `||` lo mantiene, y no se asigna el valor por defecto.

                  ```javascript
                  let nombre = "Carlos" || "Juan";  // El valor ingresado no está vacío
                  console.log(nombre);  // "Carlos"
                  ```

                  **Explicación:** El valor ingresado es `"Carlos"`, que es "truthy" (un valor válido), por lo que `nombre` conserva el valor `"Carlos"` y no se le asigna `"Juan"`.

                  ### **¿Por qué se usa esto?**

                  Es una forma rápida de asegurarte de que una variable siempre tenga un valor válido, incluso si el usuario no proporciona uno. Es una forma más concisa y limpia de escribir condiciones que, de otra manera, requerirían un bloque `if` más largo.

                  ### **Resumen:**

                  - El operador `||` selecciona el **primer valor "truthy"** entre dos expresiones.
                  - Si la primera expresión es "falsy", se toma el valor por defecto (segunda expresión).
                  - Es útil para asignar valores predeterminados de manera sencilla, sin tener que usar un bloque `if`.

                  ### **Alternativa con `if`:**
                  El mismo ejemplo con un `if` sería más largo:

                  ```javascript
                  let nombre;
                  if (nombre === "" || nombre === null || nombre === undefined) {
                     nombre = "Juan";
                  }
                  console.log(nombre);  // "Juan"
                  ```

                  Como ves, el operador `||` simplifica mucho ese proceso.


               ¡Con gusto! Los términos **"falsy"** y **"truthy"** se refieren a cómo JavaScript evalúa ciertos valores cuando se los utiliza en contextos booleanos, como en una condición `if`.


               FALSY && TRUTHY


               ### **¿Qué es un valor "truthy"?**

               Un **valor "truthy"** es cualquier valor que, cuando se evalúa en un contexto booleano (como dentro de un `if`), se considera como `true`. Es decir, cualquier valor que **no** sea "falsy".

               **Ejemplos de valores "truthy":**
               - Cualquier número que no sea 0 (como `1`, `-1`, `100`)
               - Cualquier cadena de texto que no sea vacía (como `"hola"`, `" "`, `"0"`)
               - Objetos (como `{}`, `[]`)
               - `true`
               - Funciones (como `function() {}`)

               #### **Ejemplo:**
               ```javascript
               let valor = "Hola";  // Cadena no vacía (truthy)
               if (valor) {
                  console.log("Es truthy");
               } else {
                  console.log("Es falsy");
               }
               // "Es truthy"
               ```

               En este caso, `"Hola"` es una cadena no vacía, por lo tanto es **truthy** y entra en el bloque `if`.

               ### **¿Qué es un valor "falsy"?**

               Un **valor "falsy"** es cualquier valor que, cuando se evalúa en un contexto booleano (como dentro de un `if`), se considera como `false`. Es decir, cualquier valor que sea **falsy** se tratará como `false` en una condición.

               **Valores "falsy" en JavaScript:**
               1. **`false`**: El valor booleano `false`.
               2. **`0`**: El número cero.
               3. **`""` (cadena vacía)**: Una cadena vacía.
               4. **`null`**: Un valor nulo.
               5. **`undefined`**: Una variable que no ha sido definida.
               6. **`NaN`**: "Not a Number" (un valor no numérico que resulta de operaciones inválidas).

               #### **Ejemplo:**
               ```javascript
               let valor = 0;  // El número 0 es falsy
               if (valor) {
                  console.log("Es truthy");
               } else {
                  console.log("Es falsy");
               }
               // "Es falsy"
               ```

               En este caso, `0` es un valor **falsy** y entra en el bloque `else`.

               ### **Resumen de valores "falsy" y "truthy"**

               #### **Valores "falsy":**
               - `false`
               - `0`
               - `""` (cadena vacía)
               - `null`
               - `undefined`
               - `NaN`

               #### **Valores "truthy"** (todos los demás valores):
               - Cualquier número distinto de `0` (como `1`, `-1`, `100`)
               - Cualquier cadena que no esté vacía (como `"texto"`)
               - Objetos y arrays (como `{}` y `[]`)
               - Funciones
               - `true`

               ### **¿Por qué es útil saberlo?**

               Conocer los valores "falsy" y "truthy" es muy útil para trabajar con condicionales y asignación de valores en JavaScript. Por ejemplo, cuando usas el operador `||` (OR lógico), como ya vimos, el operador selecciona el primer valor **truthy**. Esto permite escribir código más compacto y eficiente sin tener que hacer verificaciones explícitas.

               ### **Ejemplo con `||`:**
               ```javascript
               let nombre = "" || "Juan";
               console.log(nombre);  // "Juan"
               ```
               Aquí, `""` es **falsy**, por lo que se toma `"Juan"`, que es **truthy**.

---

SHORCUTS

---

Comentario bloque = shift + option + A

Backticks = `` = en Mac = cmd + ^(sombrerito)

---

RECURSOS

---

Del curso de CSS Udemy

1. del profe https://codingheroes.io/resources/
2. HTML validator https://validator.w3.org/
3. Diffchecker https://www.diffchecker.com/ (para comparar códigos, p.e. el del profe y el mío)

---

GLOSARIO

---

Diferencia entre lenguaje interpretado y lenguaje compilado

    Un lenguaje interpretado ejecuta el código línea por línea a través de un intérprete en tiempo real, lo que permite una mayor flexibilidad pero generalmente hace que la ejecución sea más lenta. Un lenguaje compilado, en cambio, convierte el código completo en un archivo ejecutable mediante un compilador antes de su ejecución, lo que suele mejorar el rendimiento pero requiere recompilar cada vez que se hacen cambios.

    Ejemplo lenguaje interpretado: JS

        JavaScript es un ejemplo de un lenguaje interpretado, ya que su código se ejecuta en un entorno que lo interpreta, como el navegador o Node.js, donde es procesado línea por línea en tiempo de ejecución.

    Ejemplo lenguaje compilado: C++

        C++, por otro lado, es un lenguaje compilado. El código C++ debe ser compilado por un compilador (como GCC o Clang) antes de poder ejecutarse, lo que convierte el código fuente en un archivo binario ejecutable que la máquina puede correr directamente.

Lógica de negocios

    La lógica de negocios es el conjunto de reglas y procesos que definen cómo opera una aplicación o sistema para cumplir los objetivos específicos de una organización o negocio. Incluye la toma de decisiones, el procesamiento de datos y las operaciones que traducen los requisitos de negocio en funciones que la aplicación ejecuta, separando las reglas del negocio de otros aspectos técnicos de la aplicación.

Runtime JS:

    Un runtime de JavaScript es el entorno donde se ejecuta el código JavaScript. Este entorno contiene elementos clave como el motor de ejecución (por ejemplo, V8 en Chrome) y APIs que permiten al código interactuar con el sistema (por ejemplo, para acceder a la red o al sistema de archivos). Los runtimes, como Node.js para entornos de servidor, extienden las capacidades de JavaScript más allá del navegador.
