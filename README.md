# RCT-GroundControl [![Build Status](https://travis-ci.org/RCTechnologies/RCT-GroundControl.svg?branch=master)](https://travis-ci.org/RCTechnologies/RCT-GroundControl) [![Coverage Status](https://coveralls.io/repos/github/RCTechnologies/RCT-GroundControl/badge.svg?branch=master)](https://coveralls.io/github/RCTechnologies/RCT-GroundControl?branch=master)[![Stories in Ready](https://badge.waffle.io/RCTechnologies/RCT-GroundControl.png?label=ready&title=Ready)](https://waffle.io/RCTechnologies/RCT-GroundControl)

Companion Software for Multipurpose Drone Platform

### Setup of Git Phlow


### Basic Git Phlow
```
git phlow workon 42
```
Do your changes...
```
git add .

git commit -m "message"
```
Commit more if necessary.
When you are completely done with the issue, then...
Note: you need to have modifications in order to make "git phlow wrapup" functional
```
git phlow wrapup
git phlow deliver
```
And if you need to work on a new issue do following:
```
git checkout master
git phlow cleanup
```
And repeat...

## TODO's
```
Squash Commits

### Use Dronekit-Sitl in test
Using a System in the loop emulated drone, we should be able to integrate functional testing in our chain


