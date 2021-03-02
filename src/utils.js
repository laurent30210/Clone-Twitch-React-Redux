/* eslint-disable eqeqeq */
// eslint-disable-next-line import/prefer-default-export

// function that is used to modify languages coming from the api
export function changeTypeTextLanguage(language) {
  switch (language) {
    case 'fr':
      return 'Français';
    case 'en':
      return 'Anglais';
    case 'ru':
      return 'Russe';
    case 'de':
      return 'Allemand';
    case 'es':
      return 'Espagnol';
    case 'ja':
      return 'Japonnais';
    case 'ch':
      return 'Chinois';
    case 'ko':
      return 'Coréen';
    case 'pt':
      return 'Portugais';
    default:
      return language;
  }
}

// fucntion for transform the visual of the number of viewers
export function changeTypeNumberOfViewers(number) {
  return Math.abs(number) > 999 ? `${Math.sign(number) * ((Math.abs(number) / 1000).toFixed(1))}k` : number;
}

export function findNameForThisChannel(stream) {
  let gameName = '';
  gameName.toUpperCase();
  if (stream == 'Just Chatting') {
    gameName = 'Discussion';
    return gameName;
  }
  gameName = stream;
  return gameName;
}

export function colorsRandom() {
  const arrayColors = ['#ffa500', '#ff516e', '#10c437', '#a010c4', '#0f42e9', '#c7144a', '#800080'];
  const index = Math.floor(Math.random() * arrayColors.length);
  return arrayColors[index];
}
