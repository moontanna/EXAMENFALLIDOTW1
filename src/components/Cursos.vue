<script setup lang="ts">
import { computed, ref } from 'vue'
import { cursos } from '../data/cursos'

const idsDestacados = [1, 4, 5, 8, 9]
const filtro = ref('todos')
const busqueda = ref('')

const cursosVisibles = computed(() => {
  const termino = busqueda.value
    .trim()
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return cursos.filter((curso) => {
    const coincideFiltro =
      filtro.value === 'todos' ||
      (filtro.value === 'destacados' && idsDestacados.includes(curso.id))
    const lowercase = curso.nombre
      .toLocaleLowerCase('es')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    return coincideFiltro && lowercase.includes(termino)
  })
})
</script>

<template>
  <main class="pagina-cursos">
    <header class="encabezado">
      <h1>Mis cursos</h1>
      <p>Vista general del curso</p>
    </header>

    <div class="herramientas">
      <label class="filtro">
        <span aria-hidden="true">▽</span>
        <select v-model="filtro" aria-label="Filtrar cursos">
          <option value="todos">Todos</option>
          <option value="destacados">Más solicitados</option>
        </select>
      </label>

      <label class="buscador">
        <span class="icono-busqueda" aria-hidden="true"></span>
        <input
          v-model="busqueda"
          type="search"
          placeholder="Buscar"
          aria-label="Buscar cursos"
        />
      </label>
    </div>

    <section v-if="cursosVisibles.length" class="rejilla" aria-label="Cursos">
      <RouterLink
        v-for="curso in cursosVisibles"
        :key="curso.id"
        :to="{ name: 'detalle-curso', params: { id: curso.id } }"
        class="tarjeta"
      >
        <div class="portada" :class="`portada-${(curso.id - 1) % 5 + 1}`">
          <span class="iniciales" aria-hidden="true">UADY</span>
          <span
            v-if="idsDestacados.includes(curso.id)"
            class="insignia"
          >
            Más solicitado
          </span>
        </div>

        <div class="informacion">
          <p class="programa">Cursos UADY</p>
          <h2>{{ curso.nombre }}</h2>
        </div>
      </RouterLink>
    </section>

    <p v-else class="sin-resultados">
      No se encontraron cursos que coincidan con la búsqueda.
    </p>
  </main>
</template>

<style scoped>
.pagina-cursos {
  width: min(100% - 64px, 1320px);
  min-height: calc(100vh - 62px);
  margin: 0 auto;
  padding: 20px 0 48px;
  color: var(--brand-purple-deep);
  background: #fff;
  box-sizing: border-box;
}

.encabezado h1 {
  margin: 0 0 24px;
  color: var(--brand-purple-deep);
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.7px;
  line-height: 1.2;
}

.encabezado p {
  margin-bottom: 8px;
  font-size: 16px;
}

.herramientas {
  display: grid;
  gap: 12px;
  margin-bottom: 20px;
}

.filtro {
  display: inline-flex;
  width: fit-content;
  height: 34px;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  border-radius: 20px;
  background: var(--brand-surface);
  color: var(--brand-purple-deep);
  border: 1px solid var(--brand-gold);
}

.filtro select {
  max-width: 180px;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}

.buscador {
  display: flex;
  height: 44px;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border: 1px solid var(--brand-gold);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 2px 8px rgb(20 8 26 / 18%);
}

.icono-busqueda {
  position: relative;
  width: 13px;
  height: 13px;
  flex: 0 0 auto;
  border: 2px solid var(--brand-purple);
  border-radius: 50%;
}

.icono-busqueda::after {
  position: absolute;
  right: -5px;
  bottom: -3px;
  width: 6px;
  height: 2px;
  transform: rotate(45deg);
  border-radius: 2px;
  background: var(--brand-purple);
  content: '';
}

.buscador input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--brand-purple);
  font: inherit;
  font-size: 14px;
}

.rejilla {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px 40px;
}

.tarjeta {
  display: block;
  min-width: 0;
  color: inherit;
  text-decoration: none;
}

.portada {
  position: relative;
  display: flex;
  aspect-ratio: 1.8 / 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--brand-ivory) 0 40%, var(--brand-purple) 40% 72%, var(--brand-gold) 72%);
}

.portada-2 {
  background: linear-gradient(135deg, var(--brand-ivory), var(--brand-gold) 48%, var(--brand-purple-deep) 48%);
}

.portada-3 {
  background: linear-gradient(135deg, var(--brand-surface), var(--brand-gold) 48%, var(--brand-purple) 48%);
}

.portada-4 {
  background: linear-gradient(135deg, var(--brand-ivory), var(--brand-purple) 48%, var(--brand-gold) 48%);
}

.portada-5 {
  background: linear-gradient(135deg, var(--brand-surface), var(--brand-gold) 48%, var(--brand-purple-deep) 48%);
}

.portada {
  background-image:
    linear-gradient(rgb(58 27 69 / 18%), rgb(58 27 69 / 18%)),
    url('https://imgs.search.brave.com/t2SpGdHf9arqCCcBO_aKAg-muV78KaEbw0thk0P0hoo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc2No/b29sLXBpY3R1cmVz/LTcyaWFuMmJsa3pq/cHVvdXUuanBn');
  background-position: center;
  background-size: cover;
}

.iniciales {
  z-index: 1;
  color: var(--brand-ivory);
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 800;
  letter-spacing: 0.12em;
  text-shadow: 0 2px 12px rgb(0 0 0 / 28%);
}

.insignia {
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  padding: 5px 9px;
  border-radius: 14px;
  background: var(--brand-ivory);
  color: var(--brand-purple-deep);
  font-size: 11px;
  font-weight: 700;
}

.informacion {
  padding: 10px 20px 0;
  color: var(--brand-purple-deep);
  background: var(--brand-surface);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-bottom: 12px;
}

.programa {
  margin: 0 0 6px;
  color: var(--brand-purple);
  font-size: 13px;
  font-weight: 700;
}

.informacion h2 {
  margin: 0;
  color: var(--brand-purple-deep);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
}

.sin-resultados {
  padding: 32px 0;
  color: var(--brand-purple);
}

@media (max-width: 900px) {
  .rejilla {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px 24px;
  }
}

@media (max-width: 600px) {
  .pagina-cursos {
    width: min(100% - 32px, 440px);
    padding-top: 24px;
  }

  .encabezado h1 {
    font-size: 30px;
  }

  .rejilla {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .portada {
    aspect-ratio: 1.65 / 1;
  }
}
</style>
