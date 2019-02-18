<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Buscar canción</label>
              <div class="control">
                <input class="is-large input"
                placeholder="Buscar canción..."
                type="text"
                v-model="searchQuery">
              </div>
            </div>
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary"
                 @click="search()">
                 Buscar
                 </a>
              </p>
              <p class="control">
                <a class="button is-danger"
                @click="cancel()">&times;</a>
              </p>
            </div>
          </div>
          <!-- <div class="column">
            <div class="notification is-info"
            v-for="t in tracks"
            :key="t.id">
            <button class="delete"
            @click="deleteTask(t.id)"></button>
              {{t.title}} => {{t.time}}
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import trackService from './services/track.js'
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: {}
    }
  },
  methods: {
    search () {
      trackService.search(this.searchQuery).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
