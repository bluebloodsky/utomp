<template>
  <div>
    <header>
      <h1>综合管廊运维管理平台</h1>
      <nav>
        <ul>
          <li v-for="menu in nav_menus">
            <a @click="navClick(menu)">
            <i class="iconfont" :class="menu.icon"></i>
            <br/>{{menu.name_cn}}
          </a>
          </li>
        </ul>
      </nav>
      <div class="right-info">
        <a> <img src="../assets/user.png"></a>
        <span> 
          <strong>{{t}}</strong> 
          <br/>
          {{d}}
        </span>
      </div>
    </header>
    <router-view :items="sub_menus"></router-view>
  </div>
</template>
<script>
import { NAV_MENUS } from '@/shared/constant'
export default {
  data() {
    return {
      nav_menus: [],
      sub_menus: [],
      dt: new Date(),
    }
  },
  created() {
    this.nav_menus = NAV_MENUS
    window.setInterval(() => {
      this.dt = new Date()
    }, 1000)

  },
  computed: {
    t() {
      return this.dt.format("hh:mm:ss")
    },
    d(){
      return this.dt.format("yyyy-MM-dd")
    }
  },
  methods: {
    navClick(menu) {
      this.sub_menus = menu.sub_menus
      this.$router.push(menu.url)
    }
  }
}

</script>
<style>
header {
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav li {
  display: inline-block;
  padding: 0 16px;
  text-align: center;
}

nav a {
  color: #78B0C1;
}

nav a:hover {}

nav a i.iconfont {
  color: #8B9DB7;
  font-size: 44px;
}

.right-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.right-info a {
  display: inline-block;
  height: 64px;
  width: 64px;
  border-radius: 32px;
  overflow: hidden;
  background-color: #fff;
  margin-right: 20px;
}

.right-info img {
  height: 64px;
}

.right-info span{  
  color: #8B9DB7;
  font-size: 16px;
}
.right-info strong{
  font-size: 22px;
  font-weight: normal;
}
</style>
