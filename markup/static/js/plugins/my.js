

function incart() {
    const _this = this;
    this.classList.add("btn_loading") 
    localStorage.setItem(this.id, 'incart'); //теперь у вас в localStorage хранится ключ значение

    //Выводим его в консоль:
    var localValue = localStorage.getItem(this.id);
    console.log(localValue); //"myValue"

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response) {
        const resp = response.text();
        console.log(resp);
          setTimeout(function(){
            _this.classList.remove('btn_loading');
            _this.classList.add('btn_incart');
            _this.textContent = "В корзине";
          }, 1000);
          
        
    }).catch(error => console.error(error));
  }
document.querySelectorAll('.js_incart')
.forEach(tocart => tocart.addEventListener('click', incart));


function check_incart() {
   // var localValue = localStorage.getItem('id1');
    const btns = document.querySelectorAll('.js_incart'); 
    [].forEach.call(btns, function(btn) {
        const ids = btn.id;
        if(localStorage.getItem(ids) == "incart"  ) {
            btn.classList.add('btn_incart');
            btn.textContent = "В корзине";
        }
    });
}
check_incart();