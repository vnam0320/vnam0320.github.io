var submitBtn = document.querySelector('.modal__btn');
var toastCheckBox = document.querySelector('#toast__checkbox');
var modalCheckBox = document.querySelector('#modal__checkbox');
submitBtn.onclick = function(event)
{
    event.preventDefault();
    toastCheckBox.checked = true;
    modalCheckBox.checked = false;
    setTimeout(() => {
        toastCheckBox.checked = false;
    }, 1500+1000);
};

// sidebar
// var sidebar = document.querySelector('.sidebar');
// var sidebarOpen = document.querySelector('.nav__menu');
// var sidebarClose = document.querySelector('.sidebar__close');
// console.log(sidebar);
// sidebarClose.onclick = function(event)
// {
//   sidebar.style.transform = "translateX(calc(-100% - 26px))";
// };
// sidebarOpen.onclick = function(event)
// {
//     sidebar.style.transform = "translateX(0%)";
// };