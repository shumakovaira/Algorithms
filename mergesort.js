let array = [2, 17, 7, 12, 1, 9, 8, 25, 5, 27];

function merge(leftArray, rightArray) {
    let array = []
    while (leftArray.length && rightArray.length) {
       if (leftArray[0] < rightArray[0]) {
          array.push(leftArray.shift())
       } else {
          array.push(rightArray.shift())
       }
    }
    return [ ...array, ...leftArray, ...rightArray ]
 }
 function mergeSort(array) {
    const midIndex = array.length / 2
    if(array.length < 2) {
       return array
    }
    const leftPart = array.splice(0, midIndex)
    return merge(mergeSort(leftPart),mergeSort(array))
 }

 console.log(mergeSort(array))

 // Знаходимо середину масиву. Розділяємо по ній масив на правий і лівий масиви
 // Праву і ліву частину ділимо навпіл знову. Поки частина не стане неподільною.
 // Починаємо порівнювати і об'єднувати сусідні елементи (менші - зліва, більний справа) в масиви (2 елементи)
 // Елементи сусідніх масивів знову порівнюємо зліва - направо і додаємо їх в новий масив в порядку зростання
 // Об'єднуємо до тих пір, поки не отримаємо один відсотрований масив. 