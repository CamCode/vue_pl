<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Nueva Tarea</label>
              <div class="control">
                <input class="is-large input"
                placeholder="Agregar nueva tarea..."
                type="text"
                v-model="newTask.title">
              </div>
            </div>
            <div class="field">
              <label class="label">Tiempo</label>
              <div class="control">
                <input class="is-large input"
                placeholder="0h..."
                type="number"
                v-model="newTask.time">
              </div>
            </div>
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary"
                 @click="addTask()">
                 Agregar Tarea
                 </a>
              </p>
              <p class="control">
                <a class="button is-danger"
                @click="cancel()">&times;</a>
              </p>
            </div>
          </div>
          <div class="column">
            <div class="notification is-info">
              {{totalTime}}
            </div>
            <div class="notification is-info"
            v-for="t in tasks"
            :key="t.id">
            <button class="delete"
            @click="deleteTask(t.id)"></button>
              {{t.title}} => {{t.time}}
            </div>
            <!-- <ul>
              <li>Tarea 1</li>
              <li>Tarea 2</li>
              <li>Tarea 3</li>
            </ul> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      tasks: [],
      newTask: {
        title: '',
        time: 0
      }
    }
  },
  computed: {
    totalTime () {
      let totalTime = 0
      this.tasks.forEach(e => {
        totalTime += parseInt(e.time)
      })
      return totalTime
    }
  },
  methods: {
    addTask () {
      if (this.newTask.title !== '' && this.newTask.time !== 0) {
        let info = {
          title: this.newTask.title,
          time: this.newTask.time
        }
        // agrega nueva tarea al arreglo de tasks
        this.tasks.push(info)
        // Almacenamos el array en localStorage
        // El método JSON.stringify() convierte un valor dado en javascript a una cadena  JSON
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        console.log(localStorage.setItem('tasks', JSON.stringify(this.tasks)))
        this.newTask.title = ''
        this.newTask.time = 0
      }
    },
    cancel () {
      this.newTask.title = ''
      this.newTask.time = 0
    },
    deleteTask (id) {
      console.log(id)
      this.tasks.splice(id, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
