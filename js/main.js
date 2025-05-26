
    setTimeout(() => {
        document.getElementById('goldPrice').textContent = '3,500,000 تومان';
        document.getElementById('dollarPrice').textContent = '85,000 تومان';
        document.getElementById('bitcoinPrice').textContent = '9,000,000,000 تومان';
    }, 1000);

    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });

    window.onload = function() {
        setTimeout(() => {
            document.getElementById('popup').classList.remove('hidden');
        }, 1000); 
    };
    document.getElementById('closePopup').addEventListener('click', () => {
        document.getElementById('popup').classList.add('hidden');
    });
    document.getElementById('popup').addEventListener('click', (e) => {
        if (e.target === document.getElementById('popup')) {
            document.getElementById('popup').classList.add('hidden');
        }
    });
