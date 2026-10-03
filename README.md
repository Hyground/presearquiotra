# ComuniLab · Comparativa de Comunicaciones

Micrositio educativo en español, construido con React, Vite y TypeScript. No necesita backend.

## Ejecutar

```sh
npm install
npm run dev
```

Abre la dirección indicada por Vite (normalmente http://127.0.0.1:5173).

```sh
npm run build
npm run preview
```

## Verificación en navegador

Con el servidor de desarrollo activo, ejecuta `npm run verify`. En Windows utiliza Microsoft Edge instalado; comprueba navegación, transmisión de bits, tabs USB por teclado, lanes PCIe, tooltips, descubrimiento Bluetooth, recomendaciones, seis tamaños de pantalla y movimiento reducido. Las capturas se guardan en `.preview/`, fuera del control de versiones.

Las demostraciones son esquemáticas: no representan velocidades reales. Las barras USB usan una escala ilustrativa no lineal. Incluye navegación por secciones, demostraciones de transmisión, tooltips accesibles, timeline USB, selector PCIe y recomendaciones Wi-Fi/Bluetooth. Respeta `prefers-reduced-motion`.

## Publicar en GitHub Pages

1. Sube el proyecto, incluyendo `.github/workflows/deploy.yml`, a la rama `main` de `Hyground/presearquiotra`.
2. En el repositorio, abre **Settings → Pages → Build and deployment → Source** y selecciona **GitHub Actions**.
3. En **Actions**, ejecuta **Publicar web en GitHub Pages → Run workflow**, o haz un nuevo push a `main`.
4. Cuando termine el despliegue, la página estará disponible en **https://hyground.github.io/presearquiotra/**.

El workflow instala dependencias, compila con `npm run build` y publica `dist`. La compilación de producción usa la ruta `/presearquiotra/`; el desarrollo conserva `/`.

Para comprobar localmente la versión de Pages:

```sh
npm run build
npm run preview
```

Abre http://127.0.0.1:4173/presearquiotra/. Si cambias el nombre del repositorio, actualiza `base` en `vite.config.ts`.

## Fuentes

- [USB-IF: USB4](https://usb.org/usb4)
- [USB-IF: conectores Type-C](https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf)
- [Wi-Fi Alliance](https://www.wi-fi.org/)
- [Bluetooth SIG](https://www.bluetooth.com/learn-about-bluetooth/tech-overview/)

Las fuentes tipográficas de Google Fonts tienen alternativas locales sans-serif si no hay conexión.
