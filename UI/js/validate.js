window.onload = function(){
    new PropertyPage();
    createEvents();
    showUpdateForm();
    showNavDetail();
    onTime();
}

updateForm = document.getElementById("updateItemForm");
haoMonNam = document.getElementById("tf-haomonnam");
nguyenGia = document.getElementById("tf-nguyengia");
tiLeHaoMon = document.getElementById("tf-tilehaomon");

class PropertyPage{
    Data;
    constructor(){
        this.loadData();
        this.intEvents();
    }
    // load dữ liệu cho table
    loadData(){
        try {
            //gọi api lấy dữ liệu
            fetch("https://apidemo.laptrinhweb.edu.vn/api/v1/Employees")
            .then(res => res.json())
            .then(data =>{
                this.Data = data;
                //tạo table
                this.builDataTable();
            })
        } catch (error) {
            console.log(error);
        }
    }

    //tạo table
    builDataTable(){
        try {
            let table = document.getElementById("tbPropertyList");
            let bodyTable = table.getElementsByTagName("tbody")[0];
            //Duyệt các tiêu đề của table
            let thList = table.getElementsByTagName("th");
            let stt = 0;
            //Duyệt các đối tượng trong danh sách, lấy ra thông tin tương ứng và build row
            for (const item of this.Data) {
                let trElement = document.createElement("tr");
                stt++;
                for (const col of thList) {
                    //lấy ra type
                    const type = col.getAttribute("type");
                    //tạo checkbox
                    if(type == "checkBox"){
                        let tdCheckBox = document.createElement("td");
                        let checkElement = document.createElement("input");
                        checkElement.setAttribute("type", "checkbox");
                        checkElement.classList.add("checkbox");
                        tdCheckBox.classList.add("text-align-center");
                        tdCheckBox.append(checkElement);
                        trElement.append(tdCheckBox);
                    }else if(type == "stt"){
                        //tạo số thứ tự tự động tăng
                        let tdSTT = document.createElement("td");
                        tdSTT.classList.add("text-align-center");
                        tdSTT.textContent = stt;
                        trElement.append(tdSTT);
                    }
                    else if(type == "btnFunction"){
                        //tạo nút function
                        let tdBtn = document.createElement("td");
                        tdBtn.classList.add("col11");
                        let btnElement1 = document.createElement("div");
                        let btnElement2 = document.createElement("div");

                        btnElement1.classList.add("icon", "update-icon");
                        btnElement2.classList.add("icon", "detail-icon");

                        tdBtn.append(btnElement1);
                        tdBtn.append(btnElement2);

                        trElement.append(tdBtn);



                    }
                    else{
                        
                        //lấy ra name từng cột
                        const colName = col.getAttribute("col-name");
                        const value = item[colName];
                        let tdElement = document.createElement("td");
                        //align left
                        if((colName == "EmployeeCode") || (colName == "FullName") || (colName == "PositionName") || (colName == "DepartmentName")){
                            tdElement.classList.add("text-align-left");
                        }
                        //align right
                        else if((colName == "WorkStatus") || (colName == "PhoneNumber") || (colName == "Salary") || (colName == "PersonalTaxCode")){
                            tdElement.classList.add("text-align-right");
                        }
                        if((colName == "PhoneNumber") || (colName == "Salary") || (colName == "PersonalTaxCode")){
                            const VND = new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            });
                            const moneyFormated = VND.format(value);
                            tdElement.textContent = moneyFormated.substring(0, moneyFormated.length - 2);
                        }
                        else{
                            tdElement.textContent = value;
                        }
                        trElement.append(tdElement);
                    }

                    
                }
                bodyTable.append(trElement);
            }

            //tạo từ dòng dữ liệu sau đó đẩy lên table
            //duyệt từng đối tượng, lấy ra các thông tin cần thiết
            // for (const item of this.Data) {
            //     const propertyCode = item.EmployeeCode;
            //     const propertyName = item.FullName;
            //     const propertyType = item.PositionName;
            //     const propertyDepartment = item.DepartmentName;
            //     const propertyQuantity = item.WorkStatus;
            //     const propertyPrice = item.PhoneNumber;
            //     const propertyAtrophy = item.Salary;
            //     const propertyResidualValue = item.PersonalTaxCode;
            //     //buidl từng dòng dòng html thể hiện thông tin
            //     let trEle = document.createElement("tr");
            //     let tdPropertyCode = document.createElement("td");
            //     tdPropertyCode.classList.add("col3");
            //     tdPropertyCode.textContent = propertyCode;

            //     let tdPropertyName = document.createElement("td");
            //     tdPropertyName.classList.add("col3");
            //     tdPropertyName.textContent = propertyName;
            //     //đẩy vào table html đã tạo

            // }
            //buidl html thể hiện thông tin
            //đẩy vào html đã tạo
        } catch (error) {
            console.log(error);
        }
    }
    intEvents(){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    formatCash(str) {
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
   }
}

//hiển thị form sửa thông tin
function showUpdateForm(){

    var btnsUpdate = document.getElementsByClassName("update-icon");
    for (var i = 0; i < btnsUpdate.length; i++)
    {
        btnsUpdate[i].addEventListener("click", function(){
            document.getElementById("updateItemForm").style.display  = "block";
        })
    }
}

//validate  
function createEvents(){
    try {
        //event khi input -> blur
        document.querySelectorAll(".input-required").forEach(function(el){
            el.addEventListener("blur", onValidateEmpty); 
        });
        document.getElementById("check-top").addEventListener("click", onCheck);
        //khi click vào 1 dòng
        // document.querySelectorAll("#tbPropertyList tr td:not(.col11)").forEach(function(e){
        //     console.log(e);
        //     e.addEventListener("click", onClickRow);
        // })
        //khi hao mòn năm thay đổi
        haoMonNam.addEventListener("input", onHaoMonNamChange);
        //khi tỉ lệ hao mòn thay đổi
        tiLeHaoMon.addEventListener("input", onTiLeHaoMonChange);
        //khi nguyeen giá thay đổi
        nguyenGia.addEventListener("input", onNguyenGiaChange);
        //khi ấn nút lưu 
        document.getElementById("saveBtn").addEventListener("click", kiemTraDuLieuHopLe);
        //ấn nút close warning
        document.querySelector("#war-sub-btn").addEventListener("click", closeWarning);
        

    } catch (error) {
        console.log(error);
    }
}

//validate dữ liệu trống
function onValidateEmpty(){
    try {
        //lấy ra data trong input vừa nhập
        let input = this;
        const value = this.value;
        let elErrorMess = this.nextElementSibling;

        //kiểm tra có trống không
        if(value == "" || value == null || value == undefined || value == 0){
            //nếu trống thì hiển thị thông báo và border -> red
            console.log("loi");
            input.classList.add("input-error");
            //hiển thị thông tin lỗi
            let elError = document.createElement("div");
            elError.classList.add("error-mess");
            elError.textContent = "Trường này không được phép trống";
            //kiểm tra xem đã có error mess chưa
            let elErrorExits = this.nextElementSibling;
            if(!elErrorExits){
                this.parentElement.append(elError);
            }
        }
        else{
            console.log("ok");
            //nếu có dữ liệu thì xóa lỗi lúc có
            input.classList.remove("input-error");
            //xóa error mess
            let elErrorExits = this.nextElementSibling;
            if(elErrorExits){
                elErrorExits.remove();
            }

        }
    } catch (error) {
        console.log(error);
    }
}
//khi click vào 1 dòng----
// function onClickRow(){
//     let row = this.parentElement;
//     let checkBoxThis = row.getElementsByTagName("input")[0];
// }

//checkbox condition
function onCheck(){
    try {
        //nếu check-top được check
        if(document.getElementById("check-top").checked){
            checkAll();
        }
        else{
        //nếu không thì bỏ check tất cả
            unCheckAll();
        }
    } catch (error) {
        console.log(error);
    }
}
//check all
function checkAll(){
    try {
        //tạo list các checkbox
        checkList = document.querySelectorAll(".body-content .table .checkbox");
        //check all
        checkList.forEach(el => {
            el.checked = true;
        });
    } catch (error) {
        console.log(error);
    }
}
//uncheck all
function unCheckAll(){
    try {
        //tạo list các checkbox
        checkList = document.querySelectorAll(".body-content .table .checkbox");
        //uncheck all
        checkList.forEach(el => {
            el.checked = false;
        });
    } catch (error) {
        console.log(error);
    }
}

//validate số lượng >0
function onValidateEmpty(){
    try {
        //lấy ra data trong input vừa nhập
        let input = this;
        const value = this.value;
        let elErrorMess = this.nextElementSibling;

        //kiểm tra có trống không
        if(value == "" || value == null || value == undefined || value == 0){
            //nếu trống thì hiển thị thông báo và border -> red
            input.classList.add("input-error");
            //hiển thị thông tin lỗi
            let elError = document.createElement("div");
            elError.classList.add("error-mess");
            elError.textContent = "Trường này không được phép trống";
            //kiểm tra xem đã có error mess chưa
            let elErrorExits = this.nextElementSibling;
            if(!elErrorExits){
                this.parentElement.append(elError);
            }
        }
        else{
            //nếu có dữ liệu thì xóa lỗi lúc có
            input.classList.remove("input-error");
            //xóa error mess
            let elErrorExits = this.nextElementSibling;
            if(elErrorExits){
                elErrorExits.remove();
            }

        }
    } catch (error) {
        console.log(error);
    }
}

// đặt giá trị mặc địnnh là ngày hôm nay
function onTime(){
    try {
        today = new Date();
        //đặt value trong input là ngày hôm nay
        document.querySelectorAll(".day").forEach(datetimeInputElement => {
            datetimeInputElement.valueAsDate = new Date();
        })
        //năm theo dõi là năm nay:
        document.querySelectorAll(".tf-namtheodoi").forEach(year => {
            year.value = today.getFullYear();
        })
    } catch (error) {
        console.log(error);
    }
}

//tự động tính tỉ lệ hao mòn khi hao mòn năm thay đổi
function onHaoMonNamChange(){
    try {
        tiLeHaoMon.value = (haoMonNam.value / nguyenGia.value) * 100;
    } catch (error) {
        console.log(error);
    }
}
//tự động tính giá trị hao mòn năm khi tỉ lệ thay đổi
function onTiLeHaoMonChange(){
    try {
        haoMonNam.value = (tiLeHaoMon.value / 100) * nguyenGia.value;
    } catch (error) {
        console.log(error);
    }
}
//tự động tính giá trị hao mòn khi giá thay đổi
function onNguyenGiaChange(){
    try {
        haoMonNam.value = (tiLeHaoMon.value / 100) * nguyenGia.value;
    } catch (error) {
        console.log(error);
    }
}

//kiểm tra lại dữ liệu khi ấn nút Lưu
function kiemTraDuLieuHopLe(){
    try {
        if(haoMonNam.value > nguyenGia.value){
            warningContainer = document.getElementById("war-container");
            warningContainer.style.display = "flex";
            document.getElementById("war-main-btn").remove();
            document.getElementById("war-sub-btn").innerHTML = "Đóng";
            document.getElementById("warning-title").innerHTML = "Hao mòn năm phải nhỏ hơn hoặc bằng nguyên giá";
        }
    } catch (error) {
        console.log(error);
    }
}

