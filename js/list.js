let film_left_list = document.querySelectorAll('.film_left_list')
let film_center_con_right = document.querySelectorAll('.film_center_con_right')
for(let i = 0; i < film_left_list.length; i++){
    film_left_list[i].onclick = function () {
        delActive()
        this.classList.add('film_active')
        film_center_con_right[i].style.display = 'block'
    }
}

function delActive() {
    for(let i = 0; i < film_left_list.length; i++){
        film_left_list[i].classList.remove('film_active')
        film_center_con_right[i].style.display = 'none'
    }
}

let chatArr = JSON.parse(localStorage.getItem('chat')) || []

createChat(chatArr)
let header_img = document.querySelector('.header_img')
let header_mark = document.querySelector('.header_mark')
let close_btn = document.querySelector('.close_btn')
let confirm_btn = document.querySelector('.confirm_btn')
let header_img_src = document.querySelectorAll('.header_img_src')

let headerIndex1 = ''
let headerIndex2 = ''
let headerSrcArr = ['images/header1.jpeg','images/header2.jpeg','images/header3.jpeg']
for(let i = 0; i <header_img_src.length; i++){
    header_img_src[i].onclick = function () {
        delImgActive()
        header_img_src[i].classList.add('active_img')
        headerIndex1 = i
    }

}

function delImgActive() {
    for(let i = 0; i <header_img_src.length; i++){
        header_img_src[i].classList.remove('active_img')
    }
}
header_img.onclick = function () {
    header_mark.style.display = 'block'
}
close_btn.onclick = function () {
    header_mark.style.display = 'none'
}
confirm_btn.onclick = function () {
    if(document.querySelector('.active_img') == null){
        alert('Please select an avatar')
    }else {
        headerIndex2 = headerIndex1
        header_img.src = headerSrcArr[headerIndex2]
        header_mark.style.display = 'none'
    }
}


let film_form_btn = document.querySelector('.film_form_btn')

film_form_btn.onclick = function () {
    let name = document.querySelector('.name')
    let comment = document.querySelector('.comment')
    if(name.value == ''){
        return alert('Please enter your name')
    }
    if(comment.value == ''){
        return alert('Please enter a comment')
    }
    chatArr.push({
        name: name.value,
        comment: comment.value,
        src: headerIndex2 == '' ? 'images/image 8.png' : headerSrcArr[headerIndex2]
    })
    localStorage.setItem('chat',JSON.stringify(chatArr))
    createChat(chatArr)
    name.value = ''
    comment.value = ''
}
// images/header1.jpeg

function createChat(arr) {
    let film_form_list = document.querySelector('.film_form_list')
    let Comments_num = document.querySelector('.Comments_num')
    Comments_num.innerHTML = arr.length
    let list_con = ``

    for(let i = 0; i < chatArr.length; i++){
        list_con = list_con + `<div class="list_con">
                <div class="header"><img src="${arr[i].src}"/></div>
                <div class="form_info">
                    <div class="header_name">@${arr[i].name}</div>
                    <div class="header_con">${arr[i].comment}</div>
                    <div class="header_icon">
                        <div class="icon_d"></div>
                        Reply
                    </div>
                </div>
            </div>`
    }
    film_form_list.innerHTML = list_con
}