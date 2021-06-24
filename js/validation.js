
// 6. Напишите код для валидации формы добавления изображения. Список полей для валидации:
// Хэш-теги
const inputTextHashtags = UploadSelectImage.querySelector('input.text__hashtags');
const inputTextDescription = UploadSelectImage.querySelector('.text__description');

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;

inputTextHashtags.addEventListener(
  'input',
  () => {
    const valueLength = inputTextHashtags.value.length;
    if (valueLength < MIN_HASHTAG_LENGTH) {
      inputTextHashtags.setCustomValidity(`Еще ${MIN_HASHTAG_LENGTH - valueLength} симв.`);
    } else if (valueLength > MAX_HASHTAG_LENGTH) {
      inputTextHashtags.setCustomValidity(`Удалите еще ${valueLength - MAX_HASHTAG_LENGTH} симв.`);
    } else {
      inputTextHashtags.setCustomValidity('');
    }
    inputTextHashtags.reportValidity();
  },
);

function validateFirstLetter(input) {
  let re = /^[#].*/;
  return re.test(input);
}
validateFirstLetter(inputTextHashtags);


// const isHashtag = () =>


// if (isHashtag) {

// }
// function validateUploadForm(evt) {
//   evt.preventDefault();
// }

// UploadSelectImage.addEventListener(
//   'submit',
//   validateUploadForm,
// );

// function customValidation() {};

// customValidation.prototype = {
//   invalidities: [],
//   checkValidity: function(input) {
//     let validity = input.validity;

//     if (validity.rangeUnderflow) {
//       let min = getAttributeValue(input, 'min');
//       this.addInvalidity('The minimum value should be ' + min);
//     }
//   },
//   addInvalidity: function(message) {
//     this.invalidities.push(message);
//   },
//   getInvalidities: function() {
//     return this.invalidities.join('. \n');
//   }
// }
