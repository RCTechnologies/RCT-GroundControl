# RCT-GroundControl [![Stories in Ready](https://badge.waffle.io/RCTechnologies/RCT-GroundControl.png?label=ready&title=Ready)](https://waffle.io/RCTechnologies/RCT-GroundControl)
Linux:  [![Build Status](https://travis-ci.org/RCTechnologies/RCT-GroundControl.svg?branch=master)](https://travis-ci.org/RCTechnologies/RCT-GroundControl) [![Coverage Status](https://coveralls.io/repos/github/RCTechnologies/RCT-GroundControl/badge.svg?branch=master)](https://coveralls.io/github/RCTechnologies/RCT-GroundControl?branch=master)

Mac: [![Build Status](https://travis-ci.org/RCTechnologies/RCT-GroundControl.svg?branch=master)](https://travis-ci.org/RCTechnologies/RCT-GroundControl) [![Coverage Status](https://coveralls.io/repos/github/RCTechnologies/RCT-GroundControl/badge.svg?branch=master)](https://coveralls.io/github/RCTechnologies/RCT-GroundControl?branch=master)  

Windows: [![Build status](https://ci.appveyor.com/api/projects/status/dtp4k5ioriw3ix5x?svg=true)](https://ci.appveyor.com/project/Robertelving/rct-groundcontrol)

Companion Software for Multipurpose Drone Platform

# How we work
## Issues
  We use issues as our main driving force. Our Issues represents Tasks to be completed both Development wise and non.

## Travis

## Branching

## Git Phlow
  https://github.com/Praqma/git-phlow

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

## DroneKit

## TODO's
```
Use Dronekit-Sitl in test
Using a System in the loop emulated drone, we should be able to integrate functional testing in our chain

Fill out README

Expand Contribution section
```


## Want to Contribute?
<ol>
<li>Fork the Repo</li>
<li>Make your changes</li>
<li>Submit PullRequest</li>
</ol>

If your PullRequest fixes an issue, please include "fixes #issuenumber in your last commit message"

### or
Create Issue
