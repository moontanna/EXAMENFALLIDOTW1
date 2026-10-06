<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getCursoById } from '../bases/impfunciones'

const route = useRoute()

const secciones = [
  { titulo: 'Material de apoyo', id: 'material-apoyo' },
  { titulo: 'Contacto', id: 'contacto' },
  { titulo: 'Certificaciones', id: 'certificaciones' },
  { titulo: 'Empresas de referencia', id: 'empresas-referencia' },
  { titulo: 'Caso de éxito', id: 'caso-exito' },
  { titulo: 'Videos', id: 'videos' },
  { titulo: 'Documentos y recursos', id: 'documentos-recursos' },
]

const curso = computed(() => {
  return getCursoById(Number(route.params.id))
})
</script>

<template>
  <main v-if="curso" class="detalle-curso">
    <div class="detalle-layout">
      <aside class="indice">
        <p class="indice-titulo">Contenido</p>
        <nav class="indice-nav">
          <template v-for="seccion in secciones" :key="seccion.id">
            <a
              v-if="seccion.id !== 'videos' || curso.videos.length"
              :href="`#${seccion.id}`"
            >
              {{ seccion.titulo }}
            </a>
          </template>
        </nav>
      </aside>

      <div class="contenido">
        <RouterLink to="/cursos" class="volver">← Volver a los cursos</RouterLink>
        <h1>{{ curso.nombre }}</h1>
        <RouterLink
          :to="{ name: 'inscripciones', query: { curso: curso.id } }"
          class="boton-inscripcion"
        >
          Inscribirme a este curso
        </RouterLink>

        <section id="material-apoyo">
          <figure class="imagen-apoyo">
            <img :src="curso.imagenApoyo.url" :alt="curso.imagenApoyo.alt" loading="lazy" />
          </figure>
         
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>
            Correo:
            <a :href="`mailto:${curso.contacto.correo}`">
              {{ curso.contacto.correo }}
            </a>
          </p>
          <p>Teléfono: {{ curso.contacto.telefono }}</p>
          <p v-if="curso.contacto.horario">Horario: {{ curso.contacto.horario }}</p>
        </section>

        <section id="certificaciones">
          <h2>Certificaciones</h2>
          <ul>
            <li v-for="certificacion in curso.certificaciones" :key="certificacion">
              {{ certificacion }}
            </li>
          </ul>
        </section>

        <section id="empresas-referencia">
          <h2>Empresas de referencia</h2>
          <ul>
            <li v-for="empresa in curso.empresasReferencia" :key="empresa.url">
              <a :href="empresa.url" target="_blank" rel="noopener noreferrer">
                {{ empresa.titulo }}
              </a>
            </li>
          </ul>
        </section>

        <section id="caso-exito">
          <h2>Caso de éxito</h2>
          <h3>{{ curso.casoDeExito.empresa }}</h3>
          <p>{{ curso.casoDeExito.descripcion }}</p>
        </section>

        <section v-if="curso.videos.length" id="videos">
          <h2>Videos</h2>
          <div class="videos-grid">
            <article v-for="video in curso.videos" :key="video.url" class="video-card">
              <div v-if="video.url.includes('/embed/')" class="video-wrapper">
                <iframe
                  :src="video.url"
                  :title="video.titulo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <a v-else :href="video.url" target="_blank" rel="noopener noreferrer" class="video-link">
                {{ video.titulo }}
              </a>
            </article>
          </div>
        </section>

        <section id="documentos-recursos">
          <h2>Material de apoyo</h2>
          <h2>Documentos y recursos</h2>
          <ul>
            <li v-for="material in curso.materialApoyo" :key="material.url">
              <a :href="material.url" target="_blank" rel="noopener noreferrer">
                {{ material.titulo }}
              </a>
            </li>
            <li>
              <a :href="curso.imagenApoyo.fuenteUrl" target="_blank" rel="noopener noreferrer">
                Crédito de la imagen: {{ curso.imagenApoyo.credito }}
              </a>
              ·
              <a :href="curso.imagenApoyo.licenciaUrl" target="_blank" rel="noopener noreferrer">
                {{ curso.imagenApoyo.licencia }}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>

  <main v-else class="detalle-curso">
    <h1>No se encontró el curso</h1>
    <RouterLink to="/cursos" class="volver">Volver al catálogo</RouterLink>
  </main>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
  scroll-padding-top: 82px;
}

.detalle-curso {
  width: min(100% - 48px, 1180px);
  min-height: calc(100vh - 62px);
  margin: 0 auto;
  padding: 28px 0 48px;
  color: var(--brand-purple-deep);
  background: #fff;
}

.detalle-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}

.indice {
  position: sticky;
  top: 24px;
  padding: 20px 18px;
  border: 1px solid rgba(98, 55, 135, 0.12);
  border-radius: 14px;
  background: #f7f3ff;
  text-align: left;
}

.indice-titulo {
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-purple);
  text-align: left;
}

.indice-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.indice-nav a {
  display: block;
  color: var(--brand-purple-deep);
  text-decoration: none;
  text-align: left;
  transition: color 0.2s ease, transform 0.2s ease;
}

.indice-nav a:hover {
  color: var(--brand-purple);
  transform: translateX(4px);
}

.contenido {
  min-width: 0;
  text-align: left;
}

.volver {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--brand-purple);
}

.boton-inscripcion {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 24px;
  background: var(--brand-purple);
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}

.boton-inscripcion:hover,
.boton-inscripcion:focus-visible {
  background: var(--brand-purple-deep);
}

.detalle-curso,
section,
.content,
.contenido > * {
  text-align: left;
}

h1 {
  margin: 0 0 24px;
  color: var(--brand-purple-deep);
  font-size: 32px;
  line-height: 1.25;
}

section {
  margin-top: 24px;
  scroll-margin-top: 82px;
}

h2 {
  margin: 0 0 10px;
  color: var(--brand-purple);
  font-size: 22px;
}

h3 {
  margin: 0 0 6px;
  font-size: 17px;
}

p,
li {
  line-height: 1.6;
}

p {
  margin: 4px 0;
}

ul {
  margin: 0;
  padding-left: 22px;
}

.imagen-apoyo {
  margin: 0 0 16px;
}

.imagen-apoyo img {
  display: block;
  width: min(100%, 720px);
  max-height: 360px;
  object-fit: cover;
  border-radius: 12px;
}

.videos-grid {
  display: grid;
  gap: 22px;
}

.video-card {
  display: grid;
  gap: 12px;
  padding: 14px;
  border: 1px solid rgba(98, 55, 135, 0.12);
  border-radius: 12px;
  background: #faf7ff;
}

.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 10px;
  background: #000;
}

.video-wrapper iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.video-link {
  color: var(--brand-purple);
  text-decoration: none;
}

a {
  color: var(--brand-purple);
}

@media (max-width: 768px) {
  .detalle-layout {
    display: block;
  }

  .indice {
    position: static;
    margin-bottom: 24px;
  }
}
</style>
