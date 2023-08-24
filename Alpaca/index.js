const accessorizeButtons = document.querySelector('.accessorize-buttons');
const stylesButtons = document.querySelector('#styles-buttons');
const alpacaPreview = document.querySelector('.alpaca-preview');

const accessoriesMap={
  earings: "../alpaca/accessories/earings.png",
  flower: "../alpaca/accessories/flower.png",
  glasses: "../alpaca/accessories/glasses.png",
  default: "../alpaca/accessories/headphone.png",
};

const backgroundsMap={
  default: "../alpaca/backgrounds/blue50.png",
  blue60: "../alpaca/backgrounds/blue60.png",
  blue70: "../alpaca/backgrounds/blue70.png",
  darkblue30: "../alpaca/backgrounds/darkblue30.png",
  darkblue50: "../alpaca/backgrounds/darkblue50.png",
  darkblue: "../alpaca/backgrounds/darkblue70.png",
  green50: "../alpaca/backgrounds/green50.png",
  green: "../alpaca/backgrounds/green60.png",
  green70: "../alpaca/backgrounds/green60.png",
  grey: "../alpaca/backgrounds/grey40.png",
  grey70: "../alpaca/backgrounds/grey70.png",
  grey80: "../alpaca/backgrounds/grey80.png",
  red50: "../alpaca/backgrounds/red50.png",
  red: "../alpaca/backgrounds/red60.png",
  red70: "../alpaca/backgrounds/red70.png",
  yellow50: "../alpaca/backgrounds/yellow50.png",
  yellow: "../alpaca/backgrounds/yellow60.png",
  yellow70: "../alpaca/backgrounds/yellow70.png",
};

const earsMap={
  default: "../alpaca/ears/default.png",
  tiltbackward: "../alpaca/ears/tilt-backward.png",
  tiltforward: "../alpaca/ears/tilt-forward.png",
};

const eyesMap={
  default: "../alpaca/eyes/default.png",
  angry: "../alpaca/eyes/angry.png",
  naughty: "../alpaca/eyes/naughty.png",
  panda: "../alpaca/eyes/panda.png",
  smart: "../alpaca/eyes/smart.png",
  star: "../alpaca/eyes/star.png",
};

const hairMap={
  default: "../alpaca/hair/default.png",
  bang: "../alpaca/hair/bang.png",
  curls: "../alpaca/hair/curls.png",
  elegant: "../alpaca/hair/elegant.png",
  fancy: "../alpaca/hair/fancy.png",
  quiff: "../alpaca/hair/quiff.png",
  short: "../alpaca/hair/short.png",
};

const legMap={
  default: "../alpaca/leg/default.png",
  bubbletea: "../alpaca/leg/bubble-tea.png",
  cookie: "../alpaca/leg/cookie.png",
  gameconsole: "../alpaca/leg/game-console.png",
  tiltbackward: "../alpaca/leg/tilt-backward.png",
  tiltforward: "../alpaca/leg/tilt-forward.png",
};

const mouthMap={
  default: "../alpaca/mouth/default.png",
  astonished: "../alpaca/mouth/astonished.png",
  eating: "../alpaca/mouth/eating.png",
  laugh: "../alpaca/mouth/laugh.png",
  tongue: "../alpaca/mouth/tongue.png",
};
const neckMap={
  bendbackward: "../alpaca/neck/bend-backward.png",
  bendforward: "../alpaca/neck/bend-forward.png",
  default: "../alpaca/neck/default.png",
  thick: "../alpaca/neck/thick.png",
};
const noseMap={
  nose: "../alpaca/nose.png"
};

// Add click event listeners to each accessorize button
accessorizeButtons.addEventListener('click', function(event) {
  if (event.target.classList.contains('hair-button') ||
      event.target.classList.contains('ears-button') ||
      event.target.classList.contains('eyes-button') ||
      event.target.classList.contains('mouth-button') ||
      event.target.classList.contains('neck-button') ||
      event.target.classList.contains('leg-button') ||
      event.target.classList.contains('accessories-button') ||
      event.target.classList.contains('background-button')) {
    const accessory = event.target.textContent.toLowerCase(); // Convert button text to lowercase
    const styleButtons = getStyleButtonsForAccessory(accessory);
    stylesButtons.innerHTML = ''; // Clear existing style buttons
    stylesButtons.appendChild(styleButtons);
    
    
  }
}
);

document.addEventListener('click', function(event) {
  // Check if the clicked element is one of the dynamically created buttons
  if (event.target.classList.contains('hairAccessory')) {
      const button = event.target.textContent.toLowerCase();
      const hair=document.getElementById('hair');

      hair.setAttribute('src', hairMap[button]);
  }
  if (event.target.classList.contains('earsAccessory')) {
    const button = event.target.textContent.toLowerCase();
    const ears=document.getElementById('ears');

    ears.setAttribute('src', earsMap[button]);
}

  if (event.target.classList.contains('eyesAccessory')) {
  const button = event.target.textContent.toLowerCase();
  const eyes=document.getElementById('eyes');

  eyes.setAttribute('src', eyesMap[button]);
}

  if (event.target.classList.contains('mouthAccessory')) {
  const button = event.target.textContent.toLowerCase();
  const mouth=document.getElementById('mouth');

  mouth.setAttribute('src', mouthMap[button]);
}

  if (event.target.classList.contains('neckAccessory')) {
  const button = event.target.textContent.toLowerCase();
  const neck=document.getElementById('neck');

  neck.setAttribute('src', neckMap[button]);
}

  if (event.target.classList.contains('legAccessory')) {
  const button = event.target.textContent.toLowerCase();
  const leg=document.getElementById('leg');

  leg.setAttribute('src', legMap[button]);
}

  if (event.target.classList.contains('accessoriesAccessory')) {
  const button = event.target.textContent.toLowerCase();
  const accessories=document.getElementById('accessories');

  accessories.setAttribute('src', accessoriesMap[button]);
}

  if (event.target.classList.contains('backgroundAccessory')) {
  const button = event.target.textContent.toLowerCase();
  const bgUrl = backgroundsMap[button];
  alpacaPreview.style.backgroundImage = `url(${bgUrl})`;
}

});


function getStyleButtonsForAccessory(accessory) {
  const styleButtons = document.createElement('div');

  switch (accessory) {
    case 'hair':
        createStyleButton(styleButtons, accessory, 'Bang');
        createStyleButton(styleButtons, accessory, 'Curls');
        createStyleButton(styleButtons, accessory, 'Elegant');
        createStyleButton(styleButtons, accessory, 'Fancy');
        createStyleButton(styleButtons, accessory, 'Quiff');
        createStyleButton(styleButtons, accessory, 'Short');
        createStyleButton(styleButtons, accessory, 'Default');
        break;
    case 'ears':
        createStyleButton(styleButtons, accessory, 'TiltBackward');
        createStyleButton(styleButtons, accessory, 'TiltForward');
        createStyleButton(styleButtons, accessory, 'Default');
        break;
    case 'eyes':
        createStyleButton(styleButtons, accessory, 'Angry');
        createStyleButton(styleButtons, accessory, 'Naughty');
        createStyleButton(styleButtons, accessory, 'Panda');
        createStyleButton(styleButtons, accessory, 'Smart');
        createStyleButton(styleButtons, accessory, 'Star');
        createStyleButton(styleButtons, accessory, 'Default');
        break;
    case 'leg':
        createStyleButton(styleButtons, accessory, 'BubbleTea');
        createStyleButton(styleButtons, accessory, 'Cookie');
        createStyleButton(styleButtons, accessory, 'GameConsole');
        createStyleButton(styleButtons, accessory, 'TiltBackward');
        createStyleButton(styleButtons, accessory, 'TiltForward');
        createStyleButton(styleButtons, accessory, 'Default');
        break;
    case 'mouth':
        createStyleButton(styleButtons, accessory, 'Astonished');
        createStyleButton(styleButtons, accessory, 'Eating');
        createStyleButton(styleButtons, accessory, 'Laugh');
        createStyleButton(styleButtons, accessory, 'Tongue');
        createStyleButton(styleButtons, accessory, 'Default');
        break;
    case 'neck':
        createStyleButton(styleButtons, accessory, 'BendBackward');
        createStyleButton(styleButtons, accessory, 'BendForward');
        createStyleButton(styleButtons, accessory, 'Thick');
        createStyleButton(styleButtons, accessory, 'Default');
        break;
    case 'background':
        createStyleButton(styleButtons, accessory, 'DarkBlue');
        createStyleButton(styleButtons, accessory, 'Green');
        createStyleButton(styleButtons, accessory, 'Grey');
        createStyleButton(styleButtons, accessory, 'Red');
        createStyleButton(styleButtons, accessory, 'Yellow');
        createStyleButton(styleButtons, accessory, 'Default');
        break;
    case 'accessories':
        createStyleButton(styleButtons, accessory, 'Earings');
        createStyleButton(styleButtons, accessory, 'Flower');
        createStyleButton(styleButtons, accessory, 'Glasses');
        createStyleButton(styleButtons, accessory, 'Default');
        break;

    default:
        break;
  }

  return styleButtons;
}

function createStyleButton(parent, accessory, styleName) {
  const styleButton = document.createElement('button');
  styleButton.className = 'style-button' +' '+ accessory + 'Accessory';
  styleButton.textContent = styleName;
  parent.appendChild(styleButton);
}


