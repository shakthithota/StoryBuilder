document.getElementById('addSentence').addEventListener('click', addSentence);

function addSentence() {
    const input = document.getElementById('storyInput');
    const sentence = input.value.trim();

    if (sentence !== "") {
        const storyDiv = document.getElementById('story');
        const newSentence = document.createElement('p');
        newSentence.textContent = sentence;
        newSentence.style.color = getRandomColor();
        newSentence.style.margin = '5px 0';
        storyDiv.appendChild(newSentence);
        input.value = '';
        storyDiv.scrollTop = storyDiv.scrollHeight; // Auto-scroll to the bottom
    }
}
document.getElementById('clearStory').addEventListener('click', clearStory);

function clearStory() {
    const storyDiv = document.getElementById('story');
    storyDiv.innerHTML = ''; // Clear the story content
}

function getRandomColor() {
    const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1', '#955251', '#b565a7', '#009b77', '#dd4124', '#d65076'];
    return colors[Math.floor(Math.random() * colors.length)];
}