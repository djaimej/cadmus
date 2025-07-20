---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Complejidad Algorítmica'
pubDate: 13/05/2025
description: 'Análisis asintótico, recurrencias y ejemplos de cálculo de complejidad.'
author: 'Diego Jaime'
image:
    url: '/images/big-o.png'
    alt: 'Nature'
tags: ["algoritmo", "estudio", "computación", "ciencias"]
---
<br>

La **complejidad algorítmica** es una rama fundamental de la informática que estudia el rendimiento de los algoritmos en términos de tiempo y espacio. Su objetivo es determinar cómo escala un algoritmo conforme aumenta el tamaño de entrada (*n*), permitiendo comparar la eficiencia de diferentes soluciones.

## **1. Análisis Asintótico y Notación O( )**
El análisis asintótico permite describir el comportamiento de un algoritmo cuando el tamaño de entrada (**n**) tiende a infinito. Se utilizan notaciones matemáticas para expresar cotas superiores, inferiores y ajustadas.

### **Notaciones Principales**

1.  **O (Big-O)**: Cota superior asintótica.
    
    -   _Definición_:  $f(n)=O(g(n))$  si existen constantes $c>0$ y $n_0$  tales que  $0≤f(n)≤c⋅g(n)$  para todo  $n≥n_0$.
    
    -   _Ejemplo_:  $3n^2+2n+1=O(n^2)$.
<br>
        
2.  **Ω (Big-Omega)**: Cota inferior asintótica.

    -   _Definición_:  $f(n)=Ω(g(n))$  si existen constantes  $c>0$ y  $n_0$​  tales que  $0≤c⋅g(n)≤f(n)$  para todo  $n≥n_0$​.
        
    -   _Ejemplo_:  $n3=Ω(n^2)$.
<br>
        
3.  **Θ (Big-Theta)**: Cota ajustada.

    -   _Definición_:  $f(n)=Θ(g(n))$  si  $f(n)=O(g(n))$  y  $f(n)=Ω(g(n))$.
        
    -   _Ejemplo_:  $2n^2+3n+1=Θ(n^2)$.
<br>
  
  ### **Aplicaciones**

-   Comparar algoritmos (ej: ordenamiento por burbuja  $O(n^2)$  vs. quicksort  $O(n\log{⁡n})$.
    
-   Optimizar código en sistemas críticos (ej: algoritmos en tiempo real).

### **Teorema Maestro (Master Theorem)**

Permite resolver recurrencias del tipo:
$T(n)=aT(\frac{n}{b})+f(n)$

donde  $a≥1$,  $b>1$, y  $f(n)$  es asintóticamente positiva.

<br>

----------

## **2. Recurrencias**

Las  **relaciones de recurrencia**  describen funciones definidas en términos de valores anteriores. Son fundamentales para analizar algoritmos recursivos.

### **Métodos de Resolución**

1.  **Sustitución**:

    -   Adivinar una solución y probarla por inducción.
        
    -   _Ejemplo_:  $T(n)=2T(n/2)+n$  tiene solución  $T(n)=O(n\log{⁡n})$.
<br>

2.  **Árbol de Recurrencia**:

    -   Descomponer la recurrencia en niveles y sumar el trabajo en cada uno.
        
    -   _Ejemplo_: Para  $T(n)=T(n/3)+T(2n/3)+n$, el costo total es  $O(n\log⁡{n})$.
<br>

3.  **Teorema Maestro**:

    -   Aplicable a recurrencias dividir-y-conquistar.
        
    -   _Ejemplo_:  $T(n)=3T(n/4)+n^2$  cae en el caso 3 del teorema:  $T(n)=Θ(n^2)$.
<br>        


### **Ejemplo Clásico: Merge Sort**

La recurrencia es:

$T(n)=2T(\frac{n}{2})+O(n)$

Solución:  $T(n)=O(n\log⁡{n})$.

<br>

----------

## **3. Ejemplos de Cálculo de Complejidad**

### **Algoritmos Iterativos**

1.  **Búsqueda Lineal**
    
    -   Complejidad:  $O(n)$  (peor caso).
        
    -   _Ejemplo_: Buscar un elemento en un arreglo no ordenado.<br><br>
        
2.  **Búsqueda Binaria**
    
    -   Complejidad:  $O(\log{n})$.
        
    -   _Ejemplo_: Buscar en un arreglo ordenado.<br><br>
        

### **Algoritmos Recursivos**

1.  **Fibonacci Naive**
    
    -   Recurrencia:  $T(n)=T(n−1)+T(n−2)+O(1)$.
        
    -   Complejidad:  $O(2n)$  (ineficiente).<br><br>
        
2.  **Fibonacci con Programación Dinámica**
    
    -   Complejidad:  $O(n)$  (almacenando resultados previos).<br>

### **Algoritmos de Ordenamiento**

| Algoritmo | Mejor Caso | Caso Promedio | Peor Caso |
|--|--|--|--|
| Bubble Sort | O($n$) | O($n$) | O($n^2$) |
| QuickSort | O($n\log{n}$) | O($n\log{n}$) | O($n^2$) |
| Merge Sort | O($n\log{n}$) | O($n\log{n}$) | O($n\log{n}$) |

<br>

----------

## **Fuentes de Información**

1.  **Libros Clásicos**:

    _Introduction to Algorithms_  (Cormen, Leiserson, Rivest, Stein).<br>
    _The Art of Computer Programming_  (Donald Knuth).
        
2.  **Recursos Online**:

    MIT OpenCourseWare (Algorithms Course).<br>
    Khan Academy (Complexity Theory).
        
3.  **Herramientas**:

    Visualizadores de complejidad (Big-O Cheat Sheet).

<br>

----------

## **Conclusión**

El estudio de la complejidad algorítmica permite diseñar soluciones eficientes y predecir su comportamiento en escenarios reales. Dominar el análisis asintótico, las recurrencias y los métodos de cálculo es esencial para cualquier programador o científico de datos.
