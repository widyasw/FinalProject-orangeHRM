# Automation Test for OrangeHRM Demo

Proyek ini berisi automation testing menggunakan **Cypress** pada website [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/).  
Testing mencakup fitur **Login**, **Forgot Password**, serta menu **Directory**.  
Struktur menggunakan **Page Object Model (POM)** dan **Intercept** untuk pengujian API.  

---

## Structure

```
cypress/
 ├── e2e/
 │     ├── Login.cy.js
 │     ├── ForgotPassword.cy.js
 │     └── Directory.cy.js
 ├── fixtures/
 │     ├── LoginData.json
 │     ├── ForgotPasswordData.json
 │     └── DirectoryData.json
 ├── Pages/
 │     ├── LoginPage.js
 │     ├── ForgotPasswordPage.js
 │     └── DirectoryPage.js
 └── Support/
       ├── commands.js
       └── e2e.js
```

---

## Fitur yang Diuji

1. **Login**
   - Valid login (username & password benar)
   - Invalid login (username & password salah)
   - Username valid & password empty
   - Username empty & password valid
   - Username & password empty

2. **Forgot Password**
   - Open forgot password page
   - Reset password with valid username
   - Reset password with empty username
   - Cancel reset password

3. **Directory**
   - Open directory page
   - Search employee exists
   - Search employee not found

---

## 🛠️ Tools

- Cypress untuk end-to-end testing
- Page Object Model (POM) untuk struktur test lebih rapi
- Cypress Intercept untuk memantau request API

---

## Instalasi

1. Clone repository ini:
   ```bash
   git clone [https://github.com/widyasw/FinalProject-orangeHRM.git]
   cd FinalProject-orangeHRM
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan Cypress:
   ```bash
   npx cypress open
   ```

---

