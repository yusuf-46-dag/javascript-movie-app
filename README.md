# 🎬 JavaScript Film Arama Uygulaması

Bu proje, **OMDb API** kullanarak film, dizi ve diğer medya içeriklerini aramanızı sağlayan, modern JavaScript (ES6+) ile geliştirilmiş bir frontend uygulamasıdır.

## 🚀 Özellikler

* **Anlık Arama:** Film ismini yazıp arama yapabilirsiniz.
* **Detaylı Gösterim:** Filmin posterini, adını ve çıkış yılını kartlar halinde listeler.
* **Hata Yönetimi:** Film bulunamadığında veya boş arama yapıldığında kullanıcıyı bilgilendirir.
* **Modern Kod Yapısı:** `Async/Await` ve `Fetch API` kullanılarak asenkron veri çekme işlemleri yönetilmiştir.
* **Güvenlik:** API anahtarı `config.js` dosyası ile izole edilmiştir.

## 🛠️ Kurulum ve Çalıştırma

Bu projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin.

**Önemli Not:** Güvenlik nedeniyle API anahtarını içeren dosya GitHub'a yüklenmemiştir. Projeyi çalıştırmak için kendi API anahtarınızı oluşturmanız gerekir.

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [https://github.com/yusuf-46-dag/javascript-movie-app.git](https://github.com/yusuf-46-dag/javascript-movie-app.git)
    ```

2.  **API Anahtarı Alın:**
    [OMDb API](http://www.omdbapi.com/apikey.aspx) adresinden ücretsiz bir API anahtarı (API Key) alın.

3.  **Config Dosyasını Oluşturun:**
    Projenin ana dizininde `config.js` adında bir dosya oluşturun ve içine şu kodu yapıştırın:
    ```javascript
    const SECRET_API_KEY = "BURAYA_KENDI_API_KEYINIZI_YAZIN";
    ```

4.  **Başlatın:**
    `index.html` dosyasını tarayıcınızda açın. Hepsi bu kadar! 🎉

## 💻 Teknolojiler

* **HTML5**
* **CSS3** (Flexbox & Grid)
* **JavaScript** (Vanilla JS)
* **OMDb API**

---
*Bu proje Yusuf Dağ tarafından JavaScript öğrenim sürecinde geliştirilmiştir.*
