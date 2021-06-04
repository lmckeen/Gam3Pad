# Gam3pad
Easy and convenient way to use the Gamepad API

<br>

## How to use Gam3pad


```
npm install gam3pad
```
 
```js
import { Gam3Pad } from 'gam3pad'

const gamepad = new Gam3pad()

gamepad.on('r1', data => {
  console.log(data)
})
```

<br>

## API Docs

```js
//Listen for events and invoke the callback function 
//when one happens based on the type provided
on(type: string, cb: Function): void
```

<br> 

## Available types

### Global
```js
//when a controller has been connected
connected

//when a controller has been disconnected
disconnected

//when joysticks have been used
joysticks

//when any input has happened
input
```

### Standard Layout
```js
topArrow
bottomArrow
leftArrow
rightArrow
start
select
bottom
right
left
top
l1
r1
l2
r2
l3
r3
```
