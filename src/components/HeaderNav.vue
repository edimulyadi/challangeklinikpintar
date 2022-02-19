<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#"> <img src="../assets/logo.png" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navbar-right ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="https://klinikpintar.id/untuk-perusahaan"
              >Untuk Perusahaan</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://klinikpintar.id/untuk-klinik"
              >Untuk Klinik</a
            >
          </li>
          <li class="nav-item">
            <a
              class="btn btn-outline-primary border-primary border-1 py-2 ps-3 pe-3 text-primary btn-outline fw-bold"
              href="#"
              >Direktori Klinik</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.navbar-light.bg-light {
  background-color: #fff !important;
}
.btn-outline:hover {
  color: #fff !important;
}
</style>
