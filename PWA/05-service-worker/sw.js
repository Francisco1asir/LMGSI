
// Ciclo de vida del SW
/* 1-. Instalación del SW */
self.addEventListener('install', event => {
    
    console.log('SW: Instalando ...!!');
    setTimeout( () => {  //simulamos que las instalaciones duran 1 segundo
        console.log('Instalaciones terminadas ...');
    },1000);
    self.skipWaiting();
})

/* 2-. Activación del SW */
// Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {
    // borrar cache viejo generadas por el anterior service worker
    console.log ('SW2: Activo y listo para controlar la aplicación');
})
