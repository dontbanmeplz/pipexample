async function apply() {
  await pip.access()
  await pip.open()
  await pip.resize({
    height: 15
  })
  await pip.load((await process.cwd()) + "/pip.html")
  await pip.setFrameRate(1)
  return true
}