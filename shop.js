const upArrow = document.getElementById('upArrow');
upArrow.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}); 
  
  

// -------------reng  
  const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedColor = option.getAttribute('data-color');

        // cart-button
        const buttons = document.querySelectorAll('.cart-button');
        buttons.forEach(btn => {
            btn.style.backgroundColor = selectedColor;
            btn.style.setProperty('--hover-color', selectedColor);
        });
        // n1
        document.querySelectorAll('[id="n1"]').forEach(el => {
            el.style.backgroundColor = selectedColor;
            el.style.color = '#fff';
        });


        // filterclass
        const filterBtn = document.querySelector('.filterclass');
        filterBtn.style.backgroundColor = selectedColor;

        // slider-range (arxa yaşıl qalır, yalnız seçilən hissə)
        const sliderRangeEl = document.getElementById('slider-range');
        sliderRangeEl.style.backgroundColor = selectedColor;

        // slider thumb
        const style = document.getElementById('dynamic-thumb-style') || document.createElement('style');
        style.id = 'dynamic-thumb-style';
        style.textContent = `
            input[type="range"]::-webkit-slider-thumb { background: ${selectedColor} !important; }
            input[type="range"]::-moz-range-thumb { background: ${selectedColor} !important; }
            .cart-button:hover { background-color: #fff !important; color: ${selectedColor} !important; }
            .filterclass:hover { background-color: #fff !important; color: ${selectedColor} !important; }
        `;
        document.head.appendChild(style);

        // asemce, asemce1
        document.querySelectorAll('.asemce, .asemce1').forEach(el => {
            el.style.backgroundColor = selectedColor;
        });

        // upArrow
        document.getElementById('upArrow').style.backgroundColor = selectedColor;
    });
});




// -------------

const minRange = document.getElementById('minRange');
const maxRange = document.getElementById('maxRange');
const minVal = document.getElementById('minVal');
const maxVal = document.getElementById('maxVal');
const sliderRange = document.getElementById('slider-range');

function updateSlider() {
    let min = parseInt(minRange.value);
    let max = parseInt(maxRange.value);
    
    if(min > max - 10) minRange.value = max - 10;
    if(max < min + 10) maxRange.value = min + 10;

    minVal.textContent = min;
    maxVal.textContent = max;

    let rangePercentMin = (min / minRange.max) * 100;
    let rangePercentMax = (max / maxRange.max) * 100;

    sliderRange.style.left = rangePercentMin + '%';
    sliderRange.style.width = (rangePercentMax - rangePercentMin) + '%';
}

minRange.addEventListener('input', updateSlider);
maxRange.addEventListener('input', updateSlider);

updateSlider(); // page load

// Başlanğıc üçün
updateSlider();

minRange.addEventListener('input', updateSlider);
maxRange.addEventListener('input', updateSlider);

// ---------------------- display flex none
// Paginationconst next = document.getElementById('next');
const next2 = document.getElementById('next-2');
const showing1 = document.getElementById('Showing-carts-picture');
const showing2 = document.getElementById('Showing-cart-picture-2');

next.addEventListener('click', () => {
    showing1.style.display = 'none';
    showing2.style.display = 'flex';
    next.style.display = 'none';
    next2.style.display = 'flex';
});

next2.addEventListener('click', () => {
    showing2.style.display = 'none';
    showing1.style.display = 'flex';
    next2.style.display = 'none';
    next.style.display = 'flex';
});


// --------
function goToPage2() {
    next.style.display = "none";
    next2.style.display = "flex";
    page1.style.display = "none";
    page2.style.display = "flex";
    showingSentence.textContent = "Showing 9–12 of 12 results";
    window.scrollTo({ top: document.querySelector("#main-page-2").offsetTop - 100, behavior: "smooth" });
}

function goToPage1() {
    next.style.display = "flex";
    next2.style.display = "none";
    page1.style.display = "flex";
    page2.style.display = "none";
    showingSentence.textContent = "Showing 1–8 of 12 results";
    window.scrollTo({ top: document.querySelector("#main-page-2").offsetTop - 100, behavior: "smooth" });
}