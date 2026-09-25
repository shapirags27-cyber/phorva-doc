const pages = {
  introduction: `
    <h1>What is Phorva?</h1>
    <p>Phorva is the verification layer between autonomous agents and execution.</p>
    <p>Agents decide. Execution systems execute. <strong>Phorva verifies</strong>.</p>
    <p>It confirms that the action an agent attempts is actually the action it was authorized to perform — across transfers, swaps, bridges, DeFi strategies and more.</p>
  `,

  "core-concepts": `
    <h1>Core Concepts</h1>
    <div class="card"><h3>Intent</h3><p>What the agent declared it wants to do.</p></div>
    <div class="card"><h3>Authorization</h3><p>The limits and policies the agent is allowed to operate within.</p></div>
    <div class="card"><h3>Execution Graph</h3><p>The full sequence of on-chain actions that make up a strategy.</p></div>
    <div class="card"><h3>Proof</h3><p>Cryptographic evidence that the execution matched the intent.</p></div>
  `,

  quickstart: `
    <h1>Quickstart</h1>
    <p>Get your first verification running in minutes.</p>
    <pre><code>npm install @phorva/sdk

import { Phorva } from '@phorva/sdk';

const phorva = new Phorva({
  apiKey: 'YOUR_API_KEY',
  network: 'baseSepolia'
});

const result = await phorva.authorize({
  intent: { type: 'swap', amount: '300', token: 'USDC' },
  policy: { maxTransactionAmount: 500 }
});

console.log(result);</code></pre>
  `,

  transfers: `
    <h1>Transfers & Approvals</h1>
    <p>Verify simple token transfers and ERC-20 approvals against declared intent and policy limits.</p>
  `,

  swaps: `
    <h1>Swaps</h1>
    <p>Verify token swaps including slippage protection and route validation.</p>
  `,

  bridges: `
    <h1>Bridges (Cross-chain)</h1>
    <p>Phorva supports verification of cross-chain bridge actions:</p>
    <ul>
      <li>Source chain → Destination chain validation</li>
      <li>Amount and token matching</li>
      <li>Bridge protocol allow-listing</li>
      <li>Final destination state verification</li>
    </ul>
    <pre><code>{
  "type": "bridge",
  "fromChain": "base",
  "toChain": "arbitrum",
  "token": "USDC",
  "amount": "1000"
}</code></pre>
  `,

  defi: `
    <h1>DeFi Actions</h1>
    <ul>
      <li>Deposit / Withdraw</li>
      <li>Stake / Unstake</li>
      <li>Add / Remove Liquidity</li>
      <li>Supply / Borrow / Repay</li>
      <li>Claim rewards</li>
    </ul>
  `,

  custom: `
    <h1>Custom / Arbitrary Calls</h1>
    <p>Any contract interaction can be verified using the Execution Graph model.</p>
  `,

  sdk: `
    <h1>JavaScript / TypeScript SDK</h1>
    <pre><code>npm install @phorva/sdk</code></pre>
  `,

  connect: `
    <h1>How to Connect</h1>
    <pre><code>import { Phorva } from '@phorva/sdk';

const client = new Phorva({
  apiKey: process.env.PHORVA_API_KEY,
  network: 'baseSepolia'
});</code></pre>
  `,

  verify: `
    <h1>Verify an Action</h1>
    <pre><code>const result = await client.authorize({
  intent: {
    type: 'bridge',
    amount: '1000',
    token: 'USDC',
    fromChain: 'base',
    toChain: 'ethereum'
  },
  policy: { maxTransactionAmount: 1500 }
});</code></pre>
  `,

  intent: `
    <h1>Intent Matching</h1>
    <p>Phorva compares the declared intent against the actual calldata and state changes.</p>
  `,

  policy: `
    <h1>Policy & Risk</h1>
    <p>Define spending limits, allowed protocols, allowed chains, and risk thresholds.</p>
  `,

  "execution-graph": `
    <h1>Execution Graph</h1>
    <p>Multi-step strategies are modeled as a graph. Phorva verifies the entire path, not just individual transactions.</p>
  `,

  proof: `
    <h1>Proof-Carrying Actions</h1>
    <p>Every verified action can carry a cryptographic proof containing intent, authorization, execution details, and final state commitment.</p>
  `,

  trace: `
    <h1>Verification Trace</h1>
    <p>Full record of how each condition was evaluated.</p>
  `,

  commitment: `
    <h1>Commitment</h1>
    <p>Deterministic commitment to the verified execution graph and proof statement.</p>
  `,

  roadmap: `
    <h1>Product Roadmap</h1>
    <div class="card">
      <h3>NOW — Investor / Partner MVP</h3>
      <ul>
        <li>Verification dashboard</li>
        <li>Execution Graph & Trace</li>
        <li>Proof-Carrying Action</li>
        <li>Multi-chain testnet demo</li>
        <li>Provider abstraction</li>
        <li>Developer API surface</li>
      </ul>
    </div>
    <div class="card">
      <h3>NEXT — Production Infrastructure</h3>
      <ul>
        <li>Production API & SDK</li>
        <li>Wallet integrations</li>
        <li>Persistent verification records</li>
        <li>External prover integrations</li>
        <li>Expanded execution adapters</li>
        <li>Monitoring and developer tooling</li>
      </ul>
    </div>
    <div class="card">
      <h3>THEN — Execution Ecosystem</h3>
      <ul>
        <li>DeFi integrations</li>
        <li>Prediction-market integrations</li>
        <li>Agent-payment integrations</li>
        <li>DAO / treasury integrations</li>
        <li>Virtual Card execution rail</li>
        <li>Mainnet deployment</li>
        <li>Security audit</li>
      </ul>
    </div>
  `
};