var forms = document.getElementsByClassName("popup");

maBPs = document.getElementsByClassName("tf-mabp");
tenBPs = document.getElementsByClassName("tf-tenbp");
maLoaiTSs = document.getElementsByClassName("tf-maloaits");
tenLoaiTSs = document.getElementsByClassName("tf-tenloaits ");

for (let i = 0; i < forms.length; i++)
{   
    //gán mảng các giá trị trong list vào biến opts[]
    let opts = document.getElementsByTagName("li");
    for(let e = 0; e < opts.length; e++) { 
        opts[e].addEventListener("click", function(){ //khi click chọn một giá trị:
            //gán giá trị vừa chọn sang ô bên cạnh
            for(let i = 0; i < maBPs.length; i++){
                tenBPs[i].value = maBPs[i].getElementsByClassName("choosen-value")[0].innerHTML;
                tenLoaiTSs[i].value = maLoaiTSs[i].getElementsByClassName("choosen-value")[0].innerHTML;
            }
        });
    }
}

