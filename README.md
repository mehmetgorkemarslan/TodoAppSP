# Görev Yöneticisi (Task Management System)

**Canlı Yayında İnceleyin:** [Projenin Çalışır Haline Gitmek İçin Tıklayın](https://mehmetgorkemarslan.github.io/TodoAppSP)

Bu proje, görevlerinizi ve notlarınızı klasörler (kategoriler) altında düzenlemenize yardımcı olan, React ve Tailwind CSS ile geliştirilmiş modern bir Görev Yönetim Sistemidir.

## Projenin Amacı ve Özellikleri

Bu sistem, günlük işlerinizi daha verimli takip edebilmeniz için geliştirildi. Göz yormayan karanlık tema (Midnight Blue) ve modern cam efekti (glassmorphism) detayları içerir. 

**Başlıca Özellikler:**
- **Görev İşlemleri:** Yeni görevler oluşturabilir, düzenleyebilir, tamamlandı olarak işaretleyebilir ve silebilirsiniz.
- **Klasörleme:** Görevlerinizi kategorilere ayırmak için yeni klasörler oluşturabilir ve silebilirsiniz. (Bir klasörü sildiğinizde içindeki görevler de otomatik olarak temizlenir).
- **Aktif ve Tamamlananlar:** Yapılacak işleriniz ile bitirdiğiniz işler ekranda otomatik olarak iki ayrı listeye ayrılır.
- **Teslim Tarihi (Deadline):** Görevlerinize son teslim tarihi ekleyebilirsiniz, böylece acil işleriniz kart üzerinde kırmızı renkle belirginleşir.
- **Veri Kaydı (LocalStorage):** Herhangi bir veritabanı kurulumuna gerek yoktur. Proje tarayıcınızın hafızasını kullanır, sayfayı yenileseniz bile verileriniz kaybolmaz.

## Kullanılan Teknolojiler
- **React (Vite):** Kullanıcı arayüzü mimarisi.
- **Tailwind CSS:** Hızlı ve şık tasarım blokları.
- **JavaScript:** Uygulama mantığı.

---

## Nasıl Çalıştırılır?

Projeyi bilgisayarınızda yerel olarak çalıştırmak için Node.js'in yüklü olduğundan emin olun ve terminalde (komut satırı) sırasıyla şu adımları izleyin:

**1. Gerekli kütüphaneleri yükleyin:**
Aşağıdaki komutu yazarak projenin gereksinimlerini indirin:
```bash
npm install
```

**2. Geliştirici sunucusunu başlatın:**
Yükleme bittikten sonra projeyi canlandırmak için:
```bash
npm run dev
```

**3. Tarayıcıda açın:**
Terminal ekranında karşınıza çıkan bağlantıyı (genellikle `http://localhost:5173/`) internet tarayıcınızda açarak uygulamayı anında kullanmaya başlayabilirsiniz. Kolay gelsin!