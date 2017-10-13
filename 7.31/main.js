var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            // blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        // ball: 'img/ball.png',
        // block: 'img/block.png',
        // paddle: 'img/paddle.png',

        bullet: 'img/bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        sky: 'img/sky.jpg',
        fire: 'img/fire.png',

        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',

        // 走路动画
        // w1: 'img/walking/天天跑酷人物跑步素材-图片素材-1_爱给网_aigei_com.png',
        // w2: 'img/walking/天天跑酷人物跑步素材-图片素材-2_爱给网_aigei_com.png',
        // w3: 'img/walking/天天跑酷人物跑步素材-图片素材-3_爱给网_aigei_com.png',
        // w4: 'img/walking/天天跑酷人物跑步素材-图片素材-4_爱给网_aigei_com.png',
        // w5: 'img/walking/天天跑酷人物跑步素材-图片素材-5_爱给网_aigei_com.png',
        // w6: 'img/walking/天天跑酷人物跑步素材-图片素材-6_爱给网_aigei_com.png',
        // w7: 'img/walking/天天跑酷人物跑步素材-图片素材-7_爱给网_aigei_com.png',
        // w8: 'img/walking/天天跑酷人物跑步素材-图片素材-8_爱给网_aigei_com.png',
        // w9: 'img/walking/天天跑酷人物跑步素材-图片素材-9_爱给网_aigei_com.png',
        // 多状态动画
        // 站立
        idle0: 'img/Stand/0.png',
        idle1: 'img/Stand/1.png',
        idle2: 'img/Stand/2.png',
        idle3: 'img/Stand/3.png',
        idle4: 'img/Stand/4.png',
        idle5: 'img/Stand/5.png',
        idle6: 'img/Stand/6.png',
        idle7: 'img/Stand/7.png',
        idle8: 'img/Stand/8.png',
        idle9: 'img/Stand/9.png',
        // 跑动
        run0: 'img/Run/0.png',
        run1: 'img/Run/1.png',
        run2: 'img/Run/2.png',
        run3: 'img/Run/3.png',
        run4: 'img/Run/4.png',
        run5: 'img/Run/5.png',
        run6: 'img/Run/6.png',
        run7: 'img/Run/7.png',
        run8: 'img/Run/8.png',
        run9: 'img/Run/9.png',
    }
    var game = GuaGame.instance(30, images, function(g){
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
