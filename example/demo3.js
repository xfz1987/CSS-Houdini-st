if (registerPaint) {
  class JaggedEdgePainter {
    static get inputProperties() {
      return ['--tooth-width', '--tooth-height']
    }

    paint(ctx, size, props) {
      let toothWidth = props.get('--tooth-width').value
      let toothHeight = props.get('--tooth-height').value 

      let spaceBeforeCenterTooth = (size.width - toothWidth) / 2
      let teethBeforeCenterTooth = Math.ceil(spaceBeforeCenterTooth / toothWidth)
      let totalTeeth = teethBeforeCenterTooth * 2 + 1
      let startX = spaceBeforeCenterTooth - teethBeforeCenterTooth * toothWidth
      
      ctx.beginPath()
      ctx.moveTo(startX, toothHeight)

      for (let i = 0; i < totalTeeth; i++) {
        let x = startX + toothWidth * i
        ctx.lineTo(x + toothWidth / 2, 0)
        ctx.lineTo(x + toothWidth, toothHeight)
      }

      ctx.lineTo(size.width, size.height)
      ctx.lineTo(0, size.height)
      ctx.closePath()
      ctx.fill()
    }
  }

  registerPaint('jagged-edge', JaggedEdgePainter)
}