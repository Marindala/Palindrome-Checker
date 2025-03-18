Hello World!</

Crea un verificador de palíndromos
Un palíndromo es una palabra o frase que se lee igual de adelante hacia atrás,
sin importar la puntuación, las mayúsculas y minúsculas, ni el espaciado.

Nota: Para comprobar si hay palíndromos, debes eliminar todos los caracteres
no alfanuméricos (puntuación, espacios y símbolos) y convertir todo a mayúsculas o minúsculas.

Objetivo: Crear una aplicación funcionalmente similar a 
https://palindrome-checker.freecodecamp.rocks.

Historias de usuario:

Debes tener un elemento de entrada con el ID "text-input".
Debes tener un elemento de botón con el ID "check-btn".
Debes tener un elemento div, span o p con el ID "result".
Al hacer clic en el elemento #check-btn sin introducir un valor en el
 elemento #text-input, debería aparecer una alerta con el texto
 "Por favor, introduce un valor". 
Cuando el elemento #text-input solo contiene la letra A y 
se hace clic en el elemento #check-btn, 
el elemento #result debe contener el texto "A es un palíndromo".
Cuando el elemento #text-input contiene el texto "ojo"
 y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "ojo es un palíndromo".
Cuando el elemento #text-input contiene el texto "_ojo" y 
se hace clic en el elemento #check-btn, el elemento
 #result debe contener el texto "_ojo es un palíndromo".
Cuando el elemento #text-input contiene el texto "coche de carreras" y 
se hace clic en el elemento #check-btn, el elemento #result 
debe contener el texto "coche de carreras es un palíndromo".
Cuando el elemento #text-input contiene el texto "no es un palíndromo" y
 se hace clic en el elemento #check-btn, el elemento #result 
debe contener el texto "no ...coche de carreras" y 
se hace clic en el elemento #check-btn, el elemento #result debe 
contener el texto "no es un palíndromo".
10. Cuando el elemento #text-input contiene el texto "Un hombre, un plan, un canal. Panamá" y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto "Un hombre, un plan, un canal. Panamá" es un palíndromo.

En espera: 11. Cuando el elemento #text-input contiene el texto "nunca impar ni par" y 
se hace clic en el elemento #check-btn, el elemento #result debe contener el texto 
"nunca impar ni par es un palíndromo".

En espera: 12. Cuando el elemento #text-input contiene el texto "nope" y 
se hace clic en el elemento #check-btn, el elemento #result debe contener el texto 
"nope no es un palíndromo".

En espera: 13. Cuando el elemento #text-input contiene el texto "casiomla" y 
se hace clic en el elemento #check-btn, el elemento #result debe contener el texto 
"casiomla no es un palíndromo".

En espera: 14. Cuando el elemento #text-input contiene el texto "Mi edad es 0, 0 si ega ym." y
 se hace clic en el elemento #check-btn, el elemento #result debe contener el texto 
"Mi edad es 0, 0 si ega ym." es un palíndromo.

Esperando: 15. Cuando el elemento #text-input contiene el texto "1 ojo para de 1 ojo." y
 se hace clic en el elemento #check-btn, el elemento #result debe contener el texto 
"1 ojo para de 1 ojo." no es un palíndromo.
16. Cuando el elemento #text-input contiene el texto 0_0 (: /-\ :) 0-0 y se hace clic en el elemento #check-btn, el elemento #result debe contener el texto 0_0 (: /-\ :) 0-0 es un palíndromo.

Esperando: 17. Cuando el elemento #text-input contiene el texto five|\_/|four y
 se hace clic en el elemento #check-btn, el elemento #result debe contener
 el texto five|\_/|four no es un palíndromo.

Esperando: 18. Cuando el elemento #text-input contiene un palíndromo alfanumérico, 
el elemento #result debe identificarlo correctamente como tal.

Esperando: 19. Cuando el elemento #text-input contiene una secuencia aleatoria
 de caracteres alfanuméricos que no es un palíndromo, el elemento #result
 debe indicar que no es un palíndromo.