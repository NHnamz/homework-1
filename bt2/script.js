//2
function SNT(n)
{
    var flag = true;
 
    if (n < 2){
        flag = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }

    if (flag == true){
        return true;
    }
    else{
        return false;
    }
}

const btn = document.getElementById("btn")
btn.addEventListener('click',function(){
    let array = [];
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
      a = parseFloat(a)
      b = parseFloat(b)
    if( a<0 || a>b){
        document.getElementById("kq").innerHTML = "lỗi: a < 0 hoặc a > b"
    }if(a<2 && b<2){
        document.getElementById("kq").innerHTML = "Không có số nguyên tố nào trong khoảng"
    }else {
        for(let i=a; i<=b; i++){
            if(SNT(i)==true){
                array.push(i);
            }
        }
        document.getElementById('kq').innerHTML = "Các số nguyên tố là : " +array.join(" ");
    }
})