export const useHandleError = (step, forms) => {
  const errorValue = {};

  if (step === 1) {
    if (forms.firstName === "") {
      errorValue.firstName = "Нэрээ оруулна уу";
    }
    if (forms.lastName === "") {
      errorValue.lastName = "Овгоо оруулна уу";
    }
    if (forms.userName === "") {
      errorValue.userName = "Хэрэглэгчийн нэрээ оруулна уу";
    }
  }

  if (step === 2) {
    if (forms.eMail === "") {
      errorValue.eMail = "Мэйл хаяг оруулна уу";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(forms.eMail)
    ) {
      errorValue.eMail = "Зөв мэйл хаяг оруулна уу";
    }

    if (forms.phoneNumber === "") {
      errorValue.phoneNumber = "Утасны дугаараа оруулна уу";
    } else if (!/^[89]\d{7}$/.test(forms.phoneNumber)) {
      errorValue.phoneNumber = "8 оронтой дугаар оруулна уу";
    }

    if (forms.password === "") {
      errorValue.password = "Нууц үгээ оруулна уу";
    } else if (!/^[0-9]{6}$/.test(forms.password)) {
      errorValue.password = "6 оронтой тоо оруулна уу";
    }

    if (forms.confirmPassword === "") {
      errorValue.confirmPassword = "Нууц үгээ давтаж оруулна уу";
    } else if (forms.password !== forms.confirmPassword) {
      errorValue.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна";
    }
  }

  if (step === 3) {
    if (forms.dateOfBirth === "") {
      errorValue.dateOfBirth = "Төрсөн өдрөө оруулна уу";
    } else {
      const today = new Date();
      const birthDate = new Date(forms.dateOfBirth);

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 18) {
        errorValue.dateOfBirth = "Та 18 ба түүнээс дээш настай байх ёстой";
      }
    }

    if (forms.profileImage === "") {
      errorValue.profileImage = "Профайл зурагаа оруулна уу";
    }
  }

  return { errorValue };
};
