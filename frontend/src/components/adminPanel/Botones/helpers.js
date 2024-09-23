export function displaySelectedImage(event, imageId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.getElementById(imageId);
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
        }
    }
    
    export function limitarPalabras(textarea, maxWords) {
        const words = textarea.value.split(/\s+/);
        if (words.length > maxWords) {
        textarea.value = words.slice(0, maxWords).join(' ');
        }
    }
    
    export function mostrarPalabrasRestantes(textarea, maxWords) {
        const words = textarea.value.split(/\s+/);
        const wordsRemaining = maxWords - words.length;
        const feedback = document.getElementById('feedbackPalabrasRestantes');
        feedback.textContent = `Palabras restantes: ${wordsRemaining}`;
    }