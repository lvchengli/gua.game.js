class SceneMain extends GuaScene {
  constructor(game) {
      super(game)

      this.paddle = Paddle(game)
      this.ball = Ball(game)

      this.score = 0

      this.blocks = loadLevel(game, 1)
      this.init()
  }
  init() {
    var self = this
    var ball = this.ball
    var game = this.game
    game.registerAction('a', function(){
        self.paddle.moveLeft()
    })
    game.registerAction('d', function(){
        self.paddle.moveRight()
    })
    game.registerAction('f', function(){
        self.ball.fire()
    })

    var enableDrag = false
    game.canvas.addEventListener('mousedown', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        log(x, y, event)
        // 检查是否点中了 ball
        if (ball.hasPoint(x, y)) {
            // 设置拖拽状态
            enableDrag = true
        }
    })
    game.canvas.addEventListener('mousemove', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        // log(x, y, 'move')
        if (enableDrag) {
            log(x, y, 'drag')
            ball.x = x
            ball.y = y
        }
    })
    game.canvas.addEventListener('mouseup', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        log(x, y, 'up')
        enableDrag = false
    })
  }
  draw() {
      var game = this.game
      var ball = this.ball
      var paddle = this.paddle
      var blocks = this.blocks
      var score = this.score
      // draw 背景
      game.context.fillStyle = "#554"
      game.context.fillRect(0, 0, 400, 300)
      // draw
      game.drawImage(paddle)
      game.drawImage(ball)
      // draw blocks
      for (var i = 0; i < blocks.length; i++) {
          var block = blocks[i]
          if (block.alive) {
              game.drawImage(block)
          }
      }
      // draw labels
      game.context.fillText('分数: ' + score, 10, 290)
  }

  update() {
      var ball = this.ball
      var paddle = this.paddle
      var blocks = this.blocks
      var game = this.game
      var score = this.score

      if (window.paused) {
          return
      }

      ball.move()
      // 判断游戏结束
      if (ball.y > paddle.y) {
          // 跳转到 游戏结束 的场景
          var end = SceneEnd.new(game)
          game.replaceScene(end)
      }
      // 判断相撞
      if (paddle.collide(ball)) {
          // 这里应该调用一个 ball.反弹() 来实现
          ball.反弹()
      }
      // 判断 ball 和 blocks 相撞
      for (var i = 0; i < blocks.length; i++) {
          var block = blocks[i]
          if (block.collide(ball)) {
              // log('block 相撞')
              block.kill()
              ball.反弹()
              // 更新分数
              score += 100
          }
      }
  }

}
var Scene = function(game) {
    var s = {
        game: game,
    }
    // 初始化
    var paddle = Paddle(game)
    var ball = Ball(game)

    var score = 0

    var blocks = loadLevel(game, 1)

    game.registerAction('a', function(){
        paddle.moveLeft()
    })
    game.registerAction('d', function(){
        paddle.moveRight()
    })
    game.registerAction('f', function(){
        ball.fire()
    })

    s.draw = function() {
        // draw 背景
        game.context.fillStyle = "#554"
        game.context.fillRect(0, 0, 400, 300)
        // draw
        game.drawImage(paddle)
        game.drawImage(ball)
        // draw blocks
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
        // draw labels
        game.context.fillText('分数: ' + score, 10, 290)
    }
    s.update = function() {
        if (window.paused) {
            return
        }

        ball.move()
        // 判断游戏结束
        if (ball.y > paddle.y) {
            // 跳转到 游戏结束 的场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)
        }
        // 判断相撞
        if (paddle.collide(ball)) {
            // 这里应该调用一个 ball.反弹() 来实现
            ball.反弹()
        }
        // 判断 ball 和 blocks 相撞
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                // log('block 相撞')
                block.kill()
                ball.反弹()
                // 更新分数
                score += 100
            }
        }
    }

    // mouse event
    var enableDrag = false
    game.canvas.addEventListener('mousedown', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        log(x, y, event)
        // 检查是否点中了 ball
        if (ball.hasPoint(x, y)) {
            // 设置拖拽状态
            enableDrag = true
        }
    })
    game.canvas.addEventListener('mousemove', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        // log(x, y, 'move')
        if (enableDrag) {
            log(x, y, 'drag')
            ball.x = x
            ball.y = y
        }
    })
    game.canvas.addEventListener('mouseup', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        log(x, y, 'up')
        enableDrag = false
    })

    return s
}
