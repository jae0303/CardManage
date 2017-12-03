
var ho_no = "204호"

var uls = document.getElementsByTagName('ul');

var radio_item_list = '<li class="list_item list_item--material">\
                       <div class="list_item_center list_item--material_center" >\
                        <div class="list_item_title list_item--material_title">' +  ho_no + '</div>' +
                      '</div> \
                       <div class="list_item_right list_item--material_right" >\
                        <input type="radio" id="204-1" class="rad" name="204group" />\
                        <label for="204-1">방문</label>\
                        <input type="radio" id="204-2" class="rad" name="204group" />\
                        <label for="204-2">부재</label>\
                        <input type="radio" id="204-3" class="rad" name="204group" />\
                        <label for="204-3">거부</label>\
                       </div>\
                       </li>';

console.log(uls[0]);