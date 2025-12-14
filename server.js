// server.js - отдельный файл
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/doros');

// Модели и роуты (см. предыдущий ответ)
// ...
