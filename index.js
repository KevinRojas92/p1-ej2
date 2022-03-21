'use stricty';

let sueldo = parseInt(+prompt('Ingrese el número de la categoría a la que pertenece - Ej 1, 2 ó 3')); 

switch (sueldo){
    case 1:
        sueldo = 1000;
        break;
    case 2:
        sueldo = 1500;
        break;
    case 3:
        sueldo = 2000;
        break;
}

let subCat = prompt('Indique a cual sub categoria pertenece - Ej A, B ó C');

switch (subCat.toLowerCase()){
    case 'a':
        subCat = 1.5;
        break;
    case 'b':
        subCat = 2;
        break;
    case 'c':
        subCat = 2.5;
        break;
}

let info = sueldo * subCat;

if (info >= 1500 && info <= 3000){
    alert('Su sueldo corresponde al RANGO INICIAL que está entre los u$s 1500 y los u$s 3000');
} else if (info > 3000 && info <= 4000){
    alert('Su sueldo corresponde al RANGO INTERMEDIO que está entre los u$s 3000 y los u$s 4000');
} else if (info > 4000){
    alert('Su sueldo corresponde al RANGO AVANZADO que supera los u$s 4000');
}