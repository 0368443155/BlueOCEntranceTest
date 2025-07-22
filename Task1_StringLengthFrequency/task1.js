function strFreq(arr){
    if (arr.length === 0){
        return null; //cần ít nhất 1 chuỗi
    }
    const lengthCount = {};
    // duyệt qua từng chuỗi trong mảng
    for (const str of arr){
        const len = str.length; // lấy ra độ dài chuỗi

        // nếu độ dài chưa có trong lengthCount, khởi tạo nó
        // nếu đã có, tăng giá trị của nó lên 1
        lengthCount[len] = (lengthCount[len] || 0) + 1; 
        // lengthCount sẽ có kiểu là {'1': 2, '2': 3, '3': 1} 
    }
    
    const maxFreq = Math.max(...Object.values(lengthCount)); 
    // lengthCount có kiểu là Obj, lần lượt lấy ra các giá trị
    // sử dụng spread operator để trải ra thành các giá trị riêng lẻ
    // dùng hàm max để lấy ra giá trị lớn nhất

    const mostCom = Object.keys(lengthCount) // lấy ra các keys của lengthCount -> ['1', '2', '3']
    .filter(len => lengthCount[len] === maxFreq) // lấy ra key mà tại đó số lần xuất hiện bằng maxFreq, ví dụ: maxFreq = 3, lengthCount = {'1': 2, '2': 3, '3': 1} thì sẽ trả về ['2']
    .map(Number); //sử dụng map chuyển các keys từ string sang number
    //mostcom sẽ có kiểu là [2] hoặc [3,5] nếu có nhiều độ dài chuỗi xuất hiện cùng số lần

    return arr.filter(str => mostCom.includes(str.length));
    //lọc ra các chuỗi có độ dài nằm trong mostCom
}

console.log(strFreq(['a', 'ab', 'abc', 'cd', 'def', 'gh']));
// Output: ['ab', 'cd', 'gh']

console.log(strFreq(['hello', 'world', 'hi', 'cat', 'dog']));
// Output: ['cat', 'dog'] (độ dài 3 xuất hiện 3 lần)

console.log(strFreq(['one', 'two', 'three', 'four']));
// Output: ['one', 'two'] (độ dài 3 xuất hiện 2 lần)