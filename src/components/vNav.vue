<template>
  <div>
    <div>
      <div class="title">KGC新闻</div>
      <div class="Channel">
        <ul>
          <li
            class="newLi"
            v-for="(item, index) in store.state.check"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <router-link to="/channelManage">
          <img class="add" src="../assets/images/add.png" alt="add" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();

console.log(store);

axios
  .get("/json/nav.json")
  .then((res) => res.data.result)
  .then((data) => store.commit("muChannels", data));
</script>

<style>
.title {
  width: 100%;
  height: 1.2rem;
  background-color: #d43d3d;
  color: #fff;
  line-height: 100%;
}

.Channel {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0.96rem;
  background-color: #f4f5f6;
  color: #505050;
}

ul,
li {
  list-style: none;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  height: 0.96rem;
}

li {
  margin-left: 0.5rem;
  margin-top: 0;
  display: inline;
  font-size: 0.5rem;
  text-align: center;
  line-height: 0.96rem;
  border: 1px solid;
}

.add {
  width: 0.9rem;
  height: 0.9rem;
  border: 0.05rem solid grey;
}

.newLi{
  border: none;
}
</style>
