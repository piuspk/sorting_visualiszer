const quickSort = ({ array, setArray, setColorChangeIndex }) => {
    const len = array.length;
    let auxArray = [...array];
  //   console.log("orignal array",auxArray);
    let arrays = [];
    let indexes = [];
    // for (let i = 0; i < len-1; i++) {
    //   for (let j = 0; j < len-i-1; j++) {
    //     if (auxArray[j] > auxArray[j+1]) {
    //       temp = auxArray[j];
    //       auxArray[j] = auxArray[j+1];
    //       auxArray[j+1] = temp;
        //   arrays.push([...auxArray]);
        //   indexes.push([j,j+1]);
    //     }
    //   }
    // }
    function partition(arr, start, end){
        // Taking the last element as the pivot
        const pivotValue = arr[end];
        let pivotIndex = start; 
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            arrays.push([...arr]);
            indexes.push([i,pivotIndex]);
            pivotIndex++;
            }
        }
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
        arrays.push([...arr]);
        indexes.push([end,pivotIndex]);
        return pivotIndex;
    }

    function quickSortRecursive(arr, start, end) {
        // Base case or terminating case
        if (start >= end) {
            return;
        }
        let index = partition(arr, start, end);
        // Recursively apply the same logic to the left and right subarrays
        quickSortRecursive(arr, start, index - 1);
        quickSortRecursive(arr, index + 1, end);
    }

    quickSortRecursive(auxArray, 0, len-1);
    for (let index = 0; index < arrays.length; index++) {
      setTimeout(() => {
        setArray(arrays[index]);
        setColorChangeIndex([...indexes[index]])
      }, (index * 3000)/(len));
    }
    setTimeout(() => {
      setColorChangeIndex([])
    }, (arrays.length * 3000)/(len));
    return arrays;
};
export default quickSort;
  

