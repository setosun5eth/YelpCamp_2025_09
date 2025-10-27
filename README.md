# ScenicShare
Node.js + Express + EJS の学習。

##　使用技術
- Node.js / Express
- MongoDB / Mongoose
- EJS
- Passport.js
- Multer / Multer-storage-cloudinary
- Mapbox

## セットアップ方法
git clone https://github.com/yourname/YelpCamp.git
cd YelpCamp
npm install

#### .envに必要な環境変数
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
MAPBOX_TOKEN=
DB_URL=

#### 実行方法
npm start

####　その他コマンド
nodemon app.js

node seeds/index.js

npm install multer
npm install multer-storage-cloudinary
npm install @mapbox/mapbox-sdk