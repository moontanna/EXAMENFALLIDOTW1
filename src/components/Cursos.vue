<script setup lang="ts">
import { computed, ref } from 'vue'
import { cursos } from '../data/cursos'

const idsDestacados = [1, 4, 5, 8, 9]
const cursosDestacados = computed(() =>
  cursos.filter((curso) => idsDestacados.includes(curso.id)),
)
const cursosRestantes = computed(() =>
  cursos.filter((curso) => !idsDestacados.includes(curso.id)),
)

const indiceActual = ref(0)
const cursoActual = computed(() => cursosDestacados.value[indiceActual.value])

function anterior() {
  indiceActual.value =
    (indiceActual.value - 1 + cursosDestacados.value.length) %
    cursosDestacados.value.length
}

function siguiente() {
  indiceActual.value = (indiceActual.value + 1) % cursosDestacados.value.length
}
</script>

<template>
  <main class="cursos">
    <section class="destacados" aria-label="Cursos más solicitados">
      <h1>Cursos más solicitados</h1>

      <div v-if="cursoActual" class="carrusel">
        <button
          class="control"
          type="button"
          aria-label="Curso anterior"
          @click="anterior"
        >
          ‹
        </button>

        <article class="curso curso-destacado" aria-live="polite">
          <span class="etiqueta">Más solicitado</span>
          <h2>{{ cursoActual.nombre }}</h2>
          <p>{{ indiceActual + 1 }} de {{ cursosDestacados.length }}</p>
        </article>

        <button
          class="control"
          type="button"
          aria-label="Siguiente curso"
          @click="siguiente"
        >
          ›
        </button>
      </div>
    </section>

    <section v-if="cursosRestantes.length" class="otros-cursos">
      <h2>Otros cursos</h2>
      <article
        v-for="curso in cursosRestantes"
        :key="curso.id"
        class="curso"
      >
        <h3>{{ curso.nombre }}</h3>
      </article>
    </section>
  </main>
</template>

<style scoped>
.cursos {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.destacados {
  padding: 1.5rem;
  border-radius: 12px;
  background: #f5f7ff;
}

.carrusel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.curso {
  flex: 1;
  margin-bottom: 1rem;
  padding: 1.25rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}

.curso-destacado {
  max-width: 600px;
  min-height: 130px;
  margin: 0;
  text-align: center;
}

.curso-destacado h2 {
  margin: 1rem 0;
}

.curso-destacado p {
  color: #555;
}

.etiqueta {
  display: inline-block;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: #fff0c2;
  color: #704b00;
  font-size: 0.85rem;
  font-weight: 700;
}

.control {
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 50%;
  background: #263b80;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
}

.control:hover {
  background: #17285e;
}

.otros-cursos {
  margin-top: 2rem;
}
</style>
