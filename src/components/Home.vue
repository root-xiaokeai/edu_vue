<template>
<div>
  <Header> </Header>
  <Banner> </Banner>
  <Footer> </Footer>
</div>
</template>

<script>
  import Banner from "./common/Banner";
  import Footer from "./common/Footer";
  import Header from "./common/Header";
    export default {
        name: "home",
        components:{
          Banner:Banner,
          Footer:Footer,
          Header:Header,
      }
    }
</script>

<style scoped>

</style>
