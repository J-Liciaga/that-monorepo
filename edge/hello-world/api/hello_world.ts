import { hello } from '../wasm/pkg/wasm.js'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  hello();
  return new Response();
}
