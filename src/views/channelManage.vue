<template>
  <div>
    <div class="title">
      <router-link to="/index">
        <img class="back" src="../assets/images/back.png" alt="back" />
      </router-link>
      频道管理
    </div>
    <div class="delete">
      <p>点击删除以下频道</p>
      <br />
      <ul>
        <li
          v-for="(item, index) in store.state.check"
          :key="index"
          @click="store.commit('decrement', item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="plus">
      <p>点击添加以下的频道</p>
      <br />
      <ul>
        <li
          v-for="(item, index) in store.state.noCheck"
          :key="index"
          @click="store.commit('increment', item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<style>
.back {
  float: left;
  width: 1.2rem;
  height: 1.2rem;
}

p {
  float: left;
  font-size: 20px;
}
</style>
