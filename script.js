function loginUser(event) {
  event.preventDefault();

  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  // Hozircha faqat demo uchun yozilgan login
  const demoPhone = "+998912345678";
  const demoPassword = "12345";

  if (phone === demoPhone && password === demoPassword) {
    alert("✅ Muvaffaqiyatli kirdingiz!");
    window.location.href = "student.html"; // O‘quvchi sahifasiga yo‘naltirish
  } else {
    alert("❌ Telefon raqam yoki parol noto'g'ri!");
  }
}
