<template>
  <v-container v-if="loading">
    <div class="text-center">
      <v-progress-circular :size="70" class="mt-4" color="primary" indeterminate></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl class="pt-10">
    <v-row class="mb-6" no-gutters>
      <v-col v-for="(item, index) in wholeResponse" :key="index">
        <v-card
          class="mx-2 my-5"
          min-width="297"
          max-width="100%"
        >
          <v-img
            height="500"
            :src="item.Poster"
          ></v-img>

          <v-card-title>
            <div>
              <h4 class="text-truncate" style="max-width: 297px;">{{item.Title}}</h4>
              <v-btn x-small color="primary" class="mr-2" disabled>{{item.Year}}</v-btn>
              <v-btn x-small color="primary" disabled>{{item.Type}}</v-btn>
            </div>
          </v-card-title>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn block color="deep-purple lighten-2" text  @click="singleMovie(item.imdbID)">View More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  methods: {
    singleMovie (id) {
      this.$router.push('/movie/' + id)
    }
  },
  mounted () {
    axios
      .get('http://www.omdbapi.com/?s=indiana&apikey=c06638fe&page=1&type=movie&Content-Type=application/json')
      .then(response => {
        this.wholeResponse = response.data.Search
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
