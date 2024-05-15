Consegna

Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

1) creo una lista spesa con un array (const shopList = [ 'Pane', 'Banana', 'Latte', 'Carote', 'Pollo', 'Acqua'];);
2) creo un contenitore ul (const ulElement = document.querySelector('ul'););
3) ho una condizione finchè l'elemnto è contenuto nella mia lista viene stampato nel mio contenitore:
   -pongo un indice = 0(let i = 0;);
   -creo un while con la condizione che il mio indice sia minore della lunghezza della mia lista spesa (while(i< shopList.length)):
      -al suo interno mi creo degli elementi 'li' ;
      -aggiungo questo elemnti alla mia lista spesa;
      -aggiungo come ultimo figlio i miei elementi al containe ul;
      -indice aumenta ad ogni elemento;
      ({const element = document.createElement('li');element.append(shopList[i]);ulElement.appendChild(element);i++;});
