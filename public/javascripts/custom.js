window.onload=function(){
var container = document.querySelector('#container');
var msnry = new Masonry( container, {
    // options
    columnWidth: 3,
    itemSelector: '.item'
});
    msnry.layout();
}
//sign-up
