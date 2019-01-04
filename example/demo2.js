if (registerPaint) {
  class PlaceholderBoxPropsPainter {
    static get inputProperties() {
      return ['border-top-width', 'border-top-color']
    }

    paint(ctx, size, props) {
      // default values
      ctx.lineWidth = 2
      ctx.strokeStyle = '#666'

      // set line width to top border width
      let borderTopWidthProp = props.get('border-top-width')
      if (borderTopWidthProp) ctx.lineWidth = borderTopWidthProp.value

      // set stroke style to top border color
      let borderTopColorProp = props.get('border-top-color')
      if (borderTopColorProp) ctx.strokeStyle = borderTopColorProp.toString()

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

  registerPaint('placeholder-box-props', PlaceholderBoxPropsPainter)
}