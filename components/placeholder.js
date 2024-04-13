// placeholder.js
export function getPlaceholderDataURL(width, height) {
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")
  ctx.filter = "blur(10px)" // Tambahkan efek blur
  ctx.fillRect(0, 0, width, height) // Isi dengan warna solid
  return canvas.toDataURL("image/png")
}
