if (registerPaint) {
  class DotFadePainter {
    static get inputProperties() {
      return ['--dot-spacing', '--dot-fade-offset', '--dot-color']
    }

    paint(ctx, size, props) {
      let spacing = props.get('--dot-spacing').value
      let fadeOffset = props.get('--dot-fade-offset').value
      let color = props.get('--dot-color').toString()

      ctx.fillStyle = color

      for (let y = 0; y < size.height + spacing; y += spacing) {
        for (let x = 0; x < size.width + spacing; x += spacing * 2) {
          let staggerX = x + ((y / spacing) % 2 === 1 ? spacing : 0)
          let fadeRelativeX = staggerX - size.width * fadeOffset / 100
          let radius = spacing * Math.max(Math.min(1 - fadeRelativeX / size.width, 1), 0)

          ctx.beginPath()
          ctx.arc(staggerX, y, radius, 0, 2 * Math.PI)
          ctx.fill()
        }
      }
    }
  }

  registerPaint('dot-fade', DotFadePainter)
}