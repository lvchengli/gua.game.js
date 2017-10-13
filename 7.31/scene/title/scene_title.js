class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello from gua')
        this.addElements(label)

        // game.registerAction('k', function(){
        //     var s = Scene.new(game)
        //     game.replaceScene(s)
        // })

        var w = GuaAnimation.new(game)
        w.x = 100
        w.y = 100
        this.w = w
        this.addElements(w)

        this.setupInputs()
    }
    setupInputs() {
        var self = this
        this.game.registerAction('a', function(keyStatus) {
            self.w.move(-20, keyStatus)
        })
        this.game.registerAction('d', function(keyStatus) {
            self.w.move(20, keyStatus)
        })
    }

    // draw() {
    //     super.draw()
    //     // draw labels
    //     this.game.context.fillText('按 k 开始游戏', 100, 190)
    // }
}
