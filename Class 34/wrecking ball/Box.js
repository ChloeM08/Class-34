class Box{
  constructor(x, y, width, height){
    var options = {
      restitution: 1.2,
      friction: 1,
      density: 0.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    World.add(world, this.body)
  }
  display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate (pos.x, pos.y)
    rotate(angle)
    rectMode(CENTER)
    fill("brown")
    rect(0, 0, this.width, this.height)
    pop()
  }
}