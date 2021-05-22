/*******************************************************************************
 * ابتدا درون یک المنت یا تگ رویداد ها را با ورودی های مشخص شده قرار میدهیم
 * 
 * onclick="filter(0,1)" = متن دعا و ترجمه
 * onclick="filter(0,2)" = فقط متن دعا
 * onclick="filter(1,2)" = فقط ترجمه
 * onclick="separated(0,1)" = ترجمه در آخر
 * onclick="separated(1,0)" = دعا در آخر
 * 
 * متن دعا و ترجمه باید به صورت یکی در میان درون تگ پاراگراف باشند
 * تغییرات روی همه تگ های پاراگراف یک صفحه اعمال میشود
 * تگ های پاراگراف درون تگی با آی دی زیر تغییر میکنند
 * "sec"
 * در آخر باید انتهای صفحه این سند را لینک کنید
 *******************************************************************************/
var a = document.getElementsByTagName("p");
var al = document.getElementsByTagName("p").length;
var sec = document.getElementById("sec");
var p = [];
for (var i = 0; i < al; i++) {
    p.push(a.item(i).outerHTML)
}

function filter(start, each) {
    sec.innerHTML = "";
    for (var i = start; i < al; i += each) {
        sec.innerHTML += p[i];
    }
}

function separated(start1, start2) {
    sec.innerHTML = "";
    for (var i = start1; i < al; i += 2) {
        sec.innerHTML += p[i];
    }
    sec.innerHTML += "<br />";
    for (var i = start2; i < al; i += 2) {
        sec.innerHTML += p[i];
    }
}