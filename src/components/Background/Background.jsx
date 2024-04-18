import React from "react";
import Phaser from "phaser";
import { useEffect } from "react";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import cloud3 from "../../assets/cloud3.png";

const Background = () => {
  useEffect(() => {
    let config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "phaser-game",
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    let cloud;
    let cloudSecond;

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image("cloud1", cloud1);
      this.load.image("cloud2", cloud2);
      this.load.image("cloud3", cloud3);
    }

    function resizeGame() {
      let gameWidth = window.innerWidth;
      let gameHeight = window.innerHeight;

      game.scale.resize(gameWidth, gameHeight);
    }

    window.addEventListener("resize", function () {
      resizeGame();
    });

    function create() {
      cloud = this.add.image(
        window.innerWidth / 2,
        window.innerHeight / 2,
        "cloud1"
      );
      cloud.setDisplaySize(window.innerWidth * 3, window.innerWidth * 3);
      cloudSecond = this.add.image(
        window.innerWidth / 2,
        window.innerHeight / 2,
        "cloud2"
      );
      cloudSecond.setDisplaySize(window.innerWidth * 3, window.innerWidth * 3);

      // Добавляем анимацию движения вправо и влево
      // this.tweens.add({
      //   targets: cloud,
      //   x: window.innerWidth,
      //   duration: 1000,
      //   yoyo: true,
      //   repeat: -1,
      // });

      // this.tweens.add({
      //   targets: cloudSecond,
      //   x: window.innerWidth,
      //   duration: 1000,
      //   yoyo: true,
      //   repeat: -1,
      // });
    }

    function update() {
      // Добавляем вращение облака
      cloud.angle += 0.1;
      cloudSecond.angle -= 0.1;
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-game" />;
};

export default Background;
