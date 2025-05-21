document.addEventListener('DOMContentLoaded', () => {
    // Dropdown toggle
    const buttons = document.querySelectorAll('.btnnn');
    const dropdowns = document.querySelectorAll('.dropdown-menu');
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Предотвращаем всплытие события
  
        // Выбираем выпадающее меню как следующий элемент после кнопки
        const targetDropdown = button.nextElementSibling;
        if (targetDropdown && targetDropdown.classList.contains('dropdown-menu')) {
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
  
          // Закрываем все другие меню
          dropdowns.forEach(dropdown => {
            if (dropdown !== targetDropdown) {
              dropdown.classList.remove('show');
              const relatedButton = dropdown.previousElementSibling;
              if (relatedButton && relatedButton.classList.contains('btnnn')) {
                relatedButton.setAttribute('aria-expanded', 'false');
              }
            }
          });
  
          // Переключаем целевое меню
          targetDropdown.classList.toggle('show');
          button.setAttribute('aria-expanded', !isExpanded);
        }
      });
  
      // Поддержка клавиатуры
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });
  
    // Закрытие меню при клике вне области
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('show');
          const relatedButton = dropdown.previousElementSibling;
          if (relatedButton && relatedButton.classList.contains('btnnn')) {
            relatedButton.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });
  
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
  
    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mainNav.classList.toggle('active');
      });
    }
  
    // Закрытие мобильного меню при клике на ссылку
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('show');
          const relatedButton = dropdown.previousElementSibling;
          if (relatedButton && relatedButton.classList.contains('btnnn')) {
            relatedButton.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });
  });