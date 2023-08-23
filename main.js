let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector(".voice-select"); // Update the selector

window.speechSynthesis.onvoiceschanged = () => {
    setTimeout(() => {
        voices = window.speechSynthesis.getVoices();
        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    }, 1000); // Add a delay of 1 second (adjust as needed)
};


voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
