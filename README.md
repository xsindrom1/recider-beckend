# RECIDER

This is the Cloud Computing Section of [RECIDER Repository](https://github.com/your-username/recider-repo). Written here are information about the back-end side of the RECIDER app and how it works conceptually.

## Project Requirements

- Visual Studio Code
- Node.js
- Express.js
- Firestore
- Python
- Flask

Other dependencies required to build the API can be found in [package.json](link-to-package-json) and [requirement.txt](link-to-requirement-txt).

## Infrastructure Project

![Infrastructure Image](https://github.com/xsindrom1/Submission-Backend-Bookself/blob/master/architecture%20ricider.png)

## API Documentation

### Endpoint

[https://ch2-ps391-recider.et.r.appspot.com](https://ch2-ps391-recider.et.r.appspot.com)

#### Route 

`/`

#### Method

GET

#### Request Body

N/A

#### Response

Welcome To Recider

---

#### Route

`/api/create`

#### Method

POST

#### Request Body

```json
{
    "recipe": "Recipe Titel",
    "ingredient": "Ingridient 1 ; Ingridient 2",
    "step": " Step 1; Step2 ",
    "image": "Link to Recipe Image"
}
```
the ingridient and step must be separate by semicolon (;)
#### Respone

Succses :

```json
{
    "status": "Success",
    "msg": "Data Saved"
}
```
Failed : 

```json
{
    "status": "Failed",
    "msg": {}
}
```

---
#### Route
`/api/createMultiple`
#### Method
POST
#### Request Body
```json
{
    "recipes":
  [
    {
      "recipe": "Recipe Titel 1",
      "ingredient": "Ingridient 1; Ingridient 2",
      "step": " Step 1; Step2 ",
      "image": "Link to Recipe Image"
    },
    {
      "recipe": "Recipe Titel 2",
      "ingredient": "Ingridient 1; Ingridient 2",
      "step": " Step 1; Step2 ",
      "image": "Link to Recipe Image"
    }
  ]
}
```
#### Respone

Succses :

```json
{
    "status": "Success",
    "msg": "Data Saved"
}
```
Failed : 

```json
{
    "status": "Failed",
    "msg": {}
}
```
---
#### Route

`api/allRecipes`
#### Method
GET
#### Request Body
N/A
#### Respone
```json
{
    "status": "Success",
    "data":
    [
        {
            "id": "id recipe",
            "recipe": "recipe titel",
            "image": "link to image"
        },
        {
            "id": "id recipe",
            "recipe": "recipe titel",
            "image": "link to image"
        }
    ]
}
```
---
#### Route
`/api/searchRecipe/:recipe`
#### Method
GET
#### Request Body
N/A
#### Respone
```json
{
    "status": "Success",
    "data":
    [
        {
            "id": "id recipe",
            "recipe": "recipe titel",
            "image": "link to image"
        },
        {
            "id": "id recipe",
            "recipe": "recipe titel",
            "image": "link to image"
        }
    ]
}
```

---
#### Route
`/api/recipe/:id`
#### Method
GET
#### Request Body
N/A
#### Respone
```json
{
    "status": "Success",
    "data": {
        "image": "https://storage.googleapis.com/firestore-6785/ayam.webp",
        "ingredient": [
            "4 siung bawang putih",
            "1 kg ayam (potong sesuai selera)",
            "3 cm kunyit (haluskan)",
            "Kaldu ayam bubuk",
            "Ketumbar bubuk",
            "Garam",
            "Mentega",
            "4 sdm kecap manis",
            "1 sdm saus tiram",
            "1 sdt tepung maizena (larutkan ke 1 sdm air)",
            "4 siung bawang putih (cincang halus)",
            "1 batang daun bawang (cincang kasar)",
            "1 buah bawang bombay (iris tipis)",
            "1 sdm kecap asin",
            "Merica bubuk",
            "Garam",
            "2 buah cabai merah besar (buang isi",
            "iris serong)",
            "150 ml air"
        ],
        "keywords": [
            "ayam",
            "goreng",
            "mentega"
        ],
        "recipe": "Ayam goreng mentega",
        "step": [
            "Rebus ayam bersama bumbu sampai matang",
            "tunggu sampai asat. Lalu goreng ayam sampai matang tiriskan.",
            "Buat saus mentega, lelehkan mentega 2 sdm.",
            "Tumis bawang putih dan bawang bombay tambahkan kecap manis, kecap asin, saus tiram, merica bubuk, tepung maizena, garam, daun bawang, dan cabai merah. Aduk rata. Tuang air, aduk, dan masak hingga mendidih.",
            "Masukkan ayam goreng aduk rata"
        ],
        "id": 1701345784940
    }
}
```
---
#### Route
`/recommend`
#### Method
POST
#### Request Body
```json
{
    "ingredients" : "tahu, ayam"
}
```
#### Respone
```json
{
    "recommendations": [
        {
            "Ingredients": "3 bh Tahu cina putih--100 gr udang dikupas--200 gr dada ayam tanpa tulang--sedikit Daun bawang--3 sdm tepung sagu/tapioka--Garam--Lada--Penyedap--3 siung bawang merah--2 siung bawang putih--",
            "Steps": "Potong tahu--Siapkan udang dan ayam--Haluskan / blender ayam dan udang, bawang merah, bawang putih, setelah halus tambahkan garam, lada penyedap dan irisan daun bawang--Tambahkan tepung sagu/tapioka serta sedikit air es--Bentuk dengan tahu sesuai selera--Kemudian dikukus sampai matang--Setelah matang, bisa langsung dinikmati atau digoreng--",
            "Title": "Tahu ayam udang"
        },
        {
            "Ingredients": "1 bks tahu putih--1 batang wortel (potong kecil-kecil)--1/2 bks Masako ayam--secukupnya Lada bubuk--1 btr telur ayam (kocok)--2 sdm terigu--Minyak untuk menggoreng--",
            "Steps": "Hancurkan tahu dalam baskom--Campurkan wortel yang telah di potong-potong, lada bubuk, masako, telur dan terigu--Uleni hingga semua tercampur--Ambil menggunakan sendok makan, masukkan ke dalam minyak panas, goreng hingga berwarna kecoklatan.--",
            "Title": "Perkedel Tahu Wortel Sederhana"
        },
        {
            "Ingredients": "1 papan tahu sutera--200 gr daging ayam--Daun bawang--B.putih--2 sdm tepung maizena larutkan d air--secukupnya Micin jamur, garam, gula, lada--",
            "Steps": "Tumis b.putih cincang, hingga harum. Masukan ayam lalu aduk\" sampai berubah warna--Potong\"tahu sesuai selera, masukan bumbu\" seperti garam, gula, lada, masukan kedalam penggorengan, aduk\" kasih air sedikit masukan t.maizena tunggu sebentar masukN daun bawang, angkt--",
            "Title": "Mung tahu'"
        },
        {
            "Ingredients": "bumbu halus--2 siung bawang putih--kunyit--1/4 sdt ketumbar--bahan tepung--6 sdm tepung terigu--1 sdm maizena--secukupnya garam, lada, kaldu jamur--secukupnya air--1 btr telur ayam--tahu potong2 dadu--",
            "Steps": "Tumbuk bumbu halus, beri air--Potong tahu rendam dalam bumbu min 10mnt--Campur bahan tepung--Gulingkan tahu ke tepung lalu ke telur--Goreng hingga kuning keemasan--",
            "Title": "Tahu Crispy"
        },
        {
            "Ingredients": "10 buah tahu sutra--2 butir telur--3 siung bawang merah--2 siung bawang putih--secukupnya ketumbar bubuk--secukupnya daun bawang--secukupnya garam--",
            "Steps": "Haluskan tahu sutra--Iris halus bamer, baput, dan daun bawang--Masukan telur, garam, ketumbar bubuk. koreksi rasa--Goreng hingga matang warna kecoklatan--Siap disajikan dengan nasi hangat--",
            "Title": "Perkedel Tahu"
        }
    ]
}
```

## Future Devlopment
- User Accounts: Consider incorporating user accounts to allow features like saving favorite recipes and personalized recommendations recipe.
- Social Integration: Explore options for users to share recipes on social platforms.
- Enhanced Recommendation Engine: Continuously improve the recommendation system by incorporating machine learning algorithms for more accurate and personalized suggestions.
