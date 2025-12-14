const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB (используйте бесплатный кластер MongoDB Atlas)
mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/doros?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Модели
const User = mongoose.model('User', {
    username: String,
    password: String,
    created: { type: Date, default: Date.now }
});

const Video = mongoose.model('Video', {
    title: String,
    filename: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    uploadDate: { type: Date, default: Date.now },
    views: { type: Number, default: 0 }
});

// JWT секрет
const JWT_SECRET = 'your-secret-key-here';

// Роуты (регистрация, логин, загрузка видео и т.д.)
// ... остальной код из предыдущего ответа

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));
