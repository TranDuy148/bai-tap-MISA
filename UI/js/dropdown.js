// var dropdowns = document.getElementsByClassName("dropdown");
// for (let i = 0; i < dropdowns.length; i++)
// {   
//     //ấn vào thanh dropdown sẽ ẩn hoặc hiện list
//     dropdowns[i].addEventListener("click", function(){
//         if(dropdowns[i].getElementsByTagName("ul")[0].style.display == "block"){
//             dropdowns[i].getElementsByTagName("ul")[0].style.display = "none";
//         }
//         else dropdowns[i].getElementsByTagName("ul")[0].style.display = "block";
//     });
    
//     //gán mảng các giá trị trong list vào biến opts[]
//     let opts = dropdowns[i].getElementsByTagName("li");
//     for(let e = 0; e < opts.length; e++) { 
//         opts[e].addEventListener("click", function(){ //khi click chọn một giá trị:
//             //hiển thị giá trị vừa chọn
//             dropdowns[i].getElementsByClassName("choosen-value")[0].innerHTML = this.innerHTML;
//             //xóa màu tất cả các value trong list
//             for(var j = 0; j < opts.length; j++){
//                 opts[j].style.backgroundColor = "#fff";
//             }
//             //đổi màu xanh cho value vừa chọn
//             this.style.backgroundColor = "#c7e0f5";
//             //ẩn list -- đang lỗi 
//             // dropdowns[i].getElementsByClassName("option-list")[0].style.display = "none";
//             // console.log(dropdowns[i].getElementsByClassName("option-list")[0].style.display);
//         });
//     }
// }

// class ComboBox{
//     Data;
//     constructor(){
//         this.loadData();
//     }

//     loadData(){

//     }
//     //buil element combobox
//     builComboboxHTML(){

//     }
//     //sự kiện chọn 1 item khi click chuột vào item
//     itemOnClick(){

//     }
//     //sự kiện nhấn vào button trong combobox thì hiển thị danh sách các item 
//     buttonOnClick(){

//     }
//     //bắt các phím lên xuống, ENTER, TAB để thực hiện lựa chọn item thay cho việc sử dụng click
//     inputOnKeyDown(){

//     }
// }

