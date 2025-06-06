# WebSocket Agent Configuration

```typescript
import fs from 'fs';
import tls from 'tls';
import crypto from 'crypto';
import { DerivativesTradingCoinFutures } from '@binance/derivatives-trading-coin-futures';

// Expected pinned public key (SPKI SHA-256 hash)
// You can extract it from the certificate using openssl:
// openssl s_client -connect your-api.com:443 </dev/null 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | base64
const PINNED_PUBLIC_KEY = 'YOUR-PINNED-PUBLIC-KEY';

// Load the trusted CA certificate (optional but recommended)
const trustedCert = fs.readFileSync('/path/to/certificate.pem');

const agent = new tls.Agent({
    ca: trustedCert, // Ensures only the specific CA is trusted
    checkServerIdentity: (host, cert) => {
        // Verify Subject Alternative Name (SAN)
        if (!cert.subjectaltname.includes('DNS:your-websocket-server.com')) {
            throw new Error(
                `Certificate SAN mismatch: expected "your-websocket-server.com", got ${cert.subjectaltname}`
            );
        }
        const publicKey = cert.pubkey;
        const publicKeyHash = crypto.createHash('sha256').update(publicKey).digest('base64');
        if (publicKeyHash !== PINNED_PUBLIC_KEY) {
            throw new Error(
                `Certificate pinning validation failed: expected ${PINNED_PUBLIC_KEY}, but got ${publicKeyHash}`
            );
        }
    },
});

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
    agent,
};
const client = new DerivativesTradingCoinFutures({ configurationWebsocketAPI });

client.websocketAPI
    .connect()
    .then((connection) =>
        connection.positionInformation()
    )
    .then((res) =>
        console.log(res.data)
    )
    .catch((err) => console.error(err));
```
