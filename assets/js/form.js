const form = document.querySelector('.contacts__form');
const formNotification = document.querySelector('.contacts__form-notification');

const ALL_ERROR_ELEMENTS = document.querySelectorAll('.contacts__form-error');
const ERROR_ELEMENTS = {
  name: ALL_ERROR_ELEMENTS[0],
  email: ALL_ERROR_ELEMENTS[1],
  message: ALL_ERROR_ELEMENTS[2],
};

function validateName(name) {
  if (name.length < 5) {
    return 'Слишком короткое имя';
  }
}

function validateEmail(email) {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (!EMAIL_REGEXP.test(email)) {
    return 'Некорректная электронная почта. Попробуйте ещё раз';
  }
}

function validateMessage(message) {
  if (message.length === 0) {
    return 'Сообщение не может быть пустым';
  }
}

async function sendMessage(data) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return 'К сожалению, произошла ошибка';
    }

    return 'Сообщение было успешно отправлено';
  } catch {
    return 'Что-то пошло не так...';
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const errors = {
    name: validateName(data.name),
    email: validateEmail(data.email),
    message: validateMessage(data.message),
  };

  let isValidForm = true;

  for (const key in errors) {
    if (!errors[key]) {
      ERROR_ELEMENTS[key].innerText = '';
      ERROR_ELEMENTS[key].classList.remove('contacts__form-error_active');
      continue;
    }

    ERROR_ELEMENTS[key].innerText = errors[key];
    ERROR_ELEMENTS[key].classList.add('contacts__form-error_active');
    isValidForm = false;
  }

  if (isValidForm) {
    formNotification.innerText = await sendMessage(data);
  }
});

