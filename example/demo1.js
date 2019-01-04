if (registerPaint) {
  class PlaceholderBoxPainter {
    paint(ctx, size) {
      ctx.lineWidth = 2
      ctx.strokeStyle = '#666'

      // 从左上角到右下角绘制一条线
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(size.width, size.height)
      ctx.stroke()

      // 从右上角到左下角绘制一条线 
      ctx.beginPath()
      ctx.moveTo(size.width, 0)
      ctx.lineTo(0, size.height)
      ctx.stroke()
    }
  }

  registerPaint('placeholder-box', PlaceholderBoxPainter)
}