// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.headers['host']);
  // const orıgın = new URL(req.url).origin
  res.status(200).json({ name: req.headers['host'] })
}
