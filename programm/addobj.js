let inp_obj = document.getElementById("objective")
let add_obj = document.getElementById("add_obj")
let div_obj = document.getElementById("cases")
var newItem
function add_object() {
    console.log("function_go")
    newItem = document.createElement("div")
    newItem.innerHTML = inp_obj.value
    newItem.setAttribute('onclick', 'remove_object()')
    div_obj.appendChild(newItem)
}
function remove_object() {
    console.log("function_go_two")
    div.removeChild()
}