<template>
  <div id="device">
    <span class="camera"></span>
    <span class="dock">
      <span class="time" id="T"></span>
      <span class="date" id="date"></span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
#device {
  background: #000 url(https://gregfreeman.me/projects/random/osx2.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 50%);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 50%);
}

#device,
#device:before,
#device:after,
#device span,
#device span:after,
#device span:before {
  transition: all 1s ease-in-out;
}

.camera {
  width: 8px;
  height: 8px;
  background: linear-gradient(332deg, #2b1c42, #2e4070);
  position: absolute;
  content: '';
  top: -14px;
  right: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
}

@media screen and (min-width: 969px) {
  #device {
    width: 400px;
    height: 250px;
    margin: 0 auto;
    border: 20px solid #000;
    border-radius: 15px 15px 0 0;
    position: relative;
  }

  #device:before {
    width: 20%;
    height: 10px;
    background: #999;
    position: absolute;
    content: '';
    right: 0;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    border-radius: 0 0 5px 5px;
  }

  #device:after {
    width: 140%;
    height: 20px;
    background: #ccc;
    position: absolute;
    content: '';
    right: 0;
    bottom: -40px;
    left: -20%;
    border-radius: 0 0 15px 15px;
    -webkit-box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 50%);
    -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 50%);
  }
}

@media screen and (min-width: 469px) and (max-width: 968px) {
  #device {
    width: 250px;
    height: 300px;
    margin: 0 auto;
    border: 20px solid #000;
    border-bottom: 40px solid #000;
    border-radius: 15px;
    position: relative;
  }

  #device:before {
    width: 20px;
    height: 20px;
    position: absolute;
    content: '';
    right: 0;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    border: 1px solid #888;
    border-radius: 10px;
  }
}

@media screen and (max-width: 468px) {
  #device {
    width: 150px;
    height: 280px;
    margin: 0 auto;
    border: 5px solid #000;
    border-radius: 15px;
    position: relative;
  }

  #device:before {
    width: 40%;
    height: 3px;
    background: #fff;
    position: absolute;
    content: '';
    right: 0;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    border: 0;
    border-radius: 15px;
  }

  .camera {
    width: 50%;
    height: 10px;
    background: #000;
    top: 0;
    border-radius: 0 0 5px 5px;
  }

  .camera:before {
    width: 15px;
    height: 1px;
    background: #454545;
    position: absolute;
    content: '';
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
  }

  .camera:after {
    width: 6px;
    height: 6px;
    background: linear-gradient(332deg, #2b1c42, #2e4070);
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-left: 15px;
    border-radius: 6px;
  }
}

.dock {
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  display: block;
  text-align: center;
}

.time {
  font-size: 32px;
  display: block;
  margin-top: 20px;
}

.date {
  font-size: 12px;
  display: block;
}
</style>
