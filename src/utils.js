// eslint-disable-next-line import/prefer-default-export
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
    default:
      return language;
  }
}

export function changeTypeNumberOfViewers(number) {
  return Math.abs(number) > 999 ? `${Math.sign(number) * ((Math.abs(number) / 1000).toFixed(1))}k` : Math.sign(number) * Math.abs(number);
}
