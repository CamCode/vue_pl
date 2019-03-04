<template>
  <div id="app">
    <pm-header></pm-header>
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
          <div class="column">
            <div class="notification is-info"
            v-for="t in tracks"
            :key="t.id">
            <button class="delete"></button>
              {{t.artists[0].name}} - {{t.name}}
            </div>
          </div>
        </div>
      </div>
      <pm-footer></pm-footer>
    </section>
  </div>
</template>

<script>
import trackService from './services/track.js'
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'
export default {
  name: 'app',
  components: { PmFooter, PmHeader },
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) {
        trackService.search(this.searchQuery).then(res => {
          this.tracks = res.tracks.items
          console.log(res)
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
