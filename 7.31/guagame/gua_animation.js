class GuaAnimation {
    constructor(game) {
        this.game = game
        // 为了省事，在这里 hard core 一套动画
        this.animations = {
            idle: [],
            run: [],
        }
        // this.frames = []
        for (var i = 0; i < 10; i++) {
            var name = `run${i}`
            var t = game.textureByName(name)
            this.animations['run'].push(t)
        }
        for (var i = 0; i < 10; i++) {
            var name = `idle${i}`
            var t = game.textureByName(name)
            this.animations['idle'].push(t)
        }
        this.animationName = 'idle'
        this.texture = this.animations[this.animationName][0]
        this.frameIndex = 0
        this.frameCount = 3
        this.w = this.texture.width
        this.h = this.texture.height

        this.flipX = false

    }
    frames() {
        return this.animations[this.animationName]
    }
    static new(game) {
        return new this(game)
    }
    update() {
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.animations[this.animationName][this.frameIndex]
        }
    }

    draw() {
        // log(this,this.texture)


        var context = this.game.context
        if (this.flipX) {
            context.save()

            var x = this.x + this.w / 2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            log('draw, x, -x', x, -x)
            context.drawImage(this.texture, this.x ,this.y)
            context.restore()

        } else {
            context.drawImage(this.texture, this.x ,this.y)
        }


        // this.game.drawImage(this)
    }
    changeAnimation(name) {
        this.animationName = name
    }

    move(x, keyStatus) {
        this.flipX = x < 0

        log(keyStatus)
        this.x += x
        var animationNames = {
            down: 'run',
            up: 'idle',
        }
        this.changeAnimation(animationNames[keyStatus])
    }
}
