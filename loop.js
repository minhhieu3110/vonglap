function tinhtong(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let tong = 0;
    for(let i = a ;i <=b;i++){
        if(i%6 == 0){
            tong +=i;
        }
    }
    console.log(tong);
  document.getElementById('result').innerHTML = 'Tổng các số chia hết cho 6 từ '+a+" đến "+b+" là: "+tong;
}
function tich(){
    let a = parseFloat(document.getElementById('soa').value);
    let b = parseFloat(document.getElementById('sob').value);
    let tich =  1;
    for(let i = a ;i <=b;i++){
        if (i % 2 == 0 && i % 5 == 0){
            tich = tich * i;
        }
    }
    //console.log(tich);
    document.getElementById('kq').innerHTML = 'Tích các số chia hết cho 5 từ '+a+" đến "+b+" là: "+tich;
}
function soluong(){
    let a = parseFloat(document.getElementById('num_a').value);
    let b = parseFloat(document.getElementById('num_b').value);
    let sl = 0;
    for(let i = a ;i <=b;i++){
        if( i > 10 && i % 3 == 0){
            sl ++;
        }
    }
    document.getElementById('kqua').innerHTML = "Số lượng các số > 10 và chia hết cho 3 từ "  +a+" đến "+b+" là: "+sl
}