

const nav_ikon = document.getElementById("nav_ikon");
let c = 0;
nav_ikon.onclick = () => {
  c++;
  console.log(c)
  if (c % 2 != 0) {
    const top = document.getElementById("top");

    const divNav = document.createElement('div');
    divNav.className = "divNav";
    top.appendChild(divNav);

    const home = document.createElement('a');
    home.innerHTML = "עמוד הבית";
    home.classList = "a";
    home.href = "../home/home.html";

    divNav.appendChild(home);

    const ourA = document.createElement('a');
    ourA.innerHTML = "הנבחרת שלנו";
    ourA.classList = "a";
    ourA.href = "../attarctions/attarctions.html";
    ourA.onclick=(sessionStorage.setItem("bool",1));
    divNav.appendChild(ourA);

    const about = document.createElement('a');
    about.innerHTML = "אודות";
    about.className = "a";
    about.href = "../abaut/about.html";
    divNav.appendChild(about);
    
    const search_class = document.createElement('div');
    search_class.classList = "search_class";
    divNav.appendChild(search_class);

    const searchContainer = document.createElement('div');
    searchContainer.classList = "search-container";
    search_class.appendChild(searchContainer);

    const aSearch = document.createElement('a');
    aSearch.classList = "a-search";
    aSearch.id = 'sss';
    aSearch.href = "../attarctions/attarctions.html";
    searchContainer.appendChild(aSearch);

    i_fas = document.createElement('i');
    i_fas.classList = "fas fa-search";
    aSearch.appendChild(i_fas);

    const input_s = document.createElement('input');
    input_s.type = "text";
    input_s.classList = "search";
    input_s.id = 'search'
    input_s.placeholder = "חיפוש אטרקציות";
    searchContainer.appendChild(input_s);

    const btn_search = document.getElementById("sss");
    btn_search.onclick = function () {
      const text = document.getElementById("search").value;
      sessionStorage.setItem("search_value", text);
      sessionStorage.setItem("bool", 2);
    }
    /* <div id="bag">
            <div>
              <a href="../basket/basket.html">לצפיה בסל</a>
            </div>
            <i class="fas fa-shopping-cart"></i>
          </div> */
    const divBasket = document.createElement('div');
    divBasket.id = "bag";
    divNav.appendChild(divBasket);

    const divB = document.createElement('div');
    divBasket.appendChild(divB);

    const aBasket = document.createElement('a');
    aBasket.innerHTML = "לצפיה בסל";
    aBasket.className = "a";
    aBasket.href = "../basket/basket.html";
    divB.appendChild(aBasket);

    const iBasket = document.createElement('i');
    iBasket.classList = "fas fa-shopping-cart";
    divBasket.appendChild(iBasket);
  }
  else {
    const top = document.getElementById('top');
    const divNav = document.getElementsByClassName('divNav');
    top.removeChild(divNav[0]);
  }
}





const btn_search = document.querySelector(".a-search");
btn_search.onclick = function () {
  const text = document.querySelector(".search").value;
  sessionStorage.setItem("search_value", text);
  sessionStorage.setItem("bool", 2);
}