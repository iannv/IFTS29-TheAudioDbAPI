# 🎵 TheAudioAtlas — Angular 20

Aplicación web desarrollada en **Angular 20** que permite explorar artistas, álbumes y tendencias musicales utilizando principalmente la API pública **TheAudioDB**, complementada con datos de **MusicBrainz**.

Este proyecto fue realizado en el marco de la materia **Desarrollo Front End** de la **Tecnicatura Superior en Desarrollo de Software**.

---

## 👥 Integrantes del grupo

- *Caeiro, Felicitas*  
- *Nicolini, Guido*  
- *Spataro, Matias*  
- *Vazquez, Ian*
- *Zenteno, Joaquin Nicolas*
  
---

## 🚀 Características principales

### 🏠 Incio
- Pantalla inicial con acceso a las secciones principales de la aplicación.
- Búsqueda y exploración de artistas.
  
### 👩‍🎤 Artistas
- **Filtro por género** (Rock, Pop, Metal, etc.).
- Acceso al **detalle completo de cada artista**

### 💿 Álbumes
- Visualización de los **Top 3 Trending Albums** obtenidos desde TheAudioDB.
- Acceso al **detalle de cada álbum**

---

## 🔗 APIs utilizadas

### 🎧 TheAudioDB (Principal)
Utilizada para:
- Buscar artistas  
- Filtrar por género  
- Consultar discografía  
- Obtener álbumes  
- Trending albums  

### 🎼 MusicBrainz (Complementaria)
Utilizada para:
- Completar datos faltantes de artistas  
- Obtener información adicional cuando TheAudioDB no posee ciertos datos

---

## 🛠️ Tecnologías utilizadas

- **Angular 20**
- **TypeScript**
- **RxJS**
- **Angular Router**
- **HTTPClient para consumo de APIs REST**
- **Bootstrap**

---

## 📦 Instalación y ejecución
```bash
git clone https://github.com/usuario/music-explorer.git
cd TheAudioDbTP
npm install
npm run start
```
