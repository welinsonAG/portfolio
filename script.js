const aboutText = document.getElementById("about-text");

const texts = {
  en: `I am a passionate Full Stack Developer focused on building modern,
          scalable and user-centered web applications. I enjoy turning complex
          problems into simple, clean and efficient solutions. My goal is to
          continuously grow as a developer while delivering high-quality digital
          experiences that create real impact.`,
  pt: `Sou um desenvolvedor Full Stack apaixonado, focado na criação de aplicações web modernas,
escaláveis ​​e centradas no usuário. Gosto de transformar problemas complexos em soluções simples, 
limpas e eficientes. Meu objetivo é
crescer continuamente como desenvolvedor, entregando experiências digitais de alta qualidade que gerem impacto real.`,
};

aboutText.innerText = texts.en;

document.getElementById("btn-en").addEventListener("click", () => {
  aboutText.innerText = texts.en;
});

document.getElementById("btn-pt").addEventListener("click", () => {
  aboutText.innerText = texts.pt;
});
