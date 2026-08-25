# Implementación de un sistema de gestión de usuarios en la nube

El equipo de desarrollo de una fintech necesita implementar un sistema de gestión de usuarios que se ejecute en la nube. El sistema debe permitir la creación, lectura, actualización y eliminación de usuarios, así como la autenticación y autorización. El sistema debe ser escalable, seguro y resiliente.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Fundamentos de Cloud Computing |
| **Nivel** | senior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 4-5 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Diseño del sistema

**Objetivo:** Definir la arquitectura del sistema y las decisiones de diseño clave.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica los componentes principales del sistema y sus responsabilidades.
- Decide cómo estructurar los datos y cómo manejar la autenticación y autorización.
- Evalúa las opciones de almacenamiento y computa en la nube y elige la más adecuada para el sistema.

**Entregable:** Diagrama de arquitectura del sistema y documento de decisiones de diseño.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la escalabilidad, seguridad y resiliencia del sistema.
- Piensa en cómo manejar los errores y las situaciones de fallo.

</details>

### Fase 2: Implementación de la capa de autenticación

**Objetivo:** Implementar la autenticación y autorización del sistema.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Diseña y implementa el flujo de autenticación y autorización del sistema.
- Integra el sistema con un servicio de autenticación en la nube.
- Maneja los errores y las situaciones de fallo de forma adecuada.

**Entregable:** Código fuente del sistema con la autenticación y autorización implementadas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la seguridad y la usabilidad del flujo de autenticación.
- Piensa en cómo manejar los errores y las situaciones de fallo de forma segura y amigable para el usuario.

</details>

### Fase 3: Implementación de la capa de gestión de usuarios

**Objetivo:** Implementar las operaciones CRUD para la gestión de usuarios.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Diseña y implementa las operaciones CRUD para la gestión de usuarios.
- Integra el sistema con un servicio de almacenamiento en la nube.
- Maneja los errores y las situaciones de fallo de forma adecuada.

**Entregable:** Código fuente del sistema con las operaciones CRUD implementadas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la eficiencia y la escalabilidad de las operaciones CRUD.
- Piensa en cómo manejar los errores y las situaciones de fallo de forma segura y amigable para el usuario.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es la autenticación y autorización en un sistema de gestión de usuarios?
- **paraQueSirve**: ¿Para qué sirve la autenticación y autorización en un sistema de gestión de usuarios?
- **comoSeUsa**: ¿Cómo se usa la autenticación y autorización en un sistema de gestión de usuarios?
- **erroresComunes**: ¿Cuáles son los errores comunes en la implementación de la autenticación y autorización en un sistema de gestión de usuarios?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de la autenticación y autorización en un sistema de gestión de usuarios?

## Criterios de Evaluacion

- Definición clara y concisa de la arquitectura del sistema.
- Implementación correcta y eficiente de la autenticación y autorización.
- Implementación correcta y eficiente de las operaciones CRUD para la gestión de usuarios.
- Manejo adecuado de los errores y las situaciones de fallo.
- Justificación clara y concisa de las decisiones de diseño tomadas.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
