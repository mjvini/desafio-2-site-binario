document.addEventListener('DOMContentLoaded', function () {

    var speechBalloon = document.getElementById('speechBalloon');
    var textElement = document.getElementById('text');

    var texts = [
        "Bzzz!  Zumbidos curiosos, amiguinhos! Vamos falar sobre a base decimal, que é como falamos os números no dia a dia. Vocês já devem estar acostumados...",
        "Na base decimal, usamos dez algarismos: 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9. Vamos ver o número 29, por exemplo...",
        "Nele o \"2\" está na casa das dezenas, e o \"9\" está na casa das unidades. Isso quer dizer que o número 29 é o mesmo que (2*10) + (9*1). Simples, né?...",
        "Agora vamos olhar para o número 99. Se somarmos 1 temos 100, certo? Mas por que será?...",
        "Na base decimal a casa mais à direita representa o 1 (a casa das unidades), e cada casa que adicionamos à esquerda é 10 vezes maior que a anterior...",
        "Em 99 temos o \"9\" na casa das dezenas e o \"9\" na casa das unidades, isso é o mesmo que (9*10) + (9*1), exatamente igual no 29. A nossa maior casa em 99 vale 10, a casa das dezenas, então adicionamos mais uma: essa vale 100!!...",
        "Agora fica fácil: 100 na base decimal é o mesmo que (1 * 100) + (0 * 10) + (0 * 1), ou seja, 100+0+0. Demais, não é mesmo?...",
        "Não é legal ver como os números do nosso dia a dia funcionam? Vamos entender mais um pouco sobre eles no balãozinho debaixo! Bzzz!"
    ];

    var currentTextIndex = 0;
    var currentLetterIndex = 0;

    var timeoutId;

    function updateText() {
        if (currentLetterIndex <= texts[currentTextIndex].length) {
            textElement.textContent = texts[currentTextIndex].slice(0, currentLetterIndex);
            currentLetterIndex++;
            timeoutId = setTimeout(updateText, 50);
        } else {
            currentLetterIndex = 0;
            if (currentTextIndex < texts.length - 1) {
                currentTextIndex++;
            } else {
                 return;
                // currentTextIndex = 0;
            }
        }
    }

    document.addEventListener('keypress', function () {
        clearTimeout(timeoutId);
        updateText();
    });

    updateText();
});
