# Classifrutas Starter Project

Welcome to the **Classifrutas Starter Project**, a starter structure for projects using **Laravel**, **Vue.js**, **PostgreSQL**, and **Nginx**, fully configured with **Docker**.

---

## 📦 Project Structure

```plaintext
project/
├── etc/                    # Service configurations
│   ├── nginx/              # Nginx configurations
│   ├── php/                # PHP configuration
│   └── node/               # Node.js configuration
├── web/                    # Source code
│   ├── classifrutas.com.br/
│   │   ├── laravel/        # Backend in Laravel
│   │   ├── vue/            # Frontend in Vue.js
│   │   └── README.md       # Project documentation
├── docker-compose.yml      # Docker configuration
```

---

## 🚀 Technologies Used

- **Backend:** Laravel
- **Frontend:** Vue.js
- **Database:** PostgreSQL
- **Web Server:** Nginx
- **Container Management:** Docker Compose
- **CSS Framework:** Bootstrap 5

---

## ⚙️ Initial Setup

### **Requirements**

Make sure you have installed:

- Docker
- Docker Compose

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/jvbhidalgo/LaravelVue.git classifrutas.com.br
   cd classifrutas.com.br
   ```

2. Set environment variables in the `.env` file (example):

   ```dotenv
   APP_ENV=local
   APP_DEBUG=true
   DB_CONNECTION=pgsql
   DB_HOST=db
   DB_PORT=5432
   DB_DATABASE=classifrutas_db
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   ```

3. Start the project with Docker Compose:

   ```bash
   docker compose up --build
   ```

   Docker, Nginx, and other files are compressed in the .zip archive.

---

## 🔧 How to Use

### Local Access

- **Frontend Vue.js:** [http://classifrutas.local:88](http://classifrutas.local:88)
- **API Laravel:** [http://api.classifrutas.local:88](http://api.classifrutas.local:88)

### Useful Commands

```bash
# Start containers
docker compose up --build

# Stop containers
docker compose down

# View service logs
docker compose logs nginx
```

---

## 📂 Folder Structure and Services

| Service    | Path                              | Description          |
| ---------- | --------------------------------- | -------------------- |
| Laravel    | `web/classifrutas.com.br/laravel` | Backend API          |
| Vue.js     | `web/classifrutas.com.br/vue`     | Frontend Web         |
| Nginx      | `etc/nginx`                       | Nginx configurations |
| PHP-FPM    | `etc/php`                         | PHP configurations   |
| PostgreSQL | Configured via Docker Compose     | Database Service     |

---

### 🔷 App.vue

This file contains the main Vue.js application. It is already configured to connect and interact with the Laravel API, demonstrating that the API is working as expected.

It includes an example API call showing successful communication between the frontend and backend.

