class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function(){
            // 如果已经是 Main Scene 就不用重复替换了
            if (game.scene instanceof SceneMain) {
              return
            }
            // var s = Scene(game)
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        // draw labels
        this.game.context.fillText('按 k 开始游戏', 100, 190)
    }
}
