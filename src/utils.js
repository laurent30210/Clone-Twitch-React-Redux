/* eslint-disable no-tabs */
/* eslint-disable eqeqeq */
// eslint-disable-next-line import/prefer-default-export

// function that is used to modify languages coming from the api

/*
Amharic 	am
Arabic 	ar
Basque 	eu
Bengali 	bn
English (UK) 	en-GB
Portuguese (Brazil) 	pt-BR
Bulgarian 	bg
Catalan 	ca
Cherokee 	chr
Croatian 	hr
Czech 	cs
Danish 	da
Dutch 	nl
English (US) 	en
Estonian 	et
Filipino 	fil
Finnish 	fi
French 	fr
German 	de
Greek 	el
Gujarati 	gu
Hebrew 	iw
Hindi 	hi
Hungarian 	hu
Icelandic 	is
Indonesian 	id
Italian 	it
Japanese 	ja
Kannada 	kn
Korean 	ko
Latvian 	lv
Lithuanian 	lt
Malay 	ms
Malayalam 	ml
Marathi 	mr
Norwegian 	no
Polish 	pl
Portuguese (Portugal) 	pt-PT
Romanian 	ro
Russian 	ru
Serbian 	sr
Chinese (PRC) 	zh-CN
Slovak 	sk
Slovenian 	sl
Spanish 	es
Swahili 	sw
Swedish 	sv
Tamil 	ta
Telugu 	te
Thai 	th
Chinese (Taiwan) 	zh-TW
Turkish tr
Urdu ur
Ukrainian uk
Vietnamese vi
Welsh cy
*/

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
    case 'pl':
      return 'Polonais';
    case 'tr':
      return 'Turc';
    case 'en-gb':
      return 'Anglais';
    case 'th':
      return 'Thailandais';
    case 'pt-br':
      return 'Portugais';
    case 'it':
      return 'Italien';
    case 'zh-tw':
      return 'Mandarin';
    case 'es-mx':
      return 'Espagnol';
    case 'nl':
      return 'Pays-Bas';
    case 'fi':
      return 'Finnois';
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
