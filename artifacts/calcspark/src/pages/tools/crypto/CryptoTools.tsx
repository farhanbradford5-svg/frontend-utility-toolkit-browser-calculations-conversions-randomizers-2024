import { useState } from "react";
import { ToolPage, Field, CalcButton, ResultBox } from "@/components/ToolPage";
import { ALL_TOOLS } from "@/data/tools";

// ─── True MD5 implementation (pure JS) ──────────────────────────────────────
function md5(input: string): string {
  function safeAdd(x: number, y: number): number {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }
  function bitRotateLeft(num: number, cnt: number): number {
    return (num << cnt) | (num >>> (32 - cnt));
  }
  function md5cmn(q: number, a: number, b: number, x: number, s: number, t: number): number {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  function md5ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t);
  }
  function md5gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
  }
  function md5hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  function computeMd5(m: number[], l: number): number[] {
    m[l >> 5] |= 0x80 << l % 32;
    m[(((l + 64) >>> 9) << 4) + 14] = l;
    let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (let i = 0; i < m.length; i += 16) {
      const olda = a, oldb = b, oldc = c, oldd = d;
      a = md5ff(a, b, c, d, m[i], 7, -680876936); d = md5ff(d, a, b, c, m[i + 1], 12, -389564586); c = md5ff(c, d, a, b, m[i + 2], 17, 606105819); b = md5ff(b, c, d, a, m[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, m[i + 4], 7, -176418897); d = md5ff(d, a, b, c, m[i + 5], 12, 1200080426); c = md5ff(c, d, a, b, m[i + 6], 17, -1473231341); b = md5ff(b, c, d, a, m[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, m[i + 8], 7, 1770035416); d = md5ff(d, a, b, c, m[i + 9], 12, -1958414417); c = md5ff(c, d, a, b, m[i + 10], 17, -42063); b = md5ff(b, c, d, a, m[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, m[i + 12], 7, 1804603682); d = md5ff(d, a, b, c, m[i + 13], 12, -40341101); c = md5ff(c, d, a, b, m[i + 14], 17, -1502002290); b = md5ff(b, c, d, a, m[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, m[i + 1], 5, -165796510); d = md5gg(d, a, b, c, m[i + 6], 9, -1069501632); c = md5gg(c, d, a, b, m[i + 11], 14, 643717713); b = md5gg(b, c, d, a, m[i], 20, -373897302);
      a = md5gg(a, b, c, d, m[i + 5], 5, -701558691); d = md5gg(d, a, b, c, m[i + 10], 9, 38016083); c = md5gg(c, d, a, b, m[i + 15], 14, -660478335); b = md5gg(b, c, d, a, m[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, m[i + 9], 5, 568446438); d = md5gg(d, a, b, c, m[i + 14], 9, -1019803690); c = md5gg(c, d, a, b, m[i + 3], 14, -187363961); b = md5gg(b, c, d, a, m[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, m[i + 13], 5, -1444681467); d = md5gg(d, a, b, c, m[i + 2], 9, -51403784); c = md5gg(c, d, a, b, m[i + 7], 14, 1735328473); b = md5gg(b, c, d, a, m[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, m[i + 5], 4, -378558); d = md5hh(d, a, b, c, m[i + 8], 11, -2022574463); c = md5hh(c, d, a, b, m[i + 11], 16, 1839030562); b = md5hh(b, c, d, a, m[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, m[i + 1], 4, -1530992060); d = md5hh(d, a, b, c, m[i + 4], 11, 1272893353); c = md5hh(c, d, a, b, m[i + 7], 16, -155497632); b = md5hh(b, c, d, a, m[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, m[i + 13], 4, 681279174); d = md5hh(d, a, b, c, m[i], 11, -358537222); c = md5hh(c, d, a, b, m[i + 3], 16, -722521979); b = md5hh(b, c, d, a, m[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, m[i + 9], 4, -640364487); d = md5hh(d, a, b, c, m[i + 12], 11, -421815835); c = md5hh(c, d, a, b, m[i + 15], 16, 530742520); b = md5hh(b, c, d, a, m[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, m[i], 6, -198630844); d = md5ii(d, a, b, c, m[i + 7], 10, 1126891415); c = md5ii(c, d, a, b, m[i + 14], 15, -1416354905); b = md5ii(b, c, d, a, m[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, m[i + 12], 6, 1700485571); d = md5ii(d, a, b, c, m[i + 3], 10, -1894986606); c = md5ii(c, d, a, b, m[i + 10], 15, -1051523); b = md5ii(b, c, d, a, m[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, m[i + 8], 6, 1873313359); d = md5ii(d, a, b, c, m[i + 15], 10, -30611744); c = md5ii(c, d, a, b, m[i + 6], 15, -1560198380); b = md5ii(b, c, d, a, m[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, m[i + 4], 6, -145523070); d = md5ii(d, a, b, c, m[i + 11], 10, -1120210379); c = md5ii(c, d, a, b, m[i + 2], 15, 718787259); b = md5ii(b, c, d, a, m[i + 9], 21, -343485551);
      a = safeAdd(a, olda); b = safeAdd(b, oldb); c = safeAdd(c, oldc); d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }

  function str2binl(str: string): number[] {
    const bin: number[] = [];
    const mask = (1 << 8) - 1;
    for (let i = 0; i < str.length * 8; i += 8) {
      bin[i >> 5] |= (str.charCodeAt(i / 8) & mask) << i % 32;
    }
    return bin;
  }

  function binl2hex(binarray: number[]): string {
    const hexTab = '0123456789abcdef';
    let str = '';
    for (let i = 0; i < binarray.length * 4; i++) {
      str += hexTab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xf) +
             hexTab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xf);
    }
    return str;
  }

  return binl2hex(computeMd5(str2binl(input), input.length * 8));
}

// ─── SHA hash using SubtleCrypto ─────────────────────────────────────────────
async function shaHash(text: string, algorithm: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ─── Shared hash tool UI ─────────────────────────────────────────────────────
function HashTool({
  slug,
  displayName,
  compute,
  about,
}: {
  slug: string;
  displayName: string;
  compute: (text: string) => Promise<string>;
  about: string;
}) {
  const tool = ALL_TOOLS.find(t => t.slug === slug)!;
  const [input, setInput] = useState("Hello, World!");
  const [hash, setHash] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const result = await compute(input);
      setHash(result);
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Input Text">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none font-mono"
            placeholder="Enter text to hash..."
          />
        </Field>
        <CalcButton onClick={calculate} className="w-full" disabled={loading}>
          {loading ? 'Computing...' : `Generate ${displayName} Hash`}
        </CalcButton>
        {hash && (
          <div className="space-y-2">
            <div className="p-4 bg-secondary rounded-xl">
              <p className="text-xs font-medium text-muted-foreground mb-2">{displayName} Hash ({hash.length * 4} bits)</p>
              <p className="font-mono text-sm text-foreground break-all">{hash}</p>
            </div>
            <button
              onClick={copy}
              className="w-full py-2 text-sm font-medium text-primary hover:text-primary/80 border border-primary/30 rounded-lg transition-colors"
            >
              {copied ? 'Copied!' : 'Copy hash to clipboard'}
            </button>
          </div>
        )}
      </div>
      <div className="mt-8 prose prose-sm max-w-none text-muted-foreground">
        <h3 className="text-foreground font-semibold">About {displayName}</h3>
        <p>{about}</p>
        <p>All hashing happens entirely in your browser — no data is sent to any server.</p>
      </div>
    </ToolPage>
  );
}

// ─── Exported tool components ────────────────────────────────────────────────

export function MD5Calculator() {
  return (
    <HashTool
      slug="md5"
      displayName="MD5"
      compute={async (text) => md5(text)}
      about="MD5 (Message-Digest Algorithm 5) produces a 128-bit hash value. While no longer considered secure for cryptographic use, it is widely used for checksums, file integrity verification, and non-security applications."
    />
  );
}

export function SHA256Calculator() {
  return (
    <HashTool
      slug="sha256"
      displayName="SHA-256"
      compute={(text) => shaHash(text, "SHA-256")}
      about="SHA-256 (Secure Hash Algorithm 256-bit) is part of the SHA-2 family. It produces a 256-bit hash and is widely used in digital signatures, TLS/SSL certificates, and blockchain technology."
    />
  );
}

export function SHA512Calculator() {
  return (
    <HashTool
      slug="sha512"
      displayName="SHA-512"
      compute={(text) => shaHash(text, "SHA-512")}
      about="SHA-512 produces a 512-bit hash and offers greater security than SHA-256. It is commonly used for password hashing, digital signatures, and data integrity verification."
    />
  );
}

export function SHA1Calculator() {
  return (
    <HashTool
      slug="sha1"
      displayName="SHA-1"
      compute={(text) => shaHash(text, "SHA-1")}
      about="SHA-1 produces a 160-bit hash. Note: SHA-1 is no longer considered secure for cryptographic purposes due to known collision vulnerabilities, but it is still used for legacy checksums and file verification."
    />
  );
}

export function CRC32Calculator() {
  const tool = ALL_TOOLS.find(t => t.slug === 'crc32')!;
  const [input, setInput] = useState("Hello, World!");
  const [result, setResult] = useState<string | null>(null);

  const makeCRC32Table = () => {
    const table: number[] = [];
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) { c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); }
      table[i] = c;
    }
    return table;
  };
  const crc32Table = makeCRC32Table();

  const calc = () => {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < input.length; i++) {
      crc = (crc >>> 8) ^ crc32Table[(crc ^ input.charCodeAt(i)) & 0xFF];
    }
    setResult(((crc ^ 0xFFFFFFFF) >>> 0).toString(16).toUpperCase().padStart(8, '0'));
  };

  return (
    <ToolPage tool={tool}>
      <div className="space-y-4">
        <Field label="Input Text">
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={4}
            className="w-full px-3 py-2 bg-background border border-input rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
        </Field>
        <CalcButton onClick={calc} className="w-full">Generate CRC32</CalcButton>
        {result && <ResultBox label="CRC32 Hash" value={result} highlight />}
      </div>
    </ToolPage>
  );
}
