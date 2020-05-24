var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7f5e60f6-8a49-46c2-aefc-6886dd3770b3","a34af8c5-1042-4c49-a0db-a26546357324","438795f4-0152-4e20-8856-8c9b28eedd37","ec67296a-5dab-41e7-9d63-4ed616c68fa7","710ed882-acc9-42cd-9bc6-514c7152bf84","8232b0f7-73fd-42d2-b6e4-544bc0ce5188","566a649d-a03f-4d27-abc9-addfaa4e044b","a0ec4005-8435-4efc-9f4e-cca0cb5f468b"],"propsByKey":{"7f5e60f6-8a49-46c2-aefc-6886dd3770b3":{"name":"blue_robot_1_1","sourceUrl":null,"frameSize":{"x":30,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"cqOPuAzh_WmXTbH6Omp1GnzPfEnprtyW","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":51},"rootRelativePath":"assets/7f5e60f6-8a49-46c2-aefc-6886dd3770b3.png"},"a34af8c5-1042-4c49-a0db-a26546357324":{"name":"ground_cake_1","sourceUrl":null,"frameSize":{"x":2400,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"MH10fGrudabX1nJBZIOL5WJ0FpobAzd_","loadedFromSource":true,"saved":true,"sourceSize":{"x":2400,"y":104},"rootRelativePath":"assets/a34af8c5-1042-4c49-a0db-a26546357324.png"},"438795f4-0152-4e20-8856-8c9b28eedd37":{"name":"cloud_1","sourceUrl":null,"frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":12,"version":"iPWPv5YGbhP6fINKVufrHOZ7NrRjqeRd","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/438795f4-0152-4e20-8856-8c9b28eedd37.png"},"ec67296a-5dab-41e7-9d63-4ed616c68fa7":{"name":"obstacle1","sourceUrl":null,"frameSize":{"x":50,"y":103},"frameCount":1,"looping":true,"frameDelay":12,"version":"mKrbfkhvWGN23E9x2GlO_gTk9dZVznL0","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":103},"rootRelativePath":"assets/ec67296a-5dab-41e7-9d63-4ed616c68fa7.png"},"710ed882-acc9-42cd-9bc6-514c7152bf84":{"name":"obstacle2","sourceUrl":null,"frameSize":{"x":50,"y":69},"frameCount":1,"looping":true,"frameDelay":12,"version":"JvquQkEEg2afJ02bC6JqMWb_Hf9oNfo9","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":69},"rootRelativePath":"assets/710ed882-acc9-42cd-9bc6-514c7152bf84.png"},"8232b0f7-73fd-42d2-b6e4-544bc0ce5188":{"name":"obstacle3","sourceUrl":null,"frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"kIdLERwSyKh2nUcWTcQUriFGxCgWUKl7","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/8232b0f7-73fd-42d2-b6e4-544bc0ce5188.png"},"566a649d-a03f-4d27-abc9-addfaa4e044b":{"name":"obstacle4","sourceUrl":null,"frameSize":{"x":80,"y":177},"frameCount":1,"looping":true,"frameDelay":12,"version":"mIuDujd.3r10M4euYGFsyrwUZ0t.A3DA","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":177},"rootRelativePath":"assets/566a649d-a03f-4d27-abc9-addfaa4e044b.png"},"a0ec4005-8435-4efc-9f4e-cca0cb5f468b":{"name":"alienBeige_badge_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":2,"looping":true,"frameDelay":12,"version":"a2fjZbiXwcYBaXlwlX.hIR_w5Fr3VZPF","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":60},"rootRelativePath":"assets/a0ec4005-8435-4efc-9f4e-cca0cb5f468b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ground = createSprite(190,380,1000,20);
ground.setAnimation("ground_cake_1");
//ground.scale=0.5;
ground.x=ground.width/2;
var player=createSprite(20,330);
player.setAnimation("blue_robot_1_1");
var invi=createSprite(200,340,400,1);
invi.visible=false;
var count=0;
var pointGroup=createGroup();
var obstacleGroup=createGroup();
var cloudGroup=createGroup();
var PLAY=1;
var END=0;   
var gameState=PLAY;
//player.debug=true;
player.setCollider("circle",0,0,10);
function draw() {
background("pink");
player.collide(invi);
fill("red");
textSize(20);
text("score: "+count,310,25);
text("Hit the coin with the robot to get a point",20,50);
if (gameState===PLAY) {
ground.velocityX=-5;
if (ground.x<0) {
ground.x = ground.width/2;  
}
if (keyDown("SPACE") && player.y>=200) {
player.velocityY=-10;  
}
player.velocityY=player.velocityY+0.8;
if (pointGroup.collide(player)) {
 pointGroup.destroyEach();
 count=count+1;
 //pointGroup.setVisibleEach(false);
 
}
if (obstacleGroup.isTouching(player)) {
  gameState=END;
}
spawnclouds();
spawnobstacle();
points();
} else if (gameState===END) {
ground.velocityX = 0;  
player.velocityY=0;
obstacleGroup.setVelocityXEach(0);
cloudGroup.setVelocityXEach(0);
obstacleGroup.setLifetimeEach(-1);
cloudGroup.setLifetimeEach(-1);
text("GameOver!,Press R to Restart", 100, 180);
if (keyDown("R")) {
cloudGroup.destroyEach();
obstacleGroup.destroyEach();
count=0;
gameState=PLAY;  
}
}
drawSprites();
    
}
function spawnclouds() {
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,random(200,250),40,10);
    cloud.setAnimation("cloud_1");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 134;
    cloud.depth = player.depth;
    player.depth = player.depth + 1;
    cloudGroup.add(cloud);  
  }
}                        
function spawnobstacle() {
  if(World.frameCount % 40 === 0) {
    var obstacle = createSprite(400,320,10,40);
    obstacle.velocityX = -6;
    obstacle.setAnimation("obstacle" + randomNumber(1,4));
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    obstacleGroup.add(obstacle);
  }  
}
function points() {
  if (World.frameCount % 40 === 0) {
    var point=createSprite(400,random(220,250));
    point.setAnimation("alienBeige_badge_1");
    point.velocityX=-10;
    point.lifetime=134;
    pointGroup.add(point);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
