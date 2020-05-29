
  
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense
      v-for="(menus, i) in menu"
            :key="i"

      >
        <v-list-item
        :to="menus.url"
        >
          <v-list-item-content>
            <v-list-item-title>
             {{menus.title}}
             </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>AnimeList</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
              <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    neme:'app',
    components:{

    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      menu:[
      {title:'Главная страница', url:'/'},
      {title:'Вход', url:'/login'},
      {title:'Выход', url:'/loguot'},
      {title:'Регистрация', url:'/registr'},
      {title:'Мой профиль', url:'/myProfil'},
      {title:'Мой список', url:'/myAnimeList'},
      {title:'Список аниме', url:'/animeList'},
    ]
    }),
  }
</script>
