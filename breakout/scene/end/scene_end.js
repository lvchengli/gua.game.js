class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function(){
            // 如果已经是 SceneTitle 就不用重复替换了
            log(game.scene instanceof SceneTitle, game)
            if (game.scene instanceof SceneTitle) {
              return
            }
            log('change scene to title')
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })

    }
    draw() {
        // draw labels
        this.game.context.fillText('游戏结束, 按 r 返回标题界面', 100, 290)
    }
}
