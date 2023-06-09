// Form fields
import * as Yup from "yup";
import "yup-phone";

export const loginFields = {
  email: "",
  password: "",
};

export const registerFields = {
  name: "",
  phone: "",
  email: "",
  password: "",
  sex: "",
  admin: false,
};

export const adminFields = (currentProduct) => {
  return currentProduct
    ? {
        name: currentProduct.name,
        category: currentProduct.category,
        price: currentProduct.price,
        img: currentProduct.img,
      }
    : {
        name: "",
        category: "",
        price: "",
        img: "",
      };
};

// Validate Scheme
export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Неправильный email").required("Обязательное поле"),
  password: Yup.string()
    .required("Обязательное поле")
    .min(8, "Пароль должен содержать минимум 8 символов")
    .matches(
      /.*[a-z].*/,
      "Пароль должен содержать хотя бы один символ в нижнем регистре"
    )
    .matches(
      /.*[A-Z].*/,
      "Пароль должен содержать хотя бы один символ в верхнем регистре"
    )
    .matches(/.*[0-9].*/, "Пароль должен содержать хотя бы одну цифру"),
});

export const SignupSchema = Yup.object({
  name: Yup.string()
    .required("Обязательное поле для заполнения")
    .min(2, "Не менее двух символов"),
  phone: Yup.string()
    .required("Номер телефона обязателен")
    .phone("+7", false, "Введите корректный номер телефона +7"),
  email: Yup.string()
    .required("Обязательное поле для заполнения")
    .email("Неправильно введён email"),
  password: Yup.string()
    .required("Обязательное поле")
    .min(8, "Пароль должен содержать минимум 8 символов")
    .matches(
      /.*[a-z].*/,
      "Пароль должен содержать хотя бы один символ в нижнем регистре"
    )
    .matches(
      /.*[A-Z].*/,
      "Пароль должен содержать хотя бы один символ в верхнем регистре"
    )
    .matches(/.*[0-9].*/, "Пароль должен содержать хотя бы одну цифру"),
  sex: Yup.string().required("Обязательно укажите пол"),
});

export const AddingOrChangingSchema = Yup.object({
  name: Yup.string()
    .required("Обязательное поле для заполнения")
    .min(3, "Не менее трёх символов"),
  category: Yup.string().required("Обязательно выберите категорию"),
  price: Yup.number()
    .required("Обязательно установите цену")
    .typeError("Цена должна быть числом")
    .min(30, "Минимум 30 рублей"),

  img: Yup.string().url("Картинка должна быть в формате URL"),
});
