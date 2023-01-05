<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap");
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
body {
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  background: #f9f9f9;
}
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  font-size: 16px;
}
</style>
