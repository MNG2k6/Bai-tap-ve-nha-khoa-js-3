arrayNumber = [10, -3, 5, -7, 11, -15, -20, 23];
//  1.


// 2. 
// let numMax = arrayNumber[0];
// for (let b = 0; b < arrayNumber.length; b++) {
//     if(arrayNumber[b] >= numMax) {
//         numMax = arrayNumber[b];
//     }
// }
// console.log(numMax);

// 3.

// let numMin = arrayNumber[0];
// for (let c = 0; c < arrayNumber.length; c++) {
//     if(arrayNumber[c] <= numMin) {
//         numMin = arrayNumber[c];
//     }
// }

// for (let d = 0; d < arrayNumber.length; d++) {
//     if(arrayNumber[d] == numMin) {
//         console.log(d);
//     }    
// }

// 4. 

// 5
// let snt = arrayNumber[0]
// for (let i = 0; i < arrayNumber.length; i++) {
//     if(arrayNumber[i] >= 1) {
//         snt = arrayNumber[i];
//         if (snt % snt == 1) {
//             console.log(snt, "la so nguyen to");
//         }
//     }    
// }

// 6. 

// for (let f = 0; f < arrayNumber.length; f++) {
//     if(arrayNumber[f] < 0) {
//         arrayNumber.splice(f, 1, 0);
//     }    
// }
// console.log(arrayNumber);

// 7. 

// for (let g = 0; g < arrayNumber.length; g++) {
//     if(arrayNumber[g] < 0) {
//         arrayNumber.splice(g, 1);
//     } 
//     if(arrayNumber[g] <= 0) {
//         arrayNumber.splice(g,1);
//     }   
// }
// console.log(arrayNumber);
// Bai 2 
// let soNguyenTo = [17,13,5,11,3,2,29,23,19,31]
// // theo thu tu tang dan 
// soNguyenTo.sort(function sort(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });
// console.log(soNguyenTo);

// theo thu tu giam dan 

// soNguyenTo.sort(function sort(a, b) {
//     if (a > b) return -1;    
//     if (a < b) return 1;
//     return 0;
// });
// console.log(soNguyenTo);

// Bai 3 
// let n;
// do {
//     n = prompt("put an num")
//     if(!isNaN(n)) {
//         break;
//     } else {
//         alert("nhap lai")
//     }
// } while (!isNaN(n));

// function myFunction() {
//     var flag = true;
//     if(n < 2) {
//         flag = false;
//     } else {
//         for (let i = n; 2 < i; i--) {
//             if(n % 1 == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }

//     if(flag == true) {
//         document.write(n + "la so nguyen to");
//     }
// }
// myFunction(n);

// Bai 4

// function saveInfo() {
//     let ten = document.getElementById("ten").value;
//     let tuoi = document.getElementById("tuoi").value;
//     let tinhTrangQuanHe = document.getElementById("tinhTrangQuanHe").value;
//     let email = document.getElementById("email").value;
//     let gioiTinh = document.getElementById("gioiTinh").value;
    
//     let thongTin = localStorage.getItem('id');
//     thongTin = thongTin ? JSON.parse(localStorage.getItem('id')) : [];
//     thongTin.push({
//         ten : ten,
//         tuoi : tuoi,
//         tinhTrangQuanHe : tinhTrangQuanHe,
//         email : email,
//         gioiTinh : gioiTinh,
//     });
//     localStorage.setItem('id', JSON.stringify(thongTin));
//     print();
// }

// function print() {
//     let thongTin = localStorage.getItem('id');
//     thongTin = thongTin ? JSON.parse(localStorage.getItem('id')) : [];
//     if(thongTin.length === 0) {
//         document.getElementById("list").style.display = 'none';
//         return false;
//     }
//     document.getElementById("list").style.display = 'block';
//     let tableContent = `<tr>
//     <td>Ho va ten</td>
//     <td>Tuoi</td>
//     <td>Tinh trang quan he</td>
//     <td>Email</td>
//     <td>Gioi Tinh</td>
// </tr>`;
//     for (let i = 0; i < thongTin.length; i++) {
//         tableContent += 
//         `<tr>
//             <td>${thongTin.ten}</td>
//             <td>${thongTin.tuoi}</td>
//             <td>${thongTin.tinhTrangQuanHe}</td>
//             <td>${thongTin.email}</td>
//             <td>${thongTin.gioiTinh}</td>
// 	    </tr>`;
//     }
//     document.getElementById("grid-list").innerHTML = tableContent;
// }