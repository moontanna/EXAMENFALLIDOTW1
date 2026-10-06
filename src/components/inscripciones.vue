<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { cursos, inscripciones } from '../data/cursos'

const route = useRoute()
const idInicial = Number(route.query.curso)
const cursoInicial = cursos.find((curso) => curso.id === idInicial)

const nombre = ref('')
const correo = ref('')
const telefono = ref('')
const cursoId = ref(cursoInicial?.id.toString() ?? '')
const guardado = ref(false)

const cursoSeleccionado = computed(() =>
  cursos.find((curso) => curso.id === Number(cursoId.value)),
)

function guardarInscripcion() {
  const curso = cursoSeleccionado.value

  if (!curso) {
    return
  }

  inscripciones.push({
    nombre: nombre.value,
    correo: correo.value,
    telefono: telefono.value,
    cursoId: curso.id,
    cursoNombre: curso.nombre,
    fecha: new Date().toISOString(),
  })

  guardado.value = true
}
</script>

<template>
  <main class="pagina-inscripcion">
    <RouterLink to="/cursos" class="volver">← Volver a los cursos</RouterLink>
    <header class="encabezado">
      <h1>Inscripción a un curso</h1>
      <p>Completa tus datos y selecciona el curso que te interesa.</p>
    </header>

    <form class="formulario" @submit.prevent="guardarInscripcion">
      <label for="nombre">Nombre completo</label>
      <input id="nombre" v-model.trim="nombre" name="nombre" autocomplete="name" required />

      <label for="correo">Correo electrónico</label>
      <input
        id="correo"
        v-model.trim="correo"
        name="correo"
        type="email"
        autocomplete="email"
        required
      />

      <label for="telefono">Teléfono</label>
      <input
        id="telefono"
        v-model.trim="telefono"
        name="telefono"
        type="tel"
        autocomplete="tel"
        required
      />

      <label for="curso">Curso</label>
      <select id="curso" v-model="cursoId" name="curso" required>
        <option value="" disabled>Selecciona un curso</option>
        <option v-for="curso in cursos" :key="curso.id" :value="curso.id.toString()">
          {{ curso.nombre }}
        </option>
      </select>

      <button type="submit" class="boton-enviar">Guardar inscripción</button>

      <p v-if="guardado" class="aviso" role="status">
        Inscripción guardada correctamente en la lista de inscripciones.
      </p>
    </form>
  </main>
</template>

<style scoped>
.pagina-inscripcion {
  width: min(100% - 40px, 720px);
  min-height: calc(100vh - 62px);
  margin: 0 auto;
  padding: 28px 0 48px;
  color: var(--brand-purple-deep);
}

.volver {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--brand-purple);
}

.encabezado {
  margin-bottom: 24px;
}

.encabezado h1 {
  margin: 0 0 8px;
  font-size: 32px;
}

.encabezado p {
  margin: 0;
}

.formulario {
  display: grid;
  gap: 10px;
  padding: 24px;
  border: 1px solid rgb(98 55 135 / 16%);
  border-radius: 16px;
  background: #faf7ff;
}

.formulario label {
  margin-top: 8px;
  font-weight: 600;
}

.formulario input,
.formulario select {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  box-sizing: border-box;
  border: 1px solid #b8a9c7;
  border-radius: 8px;
  background: #fff;
  color: var(--brand-purple-deep);
  font: inherit;
}

.formulario input:focus,
.formulario select:focus {
  outline: 2px solid var(--brand-purple);
  outline-offset: 2px;
}

.boton-enviar {
  min-height: 46px;
  margin-top: 14px;
  padding: 10px 16px;
  border: 0;
  border-radius: 24px;
  background: var(--brand-purple);
  color: #fff;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.boton-enviar:hover,
.boton-enviar:focus-visible {
  background: var(--brand-purple-deep);
}

.aviso {
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
}

@media (max-width: 520px) {
  .formulario {
    padding: 18px;
  }
}
</style>
