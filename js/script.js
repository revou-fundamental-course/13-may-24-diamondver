window.onload = () => {
    const formLuasSegitiga = document.querySelector('[rel="luas-segitiga"]');
    const formKelilingSegitiga = document.querySelector('[rel="keliling-segitiga"]');

    formLuasSegitiga.addEventListener('submit', submitFormLuas)
    formKelilingSegitiga.addEventListener('submit', submitFormKeliling)

    const luasSegitigaCanvas = drawTriangle('luas-segitiga');
    const kelilingSegitigaCanvas = drawTriangle('keliling-segitiga')

    luasSegitigaCanvas.fillText("Tinggi",200 / 2 + 5,200 / 2 + 20);
    luasSegitigaCanvas.fillText("Alas",200 / 2 + 5, 200 - 5);

    kelilingSegitigaCanvas.font = '15px poppins'
    kelilingSegitigaCanvas.fillText("A",50 - 20, 100);
    kelilingSegitigaCanvas.fillText("B",150 + 10, 100);
    kelilingSegitigaCanvas.fillText("C",100 + 10, 200 - 10);
}

const drawTriangle = (id) => {
    const canvas = document.getElementById(id)
    const ctx = canvas.getContext('2d')

    const width = canvas.width;
    const height = canvas.height;

    ctx.beginPath();

    // Tinggi
    ctx.moveTo(width / 2, height);
    ctx.lineTo(width / 2, 0);
    ctx.font = '12px poppins'
    // ctx.fillText("Tinggi",width / 2 + 5,height / 2 + 20);

    ctx.moveTo(0, height);
    ctx.lineTo(width, height);
    // ctx.fillText("Alas",width / 2 + 5, height - 5);

    ctx.moveTo(0, height);
    ctx.lineTo(width / 2, 0);

    ctx.moveTo(width, height);
    ctx.lineTo(width / 2, 0);

    ctx.stroke();
    return ctx;
}

const submitFormLuas = (e) => {
    if (!(e instanceof SubmitEvent)) return;

    e.preventDefault();

    const alas = document.getElementById('alas');
    const tinggi = document.getElementById('tinggi');
    const hasilLuas = document.querySelector('[rel="hasil-luas"]');
    const resetButton = document.querySelector('[rel="reset-luas-segitiga"]');

    const alasValue = parseFloat(alas.value);
    const tinggiValue = parseFloat(tinggi.value);

    if (alasValue < 1 || tinggiValue < 1) return;

    const hasil = 1 / 2 * alasValue * tinggiValue;

    resetButton.classList.remove('is-hidden')
    const resetListener = () => {
        alas.value = 2;
        tinggi.value = 5;
        hasilLuas.innerHTML = '';

        resetButton.classList.add('is-hidden');

        resetButton.removeEventListener('click', resetListener);
    };
    resetButton.addEventListener('click', resetListener)

    hasilLuas.innerHTML = `L = <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline">
                                <mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&#xd7;</mo><mi>${alasValue}</mi><mo>&#xd7;</mo><mi>${tinggiValue}</mi>
                            </math><br> L = ${hasil}`;
}

const submitFormKeliling = (e) => {
    if (!(e instanceof SubmitEvent)) return;

    e.preventDefault();

    const sisiA = document.getElementById('sisi-a');
    const sisiB = document.getElementById('sisi-b');
    const sisiC = document.getElementById('sisi-c');
    const hasilKeliling = document.querySelector('[rel="hasil-keliling"]');
    const resetButton = document.querySelector('[rel="reset-keliling-segitiga"]');

    const sisiAValue = parseFloat(sisiA.value);
    const sisiBValue = parseFloat(sisiB.value);
    const sisiCValue = parseFloat(sisiC.value);

    if (sisiAValue < 1 || sisiBValue < 1 || sisiCValue < 1) return;

    const hasil = sisiAValue + sisiBValue + sisiCValue;

    resetButton.classList.remove('is-hidden')
    const resetListener = () => {
        sisiA.value = 1;
        sisiB.value = 1;
        sisiC.value = 1;
        hasilKeliling.innerHTML = '';

        resetButton.classList.add('is-hidden');

        resetButton.removeEventListener('click', resetListener);
    };
    resetButton.addEventListener('click', resetListener)

    hasilKeliling.innerHTML = `K = <math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>${sisiAValue}</mi><mo>+</mo><mi>${sisiBValue}</mi><mo>+</mo><mi>${sisiCValue}</mi>
                            </math><br>K = ${hasil}`;
}
