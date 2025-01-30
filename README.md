# 📦 E-Commerce Product Scraper

An advanced e-commerce product scraping tool built with **Next.js** and **Bright Data's Web Unlocker**. This platform helps users track price drops and notifies competitors when products go out of stock—all managed through automated cron jobs.

---

## ⚙️ Tech Stack

- 🚀 **Next.js** – Fast, modern React framework
- 🌍 **Bright Data** – Web scraping and proxy service
- 🏗️ **Cheerio** – Lightweight HTML parsing
- 📧 **Nodemailer** – Email notifications
- 🗄️ **MongoDB** – Database for tracking scraped products
- 🎨 **Tailwind CSS** – Stylish and responsive design
- 🎛️ **Headless UI** – Accessible UI components

---

## 🔋 Features

### 🎠 **Header with Carousel**
A visually appealing **carousel** to showcase key features and benefits.

### 🔎 **Product Scraping**
Search bar allows users to **input Amazon product links** for scraping and tracking.

### 📊 **Scraped Projects**
Displays **details of tracked products**, providing valuable insights.

### 🏷️ **Scraped Product Details**
- 🖼️ Product Image
- 🏷️ Title
- 💲 Pricing
- 📝 Other relevant details scraped from the source website

### 📩 **Email Notifications**
Automated email alerts for:
- 🛍️ **Back in stock notifications**
- 📉 **Lowest price alerts**

### 🕒 **Automated Cron Jobs**
Ensures periodic **product data updates** for real-time tracking.

### 💡 **Additional Features**
- Scalable **code architecture**
- Optimized for **reusability and performance**

---

## 🚀 Quick Start

Follow these steps to set up the project locally:

### 📌 **Prerequisites**
Ensure the following are installed on your system:
- 🖥️ **Git**
- 🛠️ **Node.js**
- 📦 **npm (Node Package Manager)**

### 🔗 **Cloning the Repository**
```sh
 git clone <REPOSITORY_URL>
 cd pricewise
```

### 📥 **Installation**
Install project dependencies:
```sh
npm install
```

### 🔐 **Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```env
# SCRAPER
BRIGHT_DATA_USERNAME=
BRIGHT_DATA_PASSWORD=

# DATABASE
MONGODB_URI=

# EMAIL CONFIG
EMAIL_USER=
EMAIL_PASS=
```
**Note:** Replace placeholder values with your actual credentials from **Bright Data, MongoDB, and Nodemailer**.

### ▶️ **Run the Project**
```sh
npm run dev
```
Visit **[localhost:3000](http://localhost:3000)** in your browser.

---

## 🤝 Contributing
Feel free to **fork, clone, and contribute** to improve the project!

### 🛠️ **Suggestions & Issues**
Have ideas or encountered a bug? Open an **issue** or submit a **pull request**.

---

## 📜 License
This project is **open-source** under the MIT License.

📬 **Stay Connected** – Happy Coding! 🚀

