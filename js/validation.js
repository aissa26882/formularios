function validateForm(event, form) {
    event.preventDefault();
    let isValid = true;
    const fields = form.querySelectorAll('input[required]');
  
    fields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });
  
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && !isValidEmail(emailField.value)) {
      isValid = false;
      emailField.classList.add('error');
    } else if (emailField) {
      emailField.classList.remove('error');
    }
  
    if (isValid) {
      const formData = new FormData(form);
      let data = {};
      formData.forEach((value, key) => data[key] = value);
      localStorage.setItem('formData', JSON.stringify(data));
      window.location.href = "confirmacion.html";
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
  
  
  function isValidEmail(email) {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }