<template>
  <div>
    <vNav />
    <div>
      <ul>
        <li class="newsLi" v-for="(item, index) in news" :key="index">
          <div class="container">
            <a class="newsUrl" :href="item.url">
              <img class="newsPic" :src="item.pic" alt="新闻照片" />
            </a>
            <div class="content">
              <h3>{{ item.title }}</h3>
              <div class="foot">
                <div class="time">{{ item.time }}</div>
                <div class="author">{{ item.src }}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import vNav from "../components/vNav.vue";
import axios from "axios";
import { ref } from "vue";

const news = ref([]);

axios
  .get("../../public/json/news.json")
  .then((res) => {
    return res.data.result.list;
  })
  .then((data) => {
    for (let item of data) {
      news.value.push(item);
    }
  });
</script>

<style>
.newsLi {
  border: none;
  width: 100%;
  height: 3rem;
}

.container {
  width: 100%;
  height: 100%;
  border-top: 1px solid grey;
}

.newsUrl {
  margin-left: 0.5rem;
  margin-top: 0.25rem;
  float: left;
  width: 2.5rem;
  height: 2.5rem;
}

.newsPic {
  width: 100%;
  height: 100%;
  background-size: contain;
}

.content {
  padding-left: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

h3{
  width: 12rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.foot {
  display: flex;
}

.author {
  position: absolute;
  right: 0;
}
</style>
