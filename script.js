// script.js

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = "0";

  const updateCounter = () => {

    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);

    }

    else{

      if(target >= 1000){

        counter.innerText = (target / 1000) + "K+";

      }

      else{

        counter.innerText = target + "+";

      }

    }

  };

  updateCounter();

});