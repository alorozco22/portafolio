# Requerimientos del portafolio técnico de Alfredo Orozco

> **Propósito de este documento:** servir como especificación funcional, narrativa y visual para que OpenCode construya un portafolio profesional de una sola página, listo para presentar a una vacante de **Ingeniero de Innovación con Agentes**. Este archivo es autocontenido: el sitio debe poder entenderse sin que la persona visitante tenga que abrir los enlaces de referencia. Los enlaces son material complementario, nunca sustituyen la explicación de los proyectos.

---

## 1. Objetivo y posicionamiento

Construir una página personal que presente a **Alfredo Eleazar Orozco Quesada** como un perfil técnico capaz de diseñar, integrar y desarrollar soluciones de software e inteligencia artificial, con especial énfasis en **arquitecturas de agentes de IA conectadas con APIs, bases de datos, canales de comunicación e infraestructura contenerizada**.

La vacante objetivo es **Ingeniero de Innovación con Agentes**. La página debe responder rápidamente a estas preguntas de un reclutador o líder técnico:

1. ¿Ha construido software real y entiende sus componentes fundamentales?
2. ¿Puede diseñar una arquitectura donde agentes, herramientas, datos y servicios externos trabajen coordinadamente?
3. ¿Comprende riesgos de seguridad, privacidad, operación y costos, y sabe traducirlos en decisiones de arquitectura?
4. ¿Tiene fundamentos en cloud, bases de datos, Big Data, aprendizaje de máquinas y MLOps?
5. ¿Puede conectar la tecnología con un problema de negocio, una experiencia de usuario y una solución que se pueda operar?

La prioridad narrativa debe ser:

1. **Ingeniería de agentes y arquitectura de sistemas**.
2. **Desarrollo de software, APIs, bases de datos y despliegue cloud**.
3. **Data engineering, Big Data, ML y MLOps**.
4. **Diseño de producto, experiencia de usuario y formación técnica**.

No presentar el perfil como alguien que únicamente usa herramientas de IA para programar. La idea central es que Alfredo comprende y desarrolla los sistemas que permiten que los agentes funcionen de forma útil, controlada, integrada y segura.

### Mensaje principal sugerido para el hero

**Título:** Ingeniería de software, datos y agentes de IA.

**Subtítulo:** Diseño y construyo sistemas inteligentes que conectan agentes, APIs, bases de datos y servicios cloud. Combino fundamentos de desarrollo, arquitectura de datos y diseño centrado en las personas para convertir problemas reales en soluciones tecnológicas implementables.

**Frase de diferenciación:** No me limito a conectar un modelo de lenguaje: diseño el sistema que lo hace útil, interoperable y gobernable.

**CTA principales:** `Conversemos` (correo) y `Ver proyectos` (ancla a proyectos). Añadir LinkedIn como enlace secundario.

---

## 2. Público y tono

### Público principal

- Reclutadores técnicos y líderes de ingeniería, innovación, transformación digital o automatización.
- Equipos que necesitan prototipar y llevar a producción soluciones basadas en agentes.
- Organizaciones que requieren conectar IA con sistemas empresariales, datos, procesos y canales de atención.

### Tono

- Profesional, preciso, sobrio y seguro.
- Técnico, pero comprensible para un líder de negocio que no programe.
- Orientado a decisiones de arquitectura, problemas resueltos, responsabilidades técnicas y mitigación de riesgos.
- Evitar el lenguaje grandilocuente de marketing, las promesas no demostradas y expresiones vagas como “experto en todo”.

### Idioma

El sitio debe estar escrito principalmente en **español**, conservando nombres técnicos y términos de uso común en inglés: API, cloud, Data Warehouse, embeddings, MLOps, agent runtime, tool, webhook, Docker, Kubernetes, etc. La redacción debe ser clara y natural. No mezclar idiomas sin necesidad.

---

## 3. Lineamientos visuales y de experiencia

### Dirección de arte

Crear una identidad visual de **portafolio técnico corporativo contemporáneo**: limpia, editorial, precisa y con buena jerarquía visual. Debe sentirse como el portafolio de un ingeniero que puede hablar con equipos de tecnología y de negocio.

- Fondo principal blanco cálido o gris muy claro.
- Texto en azul muy oscuro o grafito.
- Un color de acento tecnológico sobrio, por ejemplo azul profundo o teal; usar un segundo acento cálido solo en pequeños detalles.
- Tipografía sans serif legible, con jerarquías claras y títulos contundentes.
- Mucho espacio en blanco, alineaciones consistentes, tarjetas discretas y separadores finos.
- Gráficos técnicos sencillos, diagramas de arquitectura legibles y etiquetas de tecnologías.
- Evitar fondos de circuito, robots decorativos, cerebros luminosos, estética cyberpunk, gradientes morados genéricos y exceso de efectos.
- No inventar un logotipo personal ni usar marcas de terceros como si fueran propias.

### Foto

Usar la fotografía local existente:

- Ruta exacta: `assets/alfredo.jpg`.
- Mostrarla en el hero, con un recorte profesional y natural.
- Mantener proporciones, no deformarla ni reemplazarla por una imagen de stock o generada.
- Incluir texto alternativo descriptivo.
- Si el archivo no está disponible en esa ruta, no buscar ni inventar otra foto: dejar un espacio de reserva y reportarlo al final.

### Comportamiento y navegación

- Una sola página (single-page portfolio), con navegación por anclas.
- Header compacto, preferiblemente sticky, con enlaces a `Perfil`, `Proyectos`, `Stack`, `Formación` y `Contacto`.
- La información esencial de los proyectos debe estar visible directamente en la página. No ocultar explicaciones críticas en modales, acordeones o páginas externas.
- Los enlaces externos amplían la evidencia, pero la página debe explicar por sí misma el problema, la contribución, la arquitectura, las tecnologías y el valor de cada proyecto.
- Responsive de verdad: desktop, tablet y móvil. En móvil priorizar lectura vertical y diagramas que puedan desplazarse o reacomodarse sin perder legibilidad.
- Accesibilidad: contraste suficiente, foco visible, navegación por teclado, HTML semántico, etiquetas accesibles, imágenes con alt y `prefers-reduced-motion`.
- Animaciones discretas; no sacrificar rendimiento, lectura ni accesibilidad.
- Optimizar carga, imágenes y fuentes. No incorporar librerías pesadas para efectos que puedan resolverse con CSS.

### Diagrama técnico e imágenes de evidencia

Incluir un diagrama original y legible de la arquitectura de Lore, construido con SVG inline, HTML/CSS o componentes nativos del proyecto. No usar una imagen genérica. El diagrama debe ser responsive y tener etiquetas legibles.

Además, utilizar las tres imágenes locales extraídas de la presentación de consultoría y guardadas en `assets/`. Son evidencia visual complementaria: no reemplazan la explicación del proyecto ni el diagrama responsive que debe construir el sitio.

| Archivo local | Qué evidencia | Uso sugerido y texto alternativo |
|---|---|---|
| `assets/lore-agent-isolation.webp` | Diagrama de la arquitectura de agentes (diapositiva 37): API de base de datos, coordinador, contenedores de agentes, router de WhatsApp y canal de mensajería. | Imagen principal del caso Lore, junto a la explicación de aislamiento y enrutamiento. Alt: `Diagrama de Lore con agentes en contenedores separados, API de datos, coordinador y router de WhatsApp`. |
| `assets/lore-memory-api.webp` | Captura de la diapositiva 30: documentación OpenAPI/Swagger de Lore Memory API y sus operaciones para registrar conversaciones, mensajes, estados, alertas y reportes. | Bloque de evidencia de desarrollo de herramientas/API. Alt: `Captura de la documentación de Lore Memory API con operaciones disponibles para los agentes`. |
| `assets/lore-whatsapp-integration.webp` | Diagrama de integración de la diapositiva 44 entre WhatsApp/Meta, webhook, contenedor de Cloudflare Tunnel, sistema de gestión y API. Se ocultó el hostname específico del proyecto. | Bloque de integración y despliegue seguro. Alt: `Arquitectura de integración de WhatsApp mediante webhook y Cloudflare Tunnel`. |

Reglas de uso de estas imágenes:

- Mantener los archivos y nombres exactamente como se indican; no es necesario volver a extraerlos del PDF.
- Presentarlas como diagramas/capturas del proyecto, con pies de imagen breves y claros; no como diagramas universales ni como capturas de un sistema de producción a gran escala.
- No recortar los nombres de componentes ni deformar la relación de aspecto. En móvil permitir ampliar o abrir la imagen en una vista accesible si el texto del diagrama queda pequeño.
- La captura `lore-memory-api.webp` muestra documentación de desarrollo y una URL local (`localhost`); no insinuar que esa URL sea un endpoint público o de producción.
- En `lore-whatsapp-integration.webp` el hostname específico ya fue ocultado. No reconstruirlo, escribirlo ni enlazarlo.
- Usar carga diferida (`loading="lazy"`) para estas imágenes, dimensiones explícitas para evitar saltos de layout y compresión WebP ya disponible. No volver a convertirlas si no es necesario.
- Las imágenes son complementarias: el texto debe explicar por sí solo las decisiones técnicas y los controles de seguridad.

### Reglas de implementación

1. Antes de modificar nada, inspeccionar la estructura del proyecto, el framework, los archivos existentes, las dependencias y las convenciones actuales.
2. Respetar el stack existente. No reinicializar el proyecto ni reemplazar configuraciones funcionales sin necesidad.
3. Mantener el código modular y fácil de editar: datos/contenido separados de componentes visuales cuando el stack lo permita.
4. No introducir servicios backend, bases de datos, formularios conectados ni llamadas a APIs que no sean necesarias para un portafolio estático.
5. Los CTA de correo y LinkedIn sí deben funcionar. Validar que los enlaces externos abran correctamente y usar `rel="noopener noreferrer"` cuando corresponda.
6. No inventar estadísticas, porcentajes de impacto, número de usuarios, años de experiencia, certificaciones, clientes, títulos laborales ni resultados de producción.
7. No inventar tecnologías para proyectos cuyo stack no esté documentado.
8. Al finalizar, probar navegación, responsive, accesibilidad básica, consola del navegador y enlaces.

---

## 4. Estructura de la página

La página debe ser suficientemente completa para comunicar el perfil en una visita de pocos minutos, sin convertirse en un CV interminable.

### Sección A — Hero / presentación

Incluir:

- Nombre: **Alfredo Eleazar Orozco Quesada**.
- Titular profesional: **Ingeniería de software, datos y agentes de IA**.
- Subtítulo del apartado 1.
- Fotografía `assets/alfredo.jpg`.
- CTAs: correo, LinkedIn y salto a proyectos.
- Tres o cuatro etiquetas de orientación técnica, por ejemplo: `Agent systems`, `Python & APIs`, `Cloud & containers`, `Data engineering`.

No atribuir a Alfredo un cargo laboral que no haya sido indicado. El titular expresa su propuesta profesional, no una experiencia laboral inventada.

### Sección B — Perfil y enfoque

Texto sugerido:

> Mi trabajo se sitúa en la intersección entre desarrollo de software, datos e inteligencia artificial aplicada. Me interesa construir soluciones completas: entender el problema y el flujo de trabajo, modelar la información, diseñar las interfaces y APIs, integrar modelos y herramientas, y pensar desde el inicio en seguridad, despliegue y operación.
>
> Mi experiencia combina desarrollo full-stack, aplicaciones móviles, sistemas de datos, soluciones cloud y diseño de experiencias. En proyectos recientes he llevado ese enfoque al diseño de arquitecturas de agentes conectadas con WhatsApp, APIs y bases de datos relacionales.

No convertir esta sección en una biografía extensa. El centro es la capacidad de integrar componentes técnicos en sistemas útiles.

### Sección C — Proyecto destacado: Lore

Esta debe ser la sección más importante del portafolio y ocupar mayor espacio visual que cualquier otro proyecto.

**Nombre:** Lore — Arquitectura de agentes de IA para acompañamiento personalizado.

**Contexto:** consultoría para un programa asincrónico de formación y acompañamiento. El reto era ampliar la capacidad de seguimiento a participantes sin perder personalización ni trasladar toda la carga al equipo humano.

**Resumen de valor:** diseño e implementación de una arquitectura de agentes conectada a WhatsApp, con agentes y memoria por participante, una API de herramientas desarrollada en Python y una base de datos relacional que media el acceso a la información. La arquitectura busca personalización a escala sin que un agente pueda consultar información de otra persona.

#### El problema

El acompañamiento pedagógico y el seguimiento individual consumen tiempo del equipo humano. Aumentar el número de participantes puede reducir la atención personalizada. Se buscó diseñar un sistema capaz de conducir interacciones, apoyar sesiones asincrónicas, registrar resultados y facilitar alertas para que los gestores humanos puedan intervenir cuando sea necesario.

#### Qué hace el sistema

Explicar la experiencia diseñada para el participante:

- Contacta al participante por WhatsApp y coordina una sesión de acompañamiento.
- Guía una secuencia de actividades y contenidos, como videos e infografías.
- Puede conducir evaluaciones con preguntas cerradas y abiertas.
- Puede ofrecer retroalimentación a las respuestas y mantener continuidad en el proceso.
- Registra interacciones y resultados por medio de las APIs del sistema.
- Permite identificar señales que ameritan seguimiento por parte de gestores humanos.

Presentar las funciones anteriores como capacidades del caso de uso y del sistema diseñado; no afirmar que todas las capacidades están desplegadas en producción ni que el sistema reemplaza decisiones humanas. Las alertas son insumos para revisión de personas responsables.

#### Arquitectura técnica implementada / diseñada

Describir las piezas y su relación. La página debe mostrar un diagrama con, al menos, estos componentes:

1. **WhatsApp Business API / Meta:** canal de comunicación con participantes.
2. **Webhook:** recibe eventos entrantes de WhatsApp.
3. **Cloudflare Tunnel:** publica el servicio de recepción sin requerir abrir puertos entrantes en el servidor. En la arquitectura descrita, el contenedor del webhook inicia una conexión TCP saliente hacia Cloudflare; no se expone directamente un puerto de red entrante del servidor. La comunicación de Meta hacia Cloudflare utiliza HTTPS.
4. **Router / orquestación en Python:** relaciona el chat o identificador del participante con su agente correspondiente y encamina la interacción.
5. **Contenedor de agente:** entorno aislado de ejecución para el agente y su contexto/memoria individual.
6. **API de base de datos en Python (tool de los agentes):** interfaz controlada que el agente utiliza como herramienta para consultar o registrar información autorizada.
7. **Base de datos relacional:** almacena los datos y el estado necesarios para el seguimiento del programa.
8. **Registro de mensajes:** los mensajes enviados y recibidos se registran por medio de la API de datos.

El diagrama debe mostrar la dirección del flujo: mensaje de WhatsApp → webhook / túnel → router → agente correspondiente → API como herramienta → base de datos, y el retorno de la respuesta hacia WhatsApp. Mostrar también que el enrutador impide que el agente de un chat acceda a otro chat.

#### Decisiones de arquitectura y seguridad

Dar especial visibilidad a los siguientes puntos:

- **Aislamiento por participante:** cada agente dispone de contexto/memoria independiente y solo recibe acceso a la información del participante que tiene asignado.
- **Acceso mediado por API:** los agentes no consultan directamente la base de datos. La API, desarrollada en Python y expuesta como tool, media las operaciones y aplica la restricción de acceso por participante.
- **Enrutamiento de conversaciones:** una API/router propio relaciona cada chat con su agente correspondiente. El agente no necesita conocer ni consultar los demás chats.
- **Separación entre canal, lógica y datos:** WhatsApp se integra mediante un webhook; la orquestación y las reglas de interacción residen en la capa de aplicación; los datos se consultan por una interfaz controlada.
- **Reducción de superficie de ataque:** Cloudflare Tunnel utiliza una conexión iniciada desde el contenedor hacia Cloudflare; no se requiere exponer directamente puertos entrantes del servidor en la arquitectura presentada.
- **Cifrado en tránsito:** la comunicación de Meta a Cloudflare se realiza mediante HTTPS, de acuerdo con el diseño documentado. No describir esto como cifrado de extremo a extremo de todo el sistema.
- **Trazabilidad operativa:** los mensajes enviados y recibidos se registran mediante la API de datos.
- **Consentimiento y activación:** el diseño contempla validar que el participante esté activo y cuente con los consentimientos requeridos antes de habilitar interacciones del agente. No presentar la implementación de este control como completada si el repositorio o evidencia no lo confirma.
- **Supervisión humana:** las señales académicas, comportamentales o sociales deben facilitar el seguimiento del equipo humano, no convertirse en decisiones automatizadas de alto impacto.
- **Control de costos y uso:** se identificó el riesgo de interacciones ilimitadas fuera de las sesiones. Se contempló contar interacciones y aplicar límites operativos para controlar consumo y costos. Presentarlo como riesgo y control considerado, no como funcionalidad implementada salvo evidencia.

Usar un ejemplo sencillo para hacer tangible el riesgo de privacidad, sin emplear datos reales: *el agente asignado a Participante A no puede responder preguntas ni revelar información de Participante B*. No usar nombres reales, conversaciones, números telefónicos, datos de estudiantes ni capturas de información personal.

#### Tecnologías del proyecto

Mostrar etiquetas visibles:

`Python` · `LLM` · `Agent tools` · `APIs` · `Relational database` · `WhatsApp Business API` · `Webhooks` · `Cloudflare Tunnel` · `Docker / containers` · `Agent routing`.

Incluir **OpenClaw** y **n8n** únicamente bajo una nota de evaluación tecnológica, nunca como herramientas utilizadas en la implementación final:

> Se evaluaron OpenClaw y n8n como alternativas de orquestación. La solución final se desarrolló mediante un flujo propio en Python, junto con las APIs necesarias para el enrutamiento y el acceso controlado a datos.

Esta distinción es crítica. No afirmar que Lore fue construido con OpenClaw o n8n, ni que esos entornos fueron desplegados en producción. El valor técnico es haber evaluado alternativas y construido una solución propia ajustada a los requerimientos de integración, privacidad y control.

#### Estado y alcance: redacción honesta

- Describir como desarrollos propios el flujo de IA en Python, la API de acceso a base de datos desarrollada como tool, el modelo relacional y la integración de comunicación descrita por Alfredo.
- No afirmar que la plataforma funciona a escala, atiende miles de usuarios, está en producción continua o alcanza métricas de impacto no documentadas.
- Diferenciar componentes implementados de capacidades previstas o controles considerados.
- No copiar el estado de tareas pendientes que aparece en algunas diapositivas de la presentación del 26 de junio de 2026 como si describiera el estado final: la presentación es un insumo de diseño y Alfredo aclara que la orquestación final se resolvió con Python, no con OpenClaw.
- Presentar el proyecto como una experiencia de consultoría y construcción de arquitectura/prototipo, no como un producto comercial genérico.

### Sección D — Proyecto: chatbot para ADRES

**Título:** Chatbot institucional con embeddings y despliegue contenerizado.

**Texto sugerido:**

> Desarrollo de un chatbot para ADRES, construido en .NET e integrado con modelos de embeddings. La solución se preparó para ejecutarse en contenedores Docker y desplegarse sobre Kubernetes en la nube de Microsoft Azure. El proyecto conecta desarrollo de aplicaciones, procesamiento semántico y prácticas de despliegue de servicios en infraestructura cloud.

Mostrar las tecnologías como etiquetas: `.NET` · `Embeddings` · `Docker` · `Kubernetes` · `Microsoft Azure`.

No inventar el proveedor del modelo, la base vectorial, el patrón RAG, métricas de desempeño, usuarios atendidos ni detalles internos de ADRES. Explicar embeddings como componente utilizado, sin agregar servicios que no hayan sido confirmados. No publicar código, datos, diagramas internos ni capturas confidenciales.

### Sección E — Proyecto: aplicación móvil de Anderer Sinn

**Título:** Aplicación móvil — proyecto de producto digital de Anderer Sinn (2024).

**Texto sugerido:**

> Participación en el desarrollo de una solución móvil dentro del trabajo de producto tecnológico de Anderer Sinn. Este proyecto complementa la experiencia de backend y datos con una perspectiva de producto: interfaz, flujo de usuario y construcción de una experiencia digital orientada a un uso concreto.

Enlazar al portafolio 2024 de Anderer Sinn y, cuando sea útil, al demo publicado de APATA Colombia. El portafolio público enlaza una experiencia de APATA en `https://apata-c22a1.web.app/`.

**Importante:** no inventar lenguaje, framework, arquitectura, funciones, integraciones ni alcance móvil específico si no está respaldado por el código o por materiales locales. Si OpenCode encuentra evidencia dentro del repositorio, puede ampliar la ficha; si no, mantener esta descripción prudente.

### Sección F — Fundamentos de ingeniería: proyectos seleccionados

Incluir una sección compacta que demuestre trayectoria construyendo software antes de los agentes. No competir visualmente con Lore, pero sí mostrar variedad y profundidad.

#### 1. Common Goods Experiment — software para experimentos conductuales

Aplicación web para experimentos científicos con interacciones simultáneas entre participantes, coordinadas por un protocolo. Las decisiones individuales actualizan el estado del grupo y quedan registradas para análisis econométrico.

- Backend: Python y framework oTree.
- Frontend: HTML, CSS y JavaScript para módulos personalizados.
- Estado compartido en tiempo real, base de datos persistente y autenticación administrativa.
- Soporta decenas de participantes en interacciones coordinadas.

Enlace: `https://sites.google.com/view/alfredo-orozco/lab/common-goods-experiment`.

#### 2. Homo Sapiens — aplicación Android de recolección de datos offline

Aplicación para recoger información en investigación académica en lugares sin conexión a internet. Incluye secuencias dinámicas de preguntas, rutas condicionadas por respuestas, menús aleatorizados y registro exportable de respuestas y evidencias autorizadas.

- Android.
- Diseño de flujo de encuesta y experiencia de usuario.
- Persistencia y consolidación de información recolectada en dispositivos.
- Aleatorización de opciones para responder a requerimientos del diseño de investigación.

Enlace: `https://sites.google.com/view/alfredo-orozco/lab/homo-sapiens`.

#### 3. W Gallery — galería virtual 3D

Galería virtual interactiva creada para exposiciones académicas. Renderiza un espacio tridimensional en el navegador mediante un modelo SkyBox y permite explorar presentaciones y registrar visitas.

- Three.js para visualización 3D en el cliente.
- Node.js para el servidor.
- SQL para persistencia del libro de visitantes.
- Ilustración vectorial original.

Enlace: `https://sites.google.com/view/alfredo-orozco/lab/w-gallery`.

#### 4. PeanutsJS — framework backend MVC en Node.js

Framework personal en versión prototipo para organizar proyectos web con el patrón Model–View–Controller. Separa modelos, vistas, controladores y rutas para facilitar modularidad y mantenimiento.

- Node.js.
- HTML, JavaScript, CSS y EJS.
- Patrón MVC y manejo de estructuras SQL desde los modelos.

Enlace: `https://sites.google.com/view/alfredo-orozco/lab/peanutsjs`.

#### 5. Villa Diana — sitio web administrable para turismo

Sitio web para una iniciativa turística, con identidad gráfica, diseño responsive y un administrador capaz de actualizar información publicada, como precios, contenidos, reservas y reseñas.

- Java y Apache Tomcat para la integración del servidor.
- HTML, CSS y JavaScript.
- SQL para persistencia.
- Interfaz administrativa para editar contenido.

Enlace: `https://sites.google.com/view/alfredo-orozco/lab/villa-diana`.

#### 6. Virtual Campus — portal estructurado de recursos

Portal de preguntas frecuentes y recursos pedagógicos para docentes durante la adaptación a la enseñanza virtual. Organiza fuentes dispersas en categorías y bloques para facilitar su búsqueda desde distintos dispositivos.

- HTML, CSS y JavaScript.
- Diseño responsive.
- Organización y clasificación de contenidos.
- Actualización editorial continua.

Enlace: `https://sites.google.com/view/alfredo-orozco/lab/virtual-campus`.

Los proyectos anteriores pueden mostrarse en tarjetas o una cuadrícula compacta. Cada tarjeta debe incluir el reto, la solución y la tecnología principal en texto visible, con un enlace de ampliación.

### Sección G — Competencias técnicas

Construir una matriz visual por dominios, no una nube de palabras. Utilizar únicamente las herramientas y conocimientos respaldados por los insumos.

#### Agent engineering e integración

- Diseño de flujos de agentes y separación de responsabilidades.
- Integración de modelos de lenguaje y herramientas (tools).
- Desarrollo de APIs para acceso controlado a datos.
- Enrutamiento de conversaciones y webhooks.
- Integración de WhatsApp Business API.
- Python para lógica de aplicación, integración y orquestación.
- Evaluación de alternativas de orquestación: OpenClaw y n8n (evaluadas, no usadas en la implementación final de Lore).

#### Desarrollo de software y arquitectura

- Python, .NET, Node.js y Java.
- HTML, CSS y JavaScript.
- APIs y patrones de arquitectura de aplicaciones.
- Diseño relacional y SQL.
- Aplicaciones Android.
- Three.js y oTree en proyectos específicos.

#### Cloud, infraestructura y contenedores

- Docker y contenedores.
- Kubernetes.
- Microsoft Azure.
- Google Cloud Platform.
- BigQuery.
- Vertex AI.
- Cloudflare Tunnel.

#### Data engineering, Big Data y bases de datos

- Modelado relacional.
- Modelado dimensional.
- Diseño de Data Warehouse.
- SQL y consultas analíticas.
- Procesamiento de datos y pipelines.
- BigQuery como plataforma de Data Warehouse.
- Dataform y versionamiento de pipelines, dentro del material de formación consultado.

#### Machine Learning y MLOps

- Fundamentos de aprendizaje supervisado y no supervisado.
- Problemas de clasificación y clustering.
- Python para prácticas de análisis y modelado.
- Ciclo de vida de modelos: preparación de datos, entrenamiento, predicción, evaluación y despliegue.
- Vertex AI, AutoML, Custom Training, ajuste de hiperparámetros y Vertex Pipelines como tecnologías y flujos trabajados en el contexto de formación y diseño curricular.

No representar todos los elementos como experiencia profesional de producción al mismo nivel. Diferenciar con microetiquetas discretas, por ejemplo `Proyectos implementados`, `Formación / diseño curricular` y `Tecnologías exploradas`, o explicar los niveles por contexto. No utilizar barras de porcentaje de dominio ni estrellas de habilidad.

### Sección H — Diseño curricular y transferencia de conocimiento

Presentar la formación técnica como una fortaleza complementaria: capacidad de estructurar problemas, convertir conceptos técnicos en laboratorios aplicados y comunicar decisiones de arquitectura.

Organizar en tres experiencias:

#### Estrategia y análisis de datos: de SQL a tableros BI

Programa de Educación Continua de la Universidad de los Andes. Enfoque en pasar de la elaboración de queries a una lectura estratégica de los datos: identificar problemas, explicar por qué ocurren, reconocer oportunidades y monitorear el avance hacia metas. Se trabaja SQL como conexión con los datos de la organización y visualización dinámica para apoyar decisiones.

Enlace oficial: `https://educacioncontinua.uniandes.edu.co/estrategia-y-analisis-de-datos-de-sql-a-tableros-bi/p`.

#### Diseño y gestión de bases de datos con SQL

Experiencia de diseño curricular centrada en:

- Comprensión del negocio y traducción de necesidades de información.
- Fundamentos de bases de datos relacionales.
- Modelado de datos y modelado dimensional.
- Diseño de Data Warehouse.
- Consultas SQL.
- Google Cloud y BigQuery como entorno de trabajo.

Enfatizar la secuencia negocio → modelo de datos → Data Warehouse → SQL → análisis. No presentar el curso como un simple taller de sintaxis SQL.

#### Análisis de datos y fundamentos de Machine Learning con Python

Experiencia curricular que introduce aprendizaje supervisado y no supervisado, con prácticas de clasificación y clustering. Explicar que se aborda desde el problema analítico y la preparación de datos, no solo desde la ejecución de algoritmos.

Enlazar como recurso complementario de cloud y MLOps el material pedagógico de Vertex AI, que incluye Data Warehouse introductorio, Dataform y versionamiento de pipelines, Vertex AI, AutoML, Custom Training, refinamiento de modelos y Vertex Pipelines.

Enlace: `https://sites.google.com/view/vertexairecursos`.

### Sección I — Cómo pienso la innovación

Sección breve para conectar los dominios técnicos con el perfil de innovación.

Texto sugerido:

> Una solución innovadora no termina cuando el modelo responde. Tiene que integrarse con los procesos reales, trabajar con información bien estructurada, respetar permisos, ofrecer una experiencia clara y poder desplegarse y mantenerse. Por eso abordo los proyectos desde el problema y el usuario, y diseño en conjunto las capas de aplicación, datos, infraestructura y operación.

Mostrar cuatro principios:

- **Problema antes que herramienta:** la arquitectura responde a un flujo de trabajo concreto.
- **Sistemas completos:** interfaz, lógica, datos, integraciones e infraestructura se diseñan como un conjunto.
- **Seguridad desde el diseño:** permisos, aislamiento y límites operativos no son añadidos de última hora.
- **Iteración con criterio:** prototipar, observar, validar y mejorar con evidencia.

### Sección J — Contacto

Cerrar con una invitación directa, sin exceso de texto:

**¿Tienes un reto de innovación que requiera conectar agentes, datos y software? Hablemos.**

Datos:

- Correo: `aloroque@anderersinn.com` (enlace `mailto:`).
- LinkedIn: `https://www.linkedin.com/in/alfredo-eleazar-orozco-quesada`.
- Teléfono / WhatsApp: `+57 302 416 7492` (enlace `https://wa.me/573024167492`).

El CTA principal debe ser correo o LinkedIn. No incorporar un formulario que no tenga backend funcional.

---

## 5. Referencias externas y reglas de uso

Estos enlaces son fuentes para ampliar información. La página debe contener suficiente contexto propio para que no sea necesario visitarlos.

| Recurso | URL | Uso en el portafolio |
|---|---|---|
| Portafolio personal anterior | https://sites.google.com/view/alfredo-orozco | Perfil y contexto profesional |
| Lab — índice de proyectos | https://sites.google.com/view/alfredo-orozco/lab | Índice de proyectos históricos |
| W Gallery | https://sites.google.com/view/alfredo-orozco/lab/w-gallery | Proyecto 3D con Three.js, Node.js y SQL |
| Virtual Campus | https://sites.google.com/view/alfredo-orozco/lab/virtual-campus | Portal responsive de recursos |
| Common Goods Experiment | https://sites.google.com/view/alfredo-orozco/lab/common-goods-experiment | Aplicación experimental con Python/oTree |
| PeanutsJS | https://sites.google.com/view/alfredo-orozco/lab/peanutsjs | Framework MVC en Node.js |
| Villa Diana | https://sites.google.com/view/alfredo-orozco/lab/villa-diana | Web administrable con Java, Tomcat y SQL |
| Homo Sapiens | https://sites.google.com/view/alfredo-orozco/lab/homo-sapiens | Aplicación Android offline para investigación |
| Material pedagógico Vertex AI | https://sites.google.com/view/vertexairecursos | Cloud, MLOps, Vertex AI y pipelines |
| Portafolio Anderer Sinn 2024 | https://anderersinn.com/portafolios/portafolio2024 | Contexto del proyecto móvil y producto digital |
| Demo APATA | https://apata-c22a1.web.app/ | Recurso ampliado del proyecto móvil; requiere JavaScript |
| Curso Uniandes SQL a BI | https://educacioncontinua.uniandes.edu.co/estrategia-y-analisis-de-datos-de-sql-a-tableros-bi/p | Evidencia pública de formación en analítica estratégica |
| LinkedIn | https://www.linkedin.com/in/alfredo-eleazar-orozco-quesada | Perfil profesional y contacto |

La presentación de consultoría `2026 06 30 Consultoría en desarrollo de agentes.pptx.pdf` es un insumo interno de este requerimiento. Extraer de ella los conceptos de Lore, el modelo relacional, el uso de API como interfaz segura, el diagrama de agentes y la integración de WhatsApp / Cloudflare. **No enlazar ni publicar el PDF** a menos que Alfredo lo autorice expresamente.

---

## 6. Criterios de precisión y confidencialidad

Estos criterios tienen prioridad sobre cualquier decisión estética o comercial:

- No inventar indicadores, métricas, cifras de usuarios, ahorro de costos, precisión de modelos, escalabilidad demostrada ni impactos cuantificados.
- No afirmar que OpenClaw o n8n fueron el motor de Lore. Fueron alternativas evaluadas; la implementación final de orquestación se desarrolló en Python.
- No confundir el chatbot de ADRES con el proyecto Lore; son proyectos separados.
- No afirmar que el material educativo de Vertex AI representa un despliegue productivo de modelos en Vertex AI. Ubicarlo en formación, fundamentos y diseño curricular.
- Distinguir la experiencia práctica en proyectos de los conocimientos trabajados en cursos o materiales pedagógicos.
- No inventar el stack técnico de la aplicación móvil de Anderer Sinn/APATA.
- No mostrar nombres reales ni información de participantes, estudiantes, personas usuarias o conversaciones. Utilizar exclusivamente ejemplos ficticios y genéricos.
- No publicar diagramas con datos de conexión, credenciales, tokens, URLs privadas, números de teléfono de participantes o detalles internos de infraestructura.
- No revelar información sensible de ADRES ni de las organizaciones vinculadas a la consultoría. Presentar arquitectura a nivel conceptual y los componentes tecnológicos autorizados.
- Mencionar el nombre de Fundación Capital en el proyecto Lore solo si Alfredo confirma que puede atribuirse públicamente. En caso contrario, describirlo como “consultoría para un programa asincrónico de formación”.
- Las afirmaciones sobre aislamiento, privacidad y superficie de ataque deben describir controles de diseño concretos, sin asegurar “seguridad absoluta” o “riesgo cero”.

---

## 7. Requisitos técnicos y de calidad del sitio

- Una única ruta principal, sin necesidad de backend.
- Código responsive, semántico y mantenible.
- Carga optimizada de `assets/alfredo.jpg`.
- Integrar las tres imágenes locales de Lore documentadas en la sección 3: `assets/lore-agent-isolation.webp`, `assets/lore-memory-api.webp` y `assets/lore-whatsapp-integration.webp`. Verificar que las rutas existan y que se muestren sin errores.
- Metadatos SEO: title, description, Open Graph básico y favicon si ya existe uno válido en el proyecto. No crear una marca gráfica improvisada.
- Enlaces externos funcionales y claramente identificados.
- Los diagramas deben conservar su legibilidad en pantallas pequeñas.
- Usar componentes reutilizables para proyectos, etiquetas y bloques de tecnologías.
- No utilizar placeholders de texto, imágenes rotas ni secciones vacías en la entrega.
- No usar contadores, barras de porcentaje, estrellas de habilidad ni animaciones de números sin evidencia.
- El contenido fundamental debe estar disponible en el HTML inicial y ser indexable; no esconder todo el texto detrás de interacciones.
- Verificar `npm run build` (o el comando equivalente del stack que ya exista) y corregir errores antes de terminar.
- Comprobar tamaños de pantalla aproximados de 375 px, 768 px y 1440 px.
- Revisar contraste, foco de teclado, navegación y desbordamiento horizontal.

---

## 8. Criterio de éxito

El resultado es exitoso cuando una persona que no abra ningún enlace externo pueda, en una visita breve, entender que Alfredo:

1. Tiene fundamentos reales de desarrollo y ha construido aplicaciones web, móviles, experimentales y sistemas backend.
2. Ha trabajado con .NET, Python, Node.js, SQL, Docker, Kubernetes y servicios cloud en proyectos concretos.
3. Diseñó una arquitectura de agentes con orquestación propia en Python, herramientas/API, memoria por participante, enrutamiento de conversaciones y controles de acceso a datos.
4. Comprende que los sistemas de agentes requieren seguridad, privacidad, observabilidad, control de costos e intervención humana, además del modelo de lenguaje.
5. Tiene fundamentos de Data Warehouse, BigQuery, aprendizaje supervisado y no supervisado, Vertex AI y MLOps.
6. Puede traducir conocimiento técnico en diseño curricular, formación y comunicación con perfiles no técnicos.

El sitio debe sentirse como el portafolio de alguien que **puede diseñar y construir la arquitectura que conecta agentes con el mundo real**, no como una lista de cursos o una galería de tecnologías.
