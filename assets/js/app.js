
document.addEventListener('DOMContentLoaded', function() {
 
    const contactForm = document.getElementById('contact-form');
    
  
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
    
        event.preventDefault();
        
    
        const adSoyad = document.getElementById('adSoyad').value;
        const email = document.getElementById('email').value;
        const mesaj = document.getElementById('mesaj').value;
        

        if (adSoyad && email && mesaj) {

          const formData = {
            adSoyad: adSoyad,
            email: email,
            mesaj: mesaj
          };
          
      
          console.log('Form Data:', formData);
          
        
          alert('Sorğunuz qəbul olundu!');
          
        
          contactForm.reset();
        } else {
     
          alert('Zəhmət olmasa bütün xanaları doldurun!');
        }
      });
    }
  });
  function muracietMesaji() {
    alert("Sorğunuz qəbul olundu");
  }
  