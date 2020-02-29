<template>
  <v-container v-if="loading">
    <div class="text-center">
      <v-progress-circular :size="70" class="mt-4" color="primary" indeterminate></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl class="pt-10">
    <v-row class="mb-6" xl="2" no-gutters>
      <v-col cols="12" sm="6" md="4" xl="3" v-for="(item, index) in wholeResponse" :key="index">
        <v-card class="ma-1">
          <v-img height="500" :src="item.Poster"></v-img>
          <v-card-title>
            <div>
              <h5 class="">{{item.Title}}</h5>
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
import movieApi from '@/services/MovieApi'

export default {
  name: 'LatestMovie',
  metaInfo: {
    title: 'Default Title'
  },
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
    movieApi.fetchMovieCollection('indiana')
      .then(response => {
        this.wholeResponse = response.Search
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
