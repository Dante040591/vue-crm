<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click='$emit("click")'>
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">
          {{ date|date('datetime') }}
        </span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a class="dropdown-trigger black-text" href="#" data-target="dropdown" ref="dropdown">
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a @click="logout" href="#" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  methods: {
    logout() {
      this.$router.push('/login?message=logout') //передаем сообщение при выходе в гет-параметр, для того, чтобы затем его прочитать и вывести на странице логина при выходе из системы
    }
  },
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown)

    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  beforeDestroy() { //при переходе на другой layout удаляем таймер и dropdown для очистки памяти
    clearInterval(this.interval)

    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>