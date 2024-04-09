$('.input-cart-number').on('keyup change', function () {
  $t = $(this);

  if ($t.val().length > 3) {
    $t.next().focus();
  }

  var card_number = '';
  $('.input-cart-number').each(function () {
    card_number += $(this).val() + ' ';
    if ($(this).val().length == 4) {
      $(this).next().focus();
    }
  })

  $('.credit-card-box .number').html(card_number);
});

$('#card-holder').on('keyup change', function () {
  $t = $(this);
  $('.credit-card-box .card-holder div').html($t.val());
});

$('#card-holder').on('keyup change', function () {
  $t = $(this);
  $('.credit-card-box .card-holder div').html($t.val());
});

$('#card-expiration-month, #card-expiration-year').change(function () {
  m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
  m = (m < 10) ? '0' + m : m;
  y = $('#card-expiration-year').val().substr(2, 2);
  $('.card-expiration-date div').html(m + '/' + y);
})

$('#card-ccv').on('focus', function () {
  $('.credit-card-box').addClass('hover');
}).on('blur', function () {
  $('.credit-card-box').removeClass('hover');
}).on('keyup change', function () {
  $('.ccv div').html($(this).val());
});



setTimeout(function () {
  $('#card-ccv').focus().delay(1000).queue(function () {
    $(this).blur().dequeue();
  });
}, 500);

const numbers = document.getElementsByClassName('num');
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.onkeypress = (event) => {
    const key = event.key;
    if (key > '9' || key < '0') {
      event.preventDefault();
    }

  }

}
const pay=document.getElementById('pay');
const p=document.getElementById("p");
const form = document.querySelector('form');
form.onsubmit = (event) => {
  event.preventDefault();

  const divModal=document.createElement('div');
  divModal.className="modal";
  divModal.id="modal";
  p.appendChild(divModal);
  const divContent=document.createElement('div');
  divContent.className="modal-content";
  divModal.appendChild(divContent);

  const divMessage=document.createElement('div');
  divMessage.className="modal-message";
  divMessage.innerHTML="הזמנתך התקבלה בהצלחה ותשלח תוך רגעים ספורים למייל";
  divMessage.style.color="rgb(170, 6, 96);";
  divContent.appendChild(divMessage);
   
  const img=document.createElement('img');
  const imageName = "credit.gif"; 
  img.src = `../../assets/${imageName}`;
  img.style.width = "50%";
  divContent.appendChild(img);

  const close=document.createElement('span');
  close.className="close-button";
  close.innerHTML="x";
  
  divContent.appendChild(close);

  close.addEventListener("click", function() {
    window.location.href = '../home/home.html';
    // Add your desired actions here
});


   showModal();
}

function showModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
  setTimeout(function() {
      modal.style.display = "none";
  }, 100000);

}




