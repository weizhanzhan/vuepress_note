<template>
  <div class="mac">

    <div class="screen">
       <div class="camera"></div>
      <div class="screen-box"></div>
    </div>
    <div class="bottom-line">
      MacBook Pro
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

  
<style scoped>
.mac{
  position: relative;
  cursor:url('../../public/mac/cursor-small.png'),auto;
}
.camera{
  width: 10px; 
  height: 10px;
  background: rgb(39, 32, 73);
  border-radius: 50%;
  position: absolute;
  top: 7.5px;
  left: 507px;
}
.screen{
  width: 1024px;
  height: 640px;
  background: #000000;
  margin: 0 auto;
  padding: 24px 18px 16px 18px;
  box-sizing: content-box;
  border-radius: 20px 20px 0 0;
  position: relative;
 
}
.screen-box{
  background:url('../../public/mac/mac.jpg');
  height: 100%;
  width: 100%;
}
.bottom-line{
  height: 25px;
  line-height: 25px;
  width:1060px;
  margin: 0 auto;
  background: rgb(27, 27, 27); 
  border-radius:  0 0 10px 10px;
  text-align: center;
  color: rgb(108, 108, 108);
}
</style>