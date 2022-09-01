
var searchMatrix = function(matrix, target) {
    
    let l1 = 0;
    
    let row = matrix.length;
    let col = matrix[0].length;
    let r1 = row * col - 1;
    while(l1 <= r1 ){
        let mid = Math.floor(l1 + (r1 - l1));
        let midVal = matrix[Math.floor(r1/col)][r1%col]
        if(midVal === target) return true;
        if(target < midVal) r1 = mid - 1
        else l1 = mid + 1;
    }
    return false 
    
};