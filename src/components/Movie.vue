<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-row no-gutters class="pt-5">
          <v-col  cols="4">
            <v-card tile class="pa-2">
              <v-img :src="singleMovie.Poster" height="100%" max-height="950"></v-img>
            </v-card>
          </v-col>
          <v-col  cols="8">
            <v-container class="px-10 pt-10">
              <h1>{{ singleMovie.Title }} ({{ singleMovie.Year}}) <v-badge bordered color="success" class="text-uppercase" :content="singleMovie.Type"> </v-badge></h1>
              <small>{{ singleMovie.Rated }}</small>&nbsp;-
              <small>{{ singleMovie.Runtime }}</small>&nbsp;-
              <small>{{ singleMovie.Genre }}</small>&nbsp;-
              <small>{{ singleMovie.Released }} ({{ singleMovie.Country }})</small>
              <p class="text-justify mt-3">{{ singleMovie.Plot }}</p>
              <p class="mb-0"><b>Director :</b> {{ singleMovie.Director }}</p>
              <p class="mb-0"><b>Writer :</b> {{ singleMovie.Writer }}</p>
              <p class="mb-0"><b>Actors :</b> {{ singleMovie.Actors }}</p>
              <p class="mb-0"><b>Language :</b> {{ singleMovie.Language }}</p>
            </v-container>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import movieApi from '@/services/MovieApi'
export default {
  name: 'Movie',
  metaInfo: {
    title: 'Movie Details',
    meta: [
      { name: 'description', content: 'Movie Database' },
      { property: 'og:title', content: 'Movie Details' }
    ]
  },
  props: ['id'],
  data () {
    return {
      singleMovie: ''
    }
  },
  mounted () {
    movieApi.fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style>
</style>
