//Binary Search
const arr = ['a', 'b', 'c', 'd', 'x', 'y', 'z'];

function findMe(target, start, end) {

    if (start > end) {
        return 'Not Found';
    }

    const middle = Math.floor( (start + end) / 2);

    if(arr[middle] === target) {
        return `Found it at index ${middle}`;
    }

    if(arr[middle] > target) {
        return findMe(target, start, middle-1);
    }
    if(arr[middle] < target) {
        return findMe(target, middle+1, end);
    }
}