const render = (body, ctx) => {
	ctx.strokeStyle = 'white';
  ctx.beginPath();
  if (body.shape.radius) {
    ctx.arc(body.position.x, body.position.y, body.shape.radius, 0, Math.PI * 2, false);
  } else if (body.shape.vertices) {
    for (let i = 0; i < body.shape.vertices.length; ++i) {
      const v = new Vec2(body.shape.vertices[i]);
      body.shape.u.muli(v);
      v.addi(body.position);
      if (i === 0) {
        ctx.moveTo(v.x, v.y);
      } else {
        ctx.lineTo(v.x, v.y);
      }
    }
  }
  ctx.closePath();
  ctx.stroke();
};
