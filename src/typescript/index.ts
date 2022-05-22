declare function fxrand (): number
declare function fxpreview (): void
declare let fxhash : string

console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// this code writes the values to the DOM as an example
import * as p5 from 'p5'

const initialRand = fxrand() * 9999999999

const canvas = new p5(startSketch,
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  document.getElementById('sketch') || undefined
)

function startSketch (s: p5): void {
  s.randomSeed(initialRand)
  s.noiseSeed(initialRand)

  s.setup = () => {
    s.createCanvas(window.innerHeight, window.innerHeight)
    s.background('#fff')
  }

  s.draw = () => {
    s.background('#fff')
    s.ellipse(s.mouseX, s.mouseY, 10, 10)
  }
}