class Ball{
  constructor(x, y, width, height, angle){
    var options = {
      density: 1,
      frictionAir: 0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    World.add(world, this.body)
  }
  display(){
    var angle = this.body.angle
    var pos = this.body.position
    push()
    translate (pos.x, pos.y)
    rotate(angle)
    fill ("black")
    ellipse(0,0, this.width, this.height)
    pop()
  }
}