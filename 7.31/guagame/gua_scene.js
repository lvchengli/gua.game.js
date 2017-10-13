class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElements(img) {
        this.elements.push(img)
        img.scene = this
    }
    draw() {
        for (var e of this.elements) {
            e.draw()
        }
    }
    update() {
        for (var e of this.elements) {
            e.update && e.update()
        }
    }
}
