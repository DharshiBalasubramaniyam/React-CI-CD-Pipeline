import fetch from 'node-fetch';

export default async function handler(req, res) {
  const response = await fetch(`http://http://load-balancer-for-ci-ci-practice-1398898249.us-east-1.elb.amazonaws.com/home`, {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
      ...req.headers,
    },
    body: req.method !== 'GET' ? JSON.stringify(req.body) : null,
  });

  const data = await response.text();
  res.status(response.status).text(data);
}
