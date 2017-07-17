#!/usr/bin/env node
let Afplay = require('afplay');
let program = require('commander');
let path = require('path');

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

if (program.big) player.play(path.join(__dirname, "./big.mp3"));
if (program.down) player.play(path.join(__dirname, "./down.mp3"));
if (program.exac) player.play(path.join(__dirname, "./exac.mp3"));
if (program.explo) player.play(path.join(__dirname, "./explo.mp3"));
if (program.finger) player.play(path.join(__dirname, "./fingerinthe.mp3"));
if (program.goin) player.play(path.join(__dirname, "./goindown.mp3"));
if (program.heavy) player.play(path.join(__dirname, "./heavyhit.mp3"));
if (program.horn) player.play(path.join(__dirname, "./horn.mp3"));
if (program.hustle) player.play(path.join(__dirname, "./hustleon.mp3"));
if (program.issues) player.play(path.join(__dirname, "./issues.mp3"));
if (program.lesgo) player.play(path.join(__dirname, "./lesgo.mp3"));
if (program.upintha) player.play(path.join(__dirname, "./upintha.mp3"));
if (program.yunnastan) player.play(path.join(__dirname, "./yunnastan.mp3"));
