<template>
  <v-app>
    <v-toolbar app flat color="grey">
      <v-container grid-list-xl>
        <router-link to='/' tag='span' style='cursor: pointer'>
          <img class="mr-3" src="@/assets/wmovie.png" height="90"/>
        </router-link>
        <v-spacer></v-spacer>
        <div class="float-right">
        </div>
      </v-container>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

</script>
