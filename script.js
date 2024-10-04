document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-cooking');
  const steps = document.querySelectorAll('.steps-list li');
  const progressBar = document.querySelector('.progress-bar');
  let currentStep = 0;

  startButton.addEventListener('click', function () {
      if (currentStep < steps.length) {
          steps[currentStep].style.backgroundColor = '#d4edda';
          steps[currentStep].style.transition = 'background-color 0.5s ease';
          progressBar.style.width = ((currentStep + 1) / steps.length) * 100 + '%';
          currentStep++;
      } else {
          alert('Recipe Completed!');
          progressBar.style.width = '100%';
      }
  });

  steps.forEach((step, index) => {
      step.addEventListener('click', () => {
          if (index <= currentStep) {
              step.classList.toggle('completed');
          }
      });
  });
});