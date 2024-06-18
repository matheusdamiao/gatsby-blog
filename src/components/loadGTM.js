export const loadGTM = () => {
  if (!window.gtmLoaded) {
    // Adicionar o script ao head
    const script = document.createElement("script")
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11303458640"
    script.async = true
    document.head.appendChild(script)

    // Inicializar o GTM após o script ser carregado
    script.onload = () => {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      gtag("js", new Date())
      gtag("config", "AW-11303458640")
      console.log("carregou!")
    }

    window.gtmLoaded = true // Para evitar carregar o script mais de uma vez
  }
}
