//Consegna

//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

//1) creo una lista spesa con un array 

   const shoppingList = [
     'Pane',
     'Banana',
     'Latte',
     'Carote',
     'Pollo',
     'Acqua'
    ];


//2) creo un contenitore ul 

    const ulElement = document.querySelector('ul');

//3) ho una condizione finchè l'elemnto è contenuto nella mia lista viene stampato nel mio contenitore:
     //-pongo un indice = 0
     let i = 0;

     //-creo un while con la condizione che il mio indice sia minore della lunghezza della mia lista spesa 
     while(i< shoppingList.length){

        //-al suo interno mi creo degli elementi 'li' ;
        const element = document.createElement('li');

        //-aggiungo questo elemnti alla mia lista spesa;

        element.append(shoppingList[i]);

        //-aggiungo un nodo come ultimo figlio ad un nodo genitore che in questo caso è ul;

        ulElement.appendChild(element);

        //-indice aumenta ad ogni elemento;

        i++;

     }
   
   
   
   
 