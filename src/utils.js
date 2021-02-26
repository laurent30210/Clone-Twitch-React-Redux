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
    default:
      return language;
  }
}

export function changeTypeNumberOfViewers(number) {
  return number.toLocaleString();
}
