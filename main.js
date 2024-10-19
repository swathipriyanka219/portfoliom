var typed = new Typed(".multiple-text", {
    strings: ["A Web Developer", "A Creative Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  
  function filterSelection(category) {
      const cards = document.getElementsByClassName('card');
      if (category === 'all') {
      
        for (let card of cards) {
          card.style.display = 'block';
        }
      } else {
      
        for (let card of cards) {
          const dataName = card.getAttribute('data-name');
          if (dataName === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      }
  
    
      const buttons = document.getElementsByClassName('filter')[0].getElementsByTagName('button');
      for (let button of buttons) {
        if (button.getAttribute('data-name') === category) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      }
    }
  