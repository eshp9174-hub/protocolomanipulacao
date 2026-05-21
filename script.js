/* RESET & LAYOUT BASE */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #070707;
    color: #ffffff;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

/* GLOW BACKGROUND ANIMATIONS */
.bg-red {
    position: fixed;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(255,0,51,0.18) 0%, rgba(255,0,51,0) 70%);
    top: -250px;
    right: -250px;
    z-index: 0;
    pointer-events: none;
    animation: float1 7s ease-in-out infinite alternate;
}

.bg-gold {
    position: fixed;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0) 70%);
    bottom: -250px;
    left: -250px;
    z-index: 0;
    pointer-events: none;
    animation: float2 8s ease-in-out infinite alternate;
}

@keyframes float1 {
    from { transform: translateY(0); }
    to { transform: translateY(40px); }
}

@keyframes float2 {
    from { transform: translateX(0); }
    to { transform: translateX(40px); }
}

/* WRAPPERS */
.wrap {
    position: relative;
    z-index: 2;
    padding: 20px;
}

.container {
    max-width: 1120px;
    margin: auto;
}

/* TOP ALERT */
.top-alert {
    background: linear-gradient(90deg, #ff002f, #ff3b00);
    padding: 18px 22px;
    border-radius: 18px;
    font-size: 15px;
    font-weight: 900;
    text-align: center;
    box-shadow: 0 0 20px rgba(255,0,47,0.4), 0 0 60px rgba(255,0,47,0.2);
    animation: alertPulse 1.2s infinite;
    border: 1px solid rgba(255,255,255,0.12);
    letter-spacing: .3px;
    position: relative;
    overflow: hidden;
}

.top-alert::before {
    content: '';
    position: absolute;
    top: 0;
    left: -120%;
    width: 80%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
    transform: skewX(-20deg);
    animation: shine 3s infinite;
}

@keyframes shine {
    100% { left: 140%; }
}

@keyframes alertPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.012); }
}

/* HERO */
.hero {
    padding: 65px 0 35px;
    text-align: center;
}

.hero h1 {
    font-size: 72px;
    font-weight: 900;
    line-height: .95;
    letter-spacing: -4px;
    max-width: 1000px;
    margin: auto;
    text-transform: uppercase;
}

.hero h1 span {
    color: #ff4040;
    text-shadow: 0 0 30px rgba(255,64,64,0.45);
}

.hero p {
    max-width: 820px;
    margin: 26px auto 0;
    font-size: 22px;
    line-height: 1.7;
    color: #d7d7d7;
}

.mini-proof {
    margin-top: 22px;
    font-size: 15px;
    font-weight: 700;
    color: #e1e1e1;
}

/* SEPARATORS */
.break {
    margin-top: 42px;
    background: linear-gradient(90deg, #ff003c, #d4af37);
    padding: 15px;
    border-radius: 18px;
    text-align: center;
    font-size: 15px;
    font-weight: 900;
    letter-spacing: .5px;
    box-shadow: 0 0 40px rgba(255,0,60,0.2);
}

/* SECRET SECTION */
.secret {
    margin-top: 32px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 38px;
    border-radius: 30px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
}

.secret::before {
    content: '';
    position: absolute;
    width: 420px;
    height: 420px;
    background: rgba(255,0,60,0.12);
    filter: blur(120px);
    top: -200px;
    right: -120px;
}

.secret h2 {
    font-size: 46px;
    font-weight: 900;
    line-height: 1.05;
    margin-bottom: 22px;
    position: relative;
    z-index: 2;
}

.secret p {
    font-size: 19px;
    line-height: 1.8;
    color: #d5d5d5;
    position: relative;
    z-index: 2;
}

.secret-grid {
    margin-top: 28px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    position: relative;
    z-index: 2;
}

.secret-card {
    background: #101010;
    border: 1px solid rgba(255,255,255,0.06);
    padding: 18px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 15px;
    transition: transform .3s, border-color .3s;
}

.secret-card:hover {
    transform: translateY(-5px);
    border-color: #ff4040;
}

/* COMPARE ELEMENT */
.compare-clean {
    margin-top: 60px;
    text-align: center;
}

.compare-title {
    font-size: 46px;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 22px;
    text-transform: uppercase;
}

.compare-single-image {
    width: 100%;
    max-width: 900px;
    margin: auto;
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 0 40px rgba(255,0,60,0.12);
    background: #111;
}

.compare-single-image img {
    width: 100%;
    display: block;
    height: auto;
}

.compare-mini-info {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 18px;
    flex-wrap: wrap;
}

.compare-mini {
    padding: 12px 18px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 800;
}

.compare-mini.red {
    background: rgba(255,0,47,0.15);
    border: 1px solid rgba(255,0,47,0.35);
    color: #ff5d78;
}

.compare-mini.green {
    background: rgba(34,197,94,0.12);
    border: 1px solid rgba(34,197,94,0.3);
    color: #63e69a;
}

/* TESTIMONIALS (GOOGLE STYLE) */
.testimonials {
    margin-top: 55px;
}

.testimonials-title {
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    line-height: 1.1;
    margin-bottom: 25px;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
}

.google-style {
    background: #ffffff;
    border-radius: 22px;
    padding: 20px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.18);
    transition: transform .3s;
}

.google-style:hover {
    transform: translateY(-4px);
}

.google-top {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
}

.google-logo {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #eee;
    overflow: hidden;
    flex-shrink: 0;
    padding: 8px;
}

.google-user h4 {
    font-size: 15px;
    font-weight: 700;
    color: #111111;
    margin-bottom: 2px;
}

.google-user span {
    font-size: 12px;
    color: #777777;
}

.stars {
    font-size: 16px;
    margin-bottom: 10px;
    color: #FFD43B;
    letter-spacing: 2px;
}

.google-style p {
    font-size: 14px;
    line-height: 1.7;
    color: #333333;
    font-weight: 500;
}

.verified {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 700;
    color: #34A853;
}

/* CTA BLOCK */
.cta {
    margin-top: 70px;
    background: linear-gradient(135deg, #190406, #2a0d04);
    border: 1px solid rgba(255,64,64,0.18);
    border-radius: 36px;
    padding: 55px 30px;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 70px rgba(255,0,60,0.12);
}

.cta::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: rgba(255,0,60,0.14);
    filter: blur(140px);
    top: -250px;
    right: -150px;
}

.cta-alert {
    display: inline-block;
    padding: 12px 18px;
    border-radius: 100px;
    background: #ff003c;
    font-size: 13px;
    font-weight: 900;
    margin-bottom: 24px;
    animation: alertPulse 1.2s infinite;
    position: relative;
    z-index: 2;
}

.cta h2 {
    font-size: 58px;
    line-height: 1;
    font-weight: 900;
    max-width: 800px;
    margin: auto;
    position: relative;
    z-index: 2;
}

.cta-benefits {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    position: relative;
    z-index: 2;
}

.cta-benefit {
    background: rgba(255,255,255,0.04);
    padding: 18px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,0.06);
    font-weight: 700;
    font-size: 15px;
}

.old-price {
    margin-top: 32px;
    font-size: 24px;
    text-decoration: line-through;
    color: #999;
    position: relative;
    z-index: 2;
}

.new-price {
    font-size: 84px;
    font-weight: 900;
    color: #ffd43b;
    line-height: 1;
    margin-top: 4px;
    text-shadow: 0 0 40px rgba(255,212,59,0.25);
    position: relative;
    z-index: 2;
}

.cta-button {
    display: inline-block;
    margin-top: 28px;
    background: linear-gradient(90deg, #ff003c, #ff4d00);
    padding: 24px 42px;
    border-radius: 22px;
    font-size: 21px;
    font-weight: 900;
    color: white;
    text-decoration: none;
    box-shadow: 0 0 50px rgba(255,0,60,0.45);
    animation: buttonPulse 1.3s infinite;
    position: relative;
    z-index: 2;
}

@keyframes buttonPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.03); }
}

.cta-mini {
    margin-top: 18px;
    font-size: 14px;
    line-height: 1.8;
    color: #bbb;
    position: relative;
    z-index: 2;
}

.warning {
    margin-top: 22px;
    font-size: 14px;
    line-height: 1.8;
    color: #ffb5b5;
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
}

/* RESPONSIVE DESIGN */
@media(max-width: 768px){
    .hero h1 {
        font-size: 42px;
        letter-spacing: -2px;
    }

    .hero p {
        font-size: 18px;
    }

    .secret h2, .compare-title, .testimonials-title {
        font-size: 32px;
    }

    .secret-grid, .testimonials-grid, .cta-benefits {
        grid-template-columns: 1fr;
    }

    .cta h2 {
        font-size: 38px;
    }

    .new-price {
        font-size: 62px;
    }

    .secret, .cta {
        padding: 30px 22px;
    }

    .compare-single-image {
        border-radius: 20px;
    }
}
