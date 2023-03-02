/**
 * ấn nút ẩn hiện navigation mở rộng
 * author: Trần Xuân Duy
 * date: 1/3/2023
 */
function showNavDetail(){
    try {
        let nav = document.getElementById("navigation");
        let navDetail = document.getElementById("navigation-m");
        //gán sự kiện cho footer khi bấm ẩn hiện menu
        document.getElementsByClassName("nav-footer")[0].addEventListener("click", function(){
            nav.style.display = "none";
            navDetail.style.display = "block";
        });
        document.getElementById("nav-btn-collapse").addEventListener("click", function(){
            nav.style.display = "block";
            navDetail.style.display = "none";
        })
    } catch (error) {
        console.log(error);
    }
}

//ấn nút add hiện form điền thông tin
document.getElementById("btnAddItem").addEventListener("click",function(){
    document.getElementById("addItemForm").style.display = "block";
    document.getElementById("tf-mats").focus();
});
/**
 * nút close form
 * author: Trần Xuân Duy
 * date: 1/3/2023
 */
var btnsClose = document.getElementsByClassName("btn-close");
for (let i = 0; i < btnsClose.length; i++) {
    const element = btnsClose[i];
    element.addEventListener("click", function(){
        document.getElementById("addItemForm").style.display  = "none";
        document.getElementById("updateItemForm").style.display  = "none";
    })
}



/**
 * Close warning
 * author: Trần Xuân Duy
 * date: 1/3/2023
 */
function closeWarning(){
    try {
        warningContainer.style.display = "none";
    } catch (error) {
        console.log(error);
    }
}


