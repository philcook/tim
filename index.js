#!/usr/bin/env node
let Afplay = require('afplay');
let program = require('commander');

let player = new Afplay;

program
  .option('b, big, thats big')
  .option('d, down, take it down south')
  .option('e, exac, exactly!')
  .option('x, explo, explosion noise')
  .option('f, finger, put your finger in the air and press it four  times')
  .option('g, goin, its going down with your boy westwood')
  .option('v, heavy, heavy hit after x3')
  .option('h, horn, airhorn')
  .option('u, hustle, get yr hustle on bb')
  .option('i, issues, oh you got issues')
  .option('l, lesgo, lets go!')
  .option('p, upintha, upinthabuilding lookin real big tonight')
  .option('y, yunnastan, understand that')
  .parse(process.argv);

if (program.big) player.play("./big.mp3");
if (program.down) player.play("./down.mp3");
if (program.exac) player.play("./exac.mp3");
if (program.explo) player.play("./explo.mp3");
if (program.finger) player.play("./fingerinthe.mp3");
if (program.goin) player.play("./goindown.mp3");
if (program.heavy) player.play("./heavyhit.mp3");
if (program.horn) player.play("./horn.mp3");
if (program.hustle) player.play("./hustleon.mp3");
if (program.issues) player.play("./issues.mp3");
if (program.lesgo) player.play("./lesgo.mp3");
if (program.upintha) player.play("./upintha.mp3");
if (program.yunnastan) player.play("./yunnstan.mp3");
