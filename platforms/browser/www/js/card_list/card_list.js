
// variable declare
var Current_Date = new Date().format("yyyy-MM-dd");
var array = ['드림포스코한양풍림','새천년상떼빌도현','양현갈현가현새릉골'];

for (var card_name in array) {
var card_list_var = ' <li class="list_item list_item--material">\
                    <div class="list_item_left list_item--material_left">\
                        <img class="list_item_thumbnail list_item--material_thumbnail" src="http://placekitten.com/g/42/41" alt="Cute kitten">\
                    </div>\
                        \
                    <div class="list_item_center list_item--material_center" onclick="location.href=card.html" >\
                        <div class="list_item_title list_item--material_title"> ' + card_name + '</div>\
                        <div class="list_item_subtitle list_item--material_subtitle"> ' + Current_Date + '</div>\
                    </div>\
                </li>'
}

var divTest = document.getElementById("demo");
divTest.innerHTML = card_list_var;




function ViewSearch(){
        document.getElementById("SearchLayer").style.display='inline'
    }
function CloseSearch(){
        document.getElementById("SearchLayer").style.display='none'
    }

