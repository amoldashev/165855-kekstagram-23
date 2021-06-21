// 2. Пропишите тегу <form> правильные значения атрибутов method и адрес action для отправки формы на сервер.
// Форма загрузки
const UploadSelectImage = document.querySelector('#upload-select-image');
// Поле загрузки файлов
const inputUploadFile = UploadSelectImage.querySelector('#upload-file');

// Функция изменяет метод отправки формы
const setMethod = () => UploadSelectImage.method = 'post';

// Функция назначает атрибуту action адрес отправки формы
const setAction = () => UploadSelectImage.action = 'https://23.javascript.pages.academy/kekstagram';

// 3. Проверьте разметку вашего проекта и добавьте недостающие атрибуты.
// Например, всем обязательным полям нужно добавить атрибут required.
const inputList = document.querySelectorAll('input');

// const inputScaleControl = document.querySelector('input.scale__control'); // К примеру
// const scaleControlAttr = inputScaleControl.setAttribute("required", ""); // К примеру
inputUploadFile.required = true;

// Ни одному инпуту кроме input.upload-file не нужно задавать required. По умолчанию, указан required.

// Затем проверьте, правильные ли типы стоят у нужных полей, если нет — проставьте правильные


// 4. Изучите, что значит загрузка изображения, и как, когда и каким образом
// показывается форма редактирования изображения. Напишите код и добавьте необходимые
// обработчики для реализации этого пункта техзадания. В работе вы можете опираться
// на код показа окна с полноразмерной фотографией, который вы, возможно, уже написали
// в предыдущей домашней работе.
const imgUploadOverlay = document.querySelector('.img-upload__overlay')
const body = document.querySelector('body');

/* Кнопка для закрытия формы редактирования изображения*/
const uploadCancel = document.querySelector('#upload-cancel');

// EventListener во время изменения состояния поля загрузки файла
UploadSelectImage.addEventListener('change', function () {
  const removeHidden = imgUploadOverlay.classList.remove('hidden');
  const addModalOpen = body.classList.add('modal-open');
});

// 5. После реализуйте закрытие формы.

// при закрытии формы дополнительно необходимо сбрасывать значение поля выбора файла
// #upload-file. В принципе, всё будет работать, если при повторной попытке загрузить
// в поле другую фотографию. Но! Событие change не сработает, если пользователь попробует
// загрузить ту же фотографию, а значит окно с формой не отобразится, что будет нарушением техзадания.
// Значение других полей формы также нужно сбрасывать.

uploadCancel.addEventListener(
  'click',
  function (evt) {
    evt.preventDefault();
    uploadCancel.tabIndex = "0"; // tabindex для кнопки закрытия формы редактирования
    inputUploadFile.value = ""; // Значение поля загрузки нужно сбрасывать.
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  },
)

uploadCancel.addEventListener(
  'keydown',
  function(evt) {
    if (evt.keyCode === 27) { // Проверяем, что код клавиши равен 27
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

// uploadCancel.classList
// const showUploadFile = () => inputUploadFile.classList.remove('visually-hidden');

// 6. Напишите код для валидации формы добавления изображения. Список полей для валидации:

// Хэш-теги
UploadSelectImage.addEventListener(
  'submit',
  validateUploadForm,
);

function validateUploadForm(evt) {
  evt.preventDefault();

  const inputHashtags = UploadSelectImage.querySelector('input.text__hashtags');
  const inputTextDescription = UploadSelectImage.querySelector('.text__description');

  let errors = [];

  if (inputHashtags.value == "") {
    errors.push({text: "Хэштэг", el: inputHashtags});
  }

  if (inputTextDescription.value == "") {
    errors.push({text: "Текстовое поле", el: inputTextDescription});
  }
  if (errors.length > 0) {
    alert('ERRORS');
    return false;
  }
}
// Комментарий

// 7. Реализуйте логику проверки так, чтобы, как минимум, она срабатывала при попытке отправить форму
// и не давала этого сделать, если форма заполнена не по правилам. При желании, реализуйте проверки
//  сразу при вводе значения в поле.

// Как отменить обработчик Esc при фокусе?
// Задача не имеет одного верного решения, однако намекнём на самый простой — использовать stopPropagation
// для события нажатия клавиш в поле при фокусе

// Валидация хеш-тегов?
// Поля, не перечисленные в техзадании, но существующие в разметке, особой валидации не требуют.
