{/* <div class="product">
<div class="row">
    <div class="col-md-3">
        <img class="img-fluid mx-auto d-block image" src="assets/img/image.jpg">
    </div>
    <div class="col-md-8">
        <div class="info">
            <div class="row">
                <div class="col-md-5 product-name">
                    <div class="product-name">
                        
                    </div>
                </div>
                <div class="col-md-4 quantity">
                    <label for="quantity">Quantity:</label>
                    <input id="quantity" type="number" value ="1" class="form-control quantity-input">
                </div>
                <div class="col-md-3 price">
                    <span>$120</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */}



const productsArr=sessionStorage.getItem("productsArr");
var arrayString = sessionStorage.getItem("productsArr");
var array = JSON.parse(arrayString);
let price=0;
let disCount=0;

const drowProduct=(product,j)=>{

    const divItems=document.querySelector(".items");

    const divProduct=document.createElement('div');
    divProduct.className="product";
    divItems.appendChild(divProduct);

    const divRow=document.createElement('div');
    divRow.className="row";
    divProduct.appendChild(divRow);

    const divCol3=document.createElement('div');
    divCol3.className="col-md-3";
    divRow.appendChild(divCol3);

    const img=document.createElement('img');
    img.classList="img-fluid mx-auto d-block image";
    img.src = `../../assets/pictures/${product[3]}`;
    divCol3.appendChild(img);
    
    const divCol8=document.createElement('div');
    divCol8.className="col-md-8";
    divRow.appendChild(divCol8); 

    const divInfo=document.createElement('div');
    divInfo.className="info";
    divCol8.appendChild(divInfo);

    const divRow2=document.createElement('div');
    divRow2.className="row";
    divInfo.appendChild(divRow2);

    const divCol5=document.createElement('div');
    divCol5.classList="col-md-5 product-name";
    divRow2.appendChild(divCol5); 

    const divName=document.createElement('div');
    divName.className="product-name";
    divCol5.appendChild(divName); 

    const labelName=document.createElement('label');
    labelName.innerHTML=product[1];
    divName.appendChild(labelName);  

    const divCol4=document.createElement('div');
    divCol4.classList="col-md-4 quantity";
    divRow2.appendChild(divCol4);

    const input=document.createElement('input');
    input.setAttribute('id', 'quantity');
    input.type="number";
    input.value="1";
    input.min="1";
    input.classList="form-control quantity-input";
    divCol4.appendChild(input);

    const labelQuantity=document.createElement('label');
    labelQuantity.id="Q_label";
    labelQuantity.innerHTML=":כמות";
    divCol4.appendChild(labelQuantity); 

    
    
    const divPrice=document.createElement('div');
    divPrice.classList="col-md-3 price";
    divRow2.appendChild(divPrice);

    const span=document.createElement('span');
    span.id="num_price";
    const i_shekel=document.createElement('i');
    i_shekel.className="fa fa-shekel-sign";
    
    span.innerHTML=product[2]+" ";
    divPrice.appendChild(i_shekel);
    divPrice.appendChild(span);

    const divIkon=document.createElement('div');
    divIkon.className="divIkon"
    divProduct.appendChild(divIkon);

    const i=document.createElement("i");
    i.className="fa fa-trash-alt";
    i.id="ikon";
    divIkon.appendChild(i);
// שינוי
divIkon.onclick = (event) => {
       
        const divImg=document.createElement('div');
        divImg.className="divIkon";
        divProduct.appendChild(divImg);

        const image=document.createElement('img');
        image.src="../../assets/הסרת אטרקציה.gif";
        image.style.width="80px";
        divProduct.removeChild(divIkon);
        divImg.appendChild(image);
       
        setTimeout(() => {
            divItems.removeChild(divProduct);
        price-=input.value*product[2];
        TotalPay.innerHTML=price;
        if(sessionStorage.getItem("club")==="true"){
            const discount=document.getElementById("discount");
            discount.innerHTML=(discount.innerHTML)-((input.value*product[2])*0.1);
        }
        finalprice.innerHTML=(TotalPay.innerHTML-discount.innerHTML).toFixed(2);
        }, 2000);

        // הסרה מהמערך
        const storedArray = JSON.parse(sessionStorage.getItem('productsArr'));
        const targetString = product[1];
        const correctedArray = storedArray.filter(innerArray => {
        return !innerArray.includes(targetString);
        });
        sessionStorage.setItem('productsArr', JSON.stringify(correctedArray));

            }
      
    // שינוי
    price+=input.value*product[2];
    const TotalPay=document.getElementById("TotalPay");
    TotalPay.innerHTML=price;

    let counter=1;
        input.onclick=(event)=>{
        price-=counter*product[2];
        price+=input.value*product[2];
        counter=input.value;
        TotalPay.innerHTML=price;
        if(sessionStorage.getItem("club")==="true"){
            disCount=price*0.1;
            const discount=document.getElementById("discount");
            discount.innerHTML=disCount.toFixed(2);
        }
        const finalprice=document.getElementById("finalprice");
        finalprice.innerHTML=(TotalPay.innerHTML-discount.innerHTML).toFixed(2);
    }

    if(sessionStorage.getItem("club")==="true"){
        disCount=price*0.1;
        const discount=document.getElementById("discount");
        discount.innerHTML=disCount.toFixed(2);
    }

    const finalprice=document.getElementById("finalprice");
    finalprice.innerHTML=(TotalPay.innerHTML-discount.innerHTML).toFixed(2);

}
for(let i=0; i<array.length;i++)
{
    drowProduct(array[i],i);
}


