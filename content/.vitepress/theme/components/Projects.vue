<script setup lang="ts">
import { myGithub, projects } from '../constants';
</script>
<template>
  <div>
    <div class="res-container">
      <b>WIP</b>
      <div class="row">
        <div class="col-6" v-for="project in projects" :key="project.title">
          <p>
            <span> {{ project.title }} </span>
            <template v-for="link in project.links" :key="link.url">
              <a
                v-if="link.label !== 'github'"
                :href="link.url"
                target="_blank"
                class="nav-link"
                ><small> {{ link.label }} </small>
              </a>
              <a
                v-else
                :href="myGithub + link.url"
                target="_blank"
                class="nav-link"
                ><small> {{ link.label }} </small>
              </a>
            </template>
          </p>

          <small>
            {{ project.desc }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.res-head {
  p {
    margin: 4px 0;
    a {
      padding: 0 3px;
    }
  }
}

.res-container {
  padding: 10px 0;
}
.res-data {
  padding-left: 10px;
}
.row {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.col-6 {
  p {
    margin-bottom: 3px;
    span {
      border-bottom: 1px black dashed;
    }
    a {
      padding: 0 8px;
    }
  }
}
</style>
