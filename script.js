const buttons = document.querySelectorAll('#container button');

let lights = {};

function lightUp(event) {
    
    const buttonNumberId = Number(event.target.id);
    const selectedButton = document.getElementById(String(buttonNumberId));

    const nearbyButtons = {
        superior: document.getElementById(String(buttonNumberId - 10)),
        inferior: document.getElementById(String(buttonNumberId + 10)),
        left: document.getElementById(String(buttonNumberId - 1)),
        right: document.getElementById(String(buttonNumberId + 1))
    }

    function changeColor(color) {
        selectedButton.style.backgroundColor = color;
        selectedButton.style.borderColor = color;
    }

    if (!lights[buttonNumberId] && !selectedButton.hasAttribute("class", "verified")) {
        changeColor("#ff0000")
        selectedButton.setAttribute("class", "verified");
    } else if (lights[buttonNumberId] && !selectedButton.hasAttribute("class", "verified")) {
        changeColor("#ff0000")
        selectedButton.setAttribute("class", "verified");
    } else if (!lights[buttonNumberId] && selectedButton.hasAttribute("class", "verified")) {
        changeColor("#2b2b2b")
        selectedButton.removeAttribute("class");
    } else if (lights[buttonNumberId] && selectedButton.hasAttribute("class", "verified")) {
        changeColor("#2b2b2b")
        selectedButton.removeAttribute("class");
    }

    function nearbyChangeColor(side) {

        function nearbyChangeColor(color) {
            side.style.backgroundColor = color;
            side.style.borderColor = color;
        }

        try {
            if (!lights[side] && !side.hasAttribute("class", "verified")) {
                nearbyChangeColor("#ff0000")
                side.setAttribute("class", "verified");
            } else if (lights[side] && !side.hasAttribute("class", "verified")) {
                nearbyChangeColor("#ff0000")
                side.setAttribute("class", "verified");
            } else if (!lights[side] && side.hasAttribute("class", "verified")) {
                nearbyChangeColor("#2b2b2b")
                side.removeAttribute("class", "verified");
            } else if (lights[side] && side.hasAttribute("class", "verified")) {
                nearbyChangeColor("#2b2b2b")
                side.removeAttribute("class", "verified");
            }
        } catch {}

    }
    nearbyChangeColor(nearbyButtons.superior);
    nearbyChangeColor(nearbyButtons.inferior);
    nearbyChangeColor(nearbyButtons.left);
    nearbyChangeColor(nearbyButtons.right);
}

buttons.forEach(button => {
    const imagem = button.getAttribute("data-imagem");
    button.style.backgroundImage = `url("${imagem}")`;
    button.style.backgroundSize = "cover";
});

buttons.forEach((button) => button.addEventListener("click", lightUp));