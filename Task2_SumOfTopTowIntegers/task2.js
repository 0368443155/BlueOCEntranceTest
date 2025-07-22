function sum(arr){
    if (arr.length < 2){
        return null; // cần ít nhất phần tử của mảng
    }

    //khai báo 2 phần tử
    let max1= -Infinity; 
    let max2= -Infinity; 

    //duyệt mảng
    for (let num of arr){
        // tìm 2 phần tử lớn nhất
        // nếu phần tử lớn hơn max1 thì cập nhật max1 và max2
        // nếu phần tử lớn hơn max2 thì cập nhật max2
        if (num > max1){
            max2 = max1; 
            max1 = num; 
        }
        // nếu phần tử lớn hơn max2 nhưng không lớn hơn max1 thì cập nhật max2
        else if (num > max2){
            max2 = num;
        }
    }
    return max1 + max2; // trả về kết quả cần tìm 
}
console.log(sum([1, 4, 2, 3, 5]));       
console.log(sum([-1, -4, -2, -3, -5]));      
console.log(sum([1]));                 
console.log(sum([5, 5, 5]));            
console.log(sum([0, 100, 50, 200]));    

