let currentTheme = 0; 

        function clearScreen() {
            document.getElementById('screen').innerText = '0';
        }

        function pressNumber(num) {
            const screen = document.getElementById('screen');
            if (screen.innerText === '0') {
                screen.innerText = num.toString();
            } else {
                screen.innerText += num.toString();
            }
        }

        function pressOperator(op) {
            const screen = document.getElementById('screen');
            screen.innerText += ` ${op} `;
        }

        function calculate() {
            const screen = document.getElementById('screen');
            try {
                screen.innerText = eval(screen.innerText.replace(/ /g, '')); 
            } catch {
                screen.innerText = 'Hata';
            }
        }

        function toggleTheme() {
            currentTheme = (currentTheme + 1) % 2; 
            const calculator = document.querySelector('.calculator');
            const themeIcon = document.getElementById('theme-icon');
            
            if (currentTheme === 0) {
                calculator.style.background = 'rgba(40, 40, 40, 0.9)';
                calculator.style.borderColor = '#38fbdb';
                calculator.style.boxShadow = '0px 0px 20px #38fbdb';
                themeIcon.classList.remove('fa-moon'); 
                themeIcon.classList.add('fa-sun'); 
            } else {
                calculator.style.background = 'rgba(255, 255, 255, 0.5)';
                calculator.style.borderColor = '#000';
                calculator.style.boxShadow = '0px 0px 20px #000';
                document.getElementById('screen').style.color = '#000';
                themeIcon.classList.remove('fa-sun'); 
                themeIcon.classList.add('fa-moon'); 
            }
        }