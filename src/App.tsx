import { useEffect, useState } from "react";
import { Button } from "./components/ui/Button";
import "./styles/globals.scss";
import { Card } from "./components/ui/Card"

type Theme = "dark" | "light";

export default function App() {
  // ✅ localStorage okumasını ilk render'da yapıyoruz (lint friendly)
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  // ✅ theme değişince html'e uygula + kaydet
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main">
        İçeriğe atla
      </a>

      <header className="header">
        <div className="container header__inner">
          <div className="brand" aria-label="Ürün adı">
            KairosCard
          </div>

          <nav className="nav" aria-label="Ana menü">
            <a href="#features">Özellikler</a>
            <a href="#pricing">Fiyat</a>
            <a href="#faq">SSS</a>
            <a href="#contact">İletişim</a>
          </nav>

          <Button variant="secondary" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Tema: {theme === "dark" ? "Dark" : "Light"}
          </Button>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__content">
              <h1>Dijital kartvizitin tek linkte.</h1>
              <p className="muted">
                NFC + QR ile profilini paylaş, düzenle, takip et. Hızlı kurulum, modern tasarım.
              </p>

              <div className="hero__actions">
                <Button onClick={() => alert("Demo CTA")}>Hemen Başla</Button>
                <Button variant="secondary" onClick={() => alert("Demo 2")}>
                  Canlı Gör
                </Button>
              </div>
            </div>

            <div className="hero__media" aria-hidden="true">
              <div className="mock-card">Preview</div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <h2>Özellikler</h2>

            <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
              <Card title="NFC Destekli" hoverable>
                Kartı telefona yaklaştır, profil açılsın.
              </Card>

              <Card title="QR Kod" hoverable>
                QR ile hızlı paylaşım.
              </Card>

              <Card title="Analitik" hoverable>
                Profil görüntülenme istatistiklerini takip et.
              </Card>
            </div>
          </div>
        </section>


        <section id="pricing" className="section">
          <div className="container">
            <h2>Fiyatlandırma</h2>
            <p className="muted">Buraya 3 fiyat kartı gelecek.</p>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <h2>SSS</h2>
            <p className="muted">Buraya Accordion gelecek.</p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>İletişim</h2>
            <p className="muted">Buraya formu taşıyacağız.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container muted">© {new Date().getFullYear()} KairosCard</div>
      </footer>
    </>
  );
}
