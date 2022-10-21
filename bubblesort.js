let array = [2, 17, 7, 12, 1, 9, 8, 25, 5, 27];

bubbleSort(array)

function bubbleSort (array) {
    for ( let n = 0; n < array.length; n++) {
        for ( let i = 0; i < array.length - 1 - n; i++) {
            if ( array[i] > array[ i + 1 ]) {
                const swap = array[i];
                array[i] = array[ i + 1 ];
                array[ i + 1 ] = swap;
            }
        }
    }
    return array
}

console.log(bubbleSort(array))

// порівнюємо 1 і 2 число масиву, більше зсуваємо вправо. так попарно порівнюємо весь масив.
// після першого проходу масиву останнім числом стає найбільше число масиву.
// після кожного наступного проходу +1 число відсортоване
// array.length - 1 - n сортуємо тільки ті числа, які ще не відсортовані після попереднього проходу
// к-сть проходів масиву n - кількість елементів в масиві