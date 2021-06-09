/*

// AN ARRAY with 25 generated objects. Each array contains a photocard;
    let galleryArray = new Array (25);
    // THE PHOTOCARD shall include the following:
    let photocardArray = {
      id: NumberArrays,
      url: urlPath,
      description: SomeTextArray,
      likes: photoLikes,
      comments: commentsArray,
    }

 */
// EACH ITEM IS AN ARRAY!
// EACH ARRAY HAS REQUIREMENTS!

// ID. numeric; unique, min = 1; max = 25;
// - id;
// let NumberArrays = []

//   for (let i = 1; i <= 25; i++) {
//     idNumber = i;
//     NumberArrays.push(idNumber);
//   }


// URL. img; src 'i.jpg'; let i; min = 1; max = 25;
// - url;
// let urlPath;

//   for (let i = 1; i <= 25; i++) {
//     urlPath = i;
//     console.log(`photos/${urlPath}.jpg`);

// }

// DESCRIPTION. text; generated.
// - description;
// let quotesArray = [
//   'Кекстаграммная котейка',
//   'Блудливый котян',
//   'Ночной пуритан',
//   'Предсказуемый кот-жрец',
//   'Развратный жмурик',
// ]

// let descriptionIndex;
// let getRandomQuote = function () {
//   descriptionIndex = Math.floor(Math.random()*quotesArray.length);
//   quotesArray[descriptionIndex];
// }
// getRandomQuote();
// console.log(quotesArray[descriptionIndex]);

// LIKES. numeric; random; min = 15 max = 200.
// - likes;
// let photoLikes;
const ERROR_MESSAGE = new Error('Невозможно разобрать входные данные');
let randomNumber;
function getRandomInt(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber >= 0, max >= min) {
    min = Math.ceil(min);
    max = Math.floor(max);
  }

  if (max < min) {
    throw ERROR_MESSAGE;
  }
  return randomNumber;
}
// photoLikes = RANDOM;
// getRandomInt(15, 200);


// COMMENTS. text; Array; comment list; amount = random;
// - comments;
// let comments;

// let commentsArray = {
//   id: ,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: commentNames,
// }

// COMMENT ID. numeric; random; unique;
let randomIdArray = [];
let currentRandomNumber;

for (let j = 1; j <= 25; j++) {
  currentRandomNumber = getRandomInt(1, 1000);
  randomIdArray.push(currentRandomNumber);
}

// const TEXT_VALUE = 'Строка - но не сто сорок символов';
// const LENGTH_NUMBER = TEXT_VALUE.length;
//
// function getLength(inspectedLine, maxLength) {
//   if (LENGTH_NUMBER <= maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// getLength();


// COMMENT avatar. string; value min = 1 max = 6 i.e. avatar-6.svg;
// - avatar field;

// COMMENT MESSAGE. one or two sentences to be included as an examp

// Всё отлично!
// В целом всё неплохо. Но не всё.
// Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
// Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
// Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
// Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!

// СOMMENT NAMES. text; random; Optional;
// commentNames
// let FirstName = {
//   title: 'Антуан',
//   title: 'Сильвуплэ',
//   title: 'Рикки',
//   title: 'Максимильян',
// }

// let SurNames = {
//   SurName: 'Дзюба',
//   SurName: 'Рошан',
//   SurName: 'Шекспиров',
//   SurName: 'Дебильный',
// }

// // Второе задание!

// const TEXT_VALUE = 'Строка - но не сто сорок символов';
// const LENGTH_NUMBER = TEXT_VALUE.length;

// function getLength(inspectedLine, maxLength) {
//   if (LENGTH_NUMBER <= maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// }

// getLength();
