<template>
  <div class="container-fluid div-filter">
    <center>
      <h2 class="fw-bold row">
        <div class="col-12 col-md-6 text-center text-md-end">
          Lihat Klinik di
        </div>
        <div class="col-12 col-md-6 text-center text-md-start mt-3 mt-md-0">
          <select class="select-btn">
            <option>Aceh</option>
            <option>Bali</option>
            <option>Banten</option>
            <option>Jakarta</option>
            <option>Jawa Barat</option>
          </select>
        </div>
      </h2>
    </center>
  </div>
  <div class="container">
    <div class="d-flex flex-row-reverse bd-highlight border-bottom border-1">
      <div class="p-2 bd-highlight">
        <button class="btn btn-primary btn-filter my-4 pull-right">
          <font-awesome-icon icon="filter" /> Semua Filter
        </button>
      </div>
    </div>
    <div></div>
  </div>
  <div class="container mt-4">
    <div class="row">
      <div class="col-6">
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <h6 class="fw-bold">Perlu Diketahui</h6>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="d-flex flex-row-reverse bd-highlight">
          <div class="p-2 bd-highlight">
            <a href="https://klinikpintar.id/blog"
              ><h6 class="fw-bold">Lihat Semua</h6></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="d-flex bd-highlight scrollable">
      <div class="p-2 bd-highlight">
        <img src="../assets/banner1.png" width="250" />
      </div>
      <div class="p-2 bd-highlight">
        <img src="../assets/banner2.png" width="250" />
      </div>
      <div class="p-2 bd-highlight">
        <img src="../assets/banner3.png" width="250" />
      </div>
      <div class="p-2 bd-highlight">
        <img src="../assets/banner4.png" width="250" />
      </div>
      <div class="p-2 bd-highlight">
        <img src="../assets/banner5.png" width="250" />
      </div>
    </div>
  </div>

  <div class="container mt-4">
    <div class="row">
      <div class="col-6">
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <h6 class="fw-bold">Ada 1 Klinik Sesuai Filter</h6>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-4">
    <div
      v-for="item in clinics"
      :key="item.id"
      class="row border border-1 rounded-1 p-2 my-3"
    >
      <div class="col-md-4">
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <img
              :src="item.pictures[0]"
              class="full"
              style="max-height: 250px"
            />
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <h5 class="fw-bold text-start">{{ item.name }}</h5>

            <div class="row">
              <div class="d-flex">
                <div
                  v-for="service in item.services"
                  :key="service.id"
                  class="border border-1 rounded-3 p-2 px-3 m-1 list-item"
                >
                  <font-awesome-icon icon="check" class="faicon" />
                  {{ service.name }}
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <div class="d-flex">
                <div>
                  <font-awesome-icon icon="map-marker-alt" />
                </div>
                <div class="ms-3 address text-start">
                  {{ item.location.address }}
                  <a
                    v-bind:href="`https://g.page/` + item.name + `?share`"
                    class="color-blue fw-bold"
                    >Lihat Peta</a
                  >
                </div>
              </div>
              <div class="d-flex mt-3">
                <div>
                  <font-awesome-icon icon="phone" />
                </div>
                <div class="ms-3 address text-start">
                  {{ item.telephone }}

                  <a
                    v-bind:href="`https://wa.me/` + item.telephone"
                    class="color-green fw-bold"
                    >Hubungi</a
                  >
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 col-md-6">
                  <div class="d-flex bd-highlight">
                    <div>
                      <font-awesome-icon icon="clock" class="color-blue" />
                    </div>
                    <div class="ms-3 text-start full">
                      <a
                        @click="collapse(item.id)"
                        class="color-blue fw-bold cursor"
                      >
                        Lihat Semua Hari
                      </a>

                      <div :id="item.id" style="display: none">
                        <div
                          class="row my-1"
                          v-for="hour in item.openHours"
                          :key="hour.id"
                        >
                          <div class="col-5 col-md-4">
                            {{ parseDay(hour.day) }}
                          </div>
                          <div class="col-1 col-md-1"></div>
                          <div class="col-6 col-md-7">
                            {{ hour.time.open }} - {{ hour.time.closed }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="d-flex flex-row-reverse bd-highlight">
                    <a
                      :href="'https://api.staging.klinikpintar.id/hc/open/health-center?page=1&limit=5'"
                      class="btn btn-primary btn-janji pull-right color-white"
                    >
                      Buat Janji
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-4">
    <div class="row">
      <div class="col-6">
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <h6 class="fw-bold">
              Tampilkan

              <select class="p-1 ms-2">
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
            </h6>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="d-flex flex-row-reverse bd-highlight">
          <div class="p-2 bd-highlight">
            <h6 class="fw-bold">
              1 - 5 dari {{ total }}
              <font-awesome-icon icon="chevron-left" class="color-green ms-2" />
              <a href="#"
                ><font-awesome-icon
                  icon="chevron-right"
                  class="color-green ms-2"
              /></a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../plugins/axios";

export default {
  name: "HomeData",
  data() {
    return {
      clinics: {},
      total: 0,
    };
  },
  async mounted() {
    // data can be mutated as well
    const { data } = await axios.get(`clinics`);
    this.total = data.total;
    this.clinics = data.data;
    console.log(this.total);
    console.log(this.clinics);
  },
  methods: {
    parseDay(day) {
      var parsedDay = "";
      switch (day) {
        case 1:
          parsedDay = "Senin";
          break;
        case 2:
          parsedDay = "Selasa";
          break;
        case 3:
          parsedDay = "Rabu";
          break;
        case 4:
          parsedDay = "Kamis";
          break;
        case 5:
          parsedDay = "Jumat";
          break;
        case 6:
          parsedDay = "Sabtu";
          break;
        default:
          parsedDay = "Senin";
          break;
      }
      return parsedDay;
    },
    collapse(id) {
      var x = document.getElementById(id);
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");
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
.div-filter {
  padding: 70px;
  background-color: #f5f8f9;
  font-family: "Lato", sans-serif;
}
.div-filter h2 {
  color: #046e89;
}
.select-btn {
  border: 4px solid #dff1f7;
  border-radius: 30px;
  background-color: #dff1f7;
  color: #1ab1e5;
  padding-left: 20px;
  font-weight: 700;
  padding-right: 20px;
}
.select-btn:hover,
.select-btn:active,
.select-btn:focus-visible {
  border: 4px solid #1ab1e5;
}
.btn-filter {
  font-family: "Lato", sans-serif;
  font-weight: 700;
}
.btn-janji {
  font-family: "Lato", sans-serif;
  font-weight: 700;
}
.scrollable {
  max-width: 100% !important;
  overflow-x: auto;
}
.full {
  width: 100% !important;
}
.list-item {
  border-radius: 20px !important;
}
.list-item .faicon {
  color: green !important;
}
.address {
  max-width: 500px;
}
.color-blue {
  color: #1ab1e5 !important;
}
.color-green {
  color: rgb(23, 185, 60) !important;
}
.color-white {
  color: #fff !important;
}
.cursor {
  cursor: pointer;
}
.hidden {
  display: none;
}
</style>
