// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    var speechBalloon = document.getElementById('speechBalloon');
    var textElement = document.getElementById('text');

    // Array of texts to display
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

    // Variables to keep track of the current text and letter index
    var currentTextIndex = 0;
    var currentLetterIndex = 0;

    // Variable to store the timeout ID for animation
    var timeoutId;

    // Function to update text with animation
    function updateText() {
        // Check if there are more letters to display
        if (currentLetterIndex <= texts[currentTextIndex].length) {
            // Update the text content with the current slice of the text
            textElement.textContent = texts[currentTextIndex].slice(0, currentLetterIndex);
            // Increment the letter index for the next slice
            currentLetterIndex++;
            // Set a timeout to call the function again after a delay
            timeoutId = setTimeout(updateText, 50);
        } else {
            // If all letters are displayed, reset the letter index
            currentLetterIndex = 0;
        }
    }

    // Event listener for keypress to trigger text change
    document.addEventListener('keypress', function () {
        // Clear the timeout to stop the animation
        clearTimeout(timeoutId);
        // Change to the next text in the array
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        // Start the text animation again
        updateText();
    });

    // Initial start of the text animation when the page loads
    updateText();
});
