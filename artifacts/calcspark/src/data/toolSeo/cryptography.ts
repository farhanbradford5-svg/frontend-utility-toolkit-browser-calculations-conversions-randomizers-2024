import type { ToolSEOMap } from './index';

export const CRYPTOGRAPHY_SEO: ToolSEOMap = {
  'md5': {
    quickAnswer: 'MD5 generates a 128-bit (32 hex character) hash of any input. MD5 is NOT cryptographically secure for passwords — use SHA-256 or bcrypt. It is still useful for file integrity checksums.',
    whatIs: 'The MD5 Generator computes the MD5 hash (message digest) of any text input, producing a fixed 32-character hexadecimal string. MD5 was designed by Ronald Rivest in 1991. While broken for security purposes (collision attacks exist), MD5 remains widely used for file checksums and non-security applications.',
    howToUse: ['Enter any text in the input field.', 'The MD5 hash is computed instantly in your browser.', 'Copy the 32-character hex output. No data is sent to any server.'],
    formula: 'MD5 processes input in 512-bit blocks through four rounds of 16 operations each. Output: 128 bits = 32 hexadecimal characters. Same input always produces same output (deterministic). MD5("hello") = 5d41402abc4b2a76b9719d911017c592.',
    examples: [
      { title: 'File Integrity', scenario: 'Download a software installer. Website shows MD5: abc123...', result: 'Run MD5 on downloaded file. If it matches, file is intact and unmodified.' },
      { title: 'Data Deduplication', scenario: 'Database of files, need to find duplicates.', result: 'MD5 hash each file. Files with identical MD5 hashes are likely duplicates.' },
    ],
    useCases: ['File download integrity verification.', 'Detecting duplicate files in storage systems.', 'Database data deduplication.', 'Legacy system compatibility (not for security).'],
    faqs: [
      { q: 'Is MD5 safe for passwords?', a: 'No. MD5 is completely broken for password hashing. Attackers use rainbow tables and GPU acceleration to crack MD5 passwords in seconds. Use bcrypt, Argon2, or PBKDF2 for passwords.' },
      { q: 'What is a hash collision?', a: 'Two different inputs that produce the same hash output. MD5 has known collision vulnerabilities — attackers can craft two different files with the same MD5. This is why MD5 is not suitable for digital signatures or security.' },
      { q: 'Why does the same text always produce the same MD5?', a: 'Hash functions are deterministic — same input always gives same output. This property makes them useful for integrity checking. Any change to the input (even one character) produces a completely different hash (avalanche effect).' },
      { q: 'Can I reverse an MD5 hash?', a: 'MD5 is a one-way function — mathematically infeasible to reverse. However, for common inputs, precomputed rainbow tables (billions of input-hash pairs) can be looked up. For unique inputs, MD5 cannot be reversed.' },
      { q: 'What replaced MD5?', a: 'SHA-256 and SHA-3 for security applications. SHA-1 was also deprecated. For non-security checksums, MD5 and CRC32 remain common. For passwords: bcrypt, scrypt, Argon2id.' },
    ],
    aiQA: [
      { q: 'What is MD5?', a: 'A hash function producing a 128-bit (32 hex character) fingerprint of input data.' },
      { q: 'What is the MD5 of "hello"?', a: '5d41402abc4b2a76b9719d911017c592.' },
      { q: 'Is MD5 secure for passwords?', a: 'No. MD5 is cryptographically broken. Use bcrypt or Argon2 for passwords.' },
      { q: 'How long is an MD5 hash?', a: '32 hexadecimal characters (128 bits).' },
      { q: 'What is MD5 used for today?', a: 'File integrity checksums, data deduplication, non-security fingerprinting. Not for passwords or digital signatures.' },
    ],
  },

  'sha256': {
    quickAnswer: 'SHA-256 produces a 256-bit (64 hex character) hash. It is the most widely used cryptographic hash — used in Bitcoin, TLS certificates, and digital signatures. Considered secure and collision-resistant.',
    whatIs: 'The SHA-256 Generator computes the SHA-256 hash (part of the SHA-2 family) of any text input, producing a 64-character hexadecimal string. SHA-256 is designed by the NSA and standardized by NIST. It is the gold standard for cryptographic hashing, used in SSL/TLS, Bitcoin mining, code signing, and digital signatures.',
    howToUse: ['Enter text or data to hash.', 'The SHA-256 hash is computed instantly in your browser using the Web Crypto API.', 'Copy the 64-character hex output. Nothing is sent to any server.'],
    formula: 'SHA-256 uses 64 rounds of compression with 8 initial hash values and 64 round constants derived from prime numbers. Output: 256 bits = 64 hex characters. SHA-256("hello") = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824.',
    examples: [
      { title: 'Digital Signature', scenario: 'Signing a software release.', result: 'Compute SHA-256 of the release binary. Sign the hash with private key. Verify: compute hash of download, check against signed hash.' },
      { title: 'Password Storage', scenario: 'Storing a password hash (using SHA-256 alone is insufficient — use with salt and proper KDF).', result: 'SHA-256(password + salt) = unique hash stored in database. Never store passwords in plaintext.' },
    ],
    useCases: ['SSL/TLS certificate integrity.', 'Bitcoin and blockchain transaction hashing.', 'Code signing and software integrity verification.', 'Secure password storage (with proper KDF).'],
    faqs: [
      { q: 'Is SHA-256 secure?', a: 'Yes. SHA-256 has no known practical attacks. A brute-force attack against SHA-256 would require 2^256 operations — more than the number of atoms in the observable universe. Expected to remain secure beyond 2030.' },
      { q: 'What is SHA-256 used for in Bitcoin?', a: 'Bitcoin uses SHA-256 twice (double SHA-256) to hash transactions into the blockchain. Mining is the process of finding a nonce such that SHA-256(SHA-256(block_header)) starts with a specified number of zeros.' },
      { q: 'What is the difference between SHA-256 and SHA-512?', a: 'SHA-512 produces a 512-bit (128 hex char) output vs. SHA-256\'s 256-bit (64 hex char). SHA-512 is marginally more secure but produces larger hashes. SHA-256 is the standard choice. Both are part of the SHA-2 family.' },
      { q: 'Should I use SHA-256 for passwords?', a: 'Not directly. SHA-256 is very fast, making brute-force attacks feasible. Use a password hashing function like bcrypt, Argon2id, or PBKDF2 (which uses SHA-256 internally with many iterations and a salt) for passwords.' },
      { q: 'What is the SHA-3 family?', a: 'SHA-3 (Keccak) is NIST\'s newest hash standard, completely different internally from SHA-2. SHA3-256 produces the same output size as SHA-256 but uses a "sponge" construction. Not more secure than SHA-256 in practice, but provides algorithmic diversity.' },
    ],
    aiQA: [
      { q: 'What is SHA-256?', a: 'A cryptographic hash function producing a 256-bit (64 hex character) fingerprint.' },
      { q: 'Is SHA-256 secure?', a: 'Yes. No practical attacks exist. It is the industry standard for cryptographic hashing.' },
      { q: 'How long is a SHA-256 hash?', a: '64 hexadecimal characters (256 bits).' },
      { q: 'What uses SHA-256?', a: 'Bitcoin, TLS/SSL certificates, digital signatures, code signing, and many security protocols.' },
      { q: 'Can SHA-256 be reversed?', a: 'No. It is a one-way function. Even the NSA cannot reverse a SHA-256 hash of a strong input.' },
    ],
  },

  'sha512': {
    quickAnswer: 'SHA-512 produces a 512-bit (128 hex character) hash. It is the most secure member of the SHA-2 family and offers extra security margin over SHA-256 for long-term applications.',
    whatIs: 'The SHA-512 Generator computes the SHA-512 hash of any text input, producing a 128-character hexadecimal string. SHA-512 provides a larger security margin than SHA-256 and is actually faster on 64-bit systems. Used in applications requiring maximum security: long-lived certificates, military-grade encryption, and critical infrastructure.',
    howToUse: ['Enter text in the input field.', 'The SHA-512 hash is computed instantly in your browser.', 'Copy the 128-character hex output. No data is sent to any server.'],
    formula: 'SHA-512 uses 80 rounds (vs. 64 in SHA-256) with 64-bit word operations. Output: 512 bits = 128 hex characters. SHA-512("hello") = 9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043.',
    examples: [
      { title: 'Certificate Authority', scenario: 'Root CA certificate signing uses SHA-512.', result: 'SHA-512 signature provides 256-bit equivalent security — matching ECC-256 key strength for long-lived trust anchors.' },
      { title: 'Long-term Archive', scenario: 'Archiving documents expected to be verified in 50+ years.', result: 'SHA-512 provides extra security margin against future advances in computing power.' },
    ],
    useCases: ['Long-lived digital certificates.', 'Critical infrastructure security.', 'Archives requiring verification decades later.', 'High-security key derivation functions.'],
    faqs: [
      { q: 'Is SHA-512 significantly more secure than SHA-256?', a: 'Both are considered secure. SHA-512 has 256-bit security against collision attacks (vs. 128-bit for SHA-256). For most applications, SHA-256 is sufficient. SHA-512 provides extra margin for long-term or ultra-high-security use.' },
      { q: 'Is SHA-512 faster than SHA-256?', a: 'On 64-bit systems, SHA-512 is actually faster than SHA-256 because it uses 64-bit operations natively. SHA-256 uses 32-bit operations. On 32-bit systems or hardware accelerators, SHA-256 may be faster.' },
      { q: 'What is SHA-512/256?', a: 'A truncated version of SHA-512: it uses the SHA-512 algorithm but outputs only 256 bits. Offers SHA-512\'s security properties (length-extension attack resistance) with SHA-256\'s smaller output size. Recommended by some standards.' },
      { q: 'What is a length-extension attack?', a: 'A vulnerability in SHA-256 and SHA-512 where an attacker can compute SHA(secret + extension) without knowing the secret. Avoided by using HMAC (Hash-based Message Authentication Code) or SHA-3. SHA-512/256 also resists this.' },
      { q: 'How long is a SHA-512 hash?', a: '128 hexadecimal characters = 512 bits = 64 bytes.' },
    ],
    aiQA: [
      { q: 'What is SHA-512?', a: 'A cryptographic hash function producing a 512-bit (128 hex character) output. Most secure SHA-2 variant.' },
      { q: 'How long is a SHA-512 hash?', a: '128 hexadecimal characters (512 bits).' },
      { q: 'Is SHA-512 better than SHA-256?', a: 'More secure margin, but SHA-256 is sufficient for most applications. SHA-512 is preferred for very long-lived systems.' },
      { q: 'Is SHA-512 faster than SHA-256?', a: 'Yes, on 64-bit systems — SHA-512 uses 64-bit operations natively.' },
      { q: 'What is SHA-512 used for?', a: 'Long-lived certificates, critical security infrastructure, and high-security key derivation.' },
    ],
  },

  'sha1': {
    quickAnswer: 'SHA-1 produces a 160-bit (40 hex character) hash. SHA-1 is DEPRECATED for security use — do not use it for new systems. Replaced by SHA-256. Still seen in legacy systems and git.',
    whatIs: 'The SHA-1 Generator computes the SHA-1 hash of any text, producing a 40-character hexadecimal string. SHA-1 was the dominant hash function from the mid-1990s to 2017 but is now considered broken for cryptographic purposes (collision attacks demonstrated). It remains in use in legacy systems, git version control, and some checksums.',
    howToUse: ['Enter text to hash.', 'The SHA-1 hash is computed instantly in your browser.', 'Copy the 40-character hex output.'],
    formula: 'SHA-1 uses 80 rounds with 32-bit word operations. Output: 160 bits = 40 hex characters. SHA-1("hello") = aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d.',
    examples: [
      { title: 'Git Commit ID', scenario: 'Every git commit, tree, and blob is identified by its SHA-1 hash.', result: 'git commit: "a1b2c3d4..." — the 40-char SHA-1 of the commit object (message, author, timestamp, parent, tree).' },
      { title: 'Legacy Certificate', scenario: 'Old SSL certificate signed with SHA-1.', result: 'Modern browsers show security warnings for SHA-1 certificates. Must be replaced with SHA-256.' },
    ],
    useCases: ['Git and version control system object identification.', 'Legacy system compatibility.', 'Non-security checksums for data integrity.', 'Understanding old system hashes.'],
    faqs: [
      { q: 'Why is SHA-1 deprecated?', a: 'In 2017, Google (SHAttered attack) demonstrated the first practical SHA-1 collision — producing two different PDFs with the same SHA-1 hash. This proved SHA-1 is not collision-resistant. All browsers and certificate authorities stopped accepting SHA-1 certificates in 2017.' },
      { q: 'Is SHA-1 still used anywhere?', a: 'Yes: Git uses SHA-1 for object identification (transitioning to SHA-256). Some legacy protocols still use SHA-1. Non-security checksums. Internal systems not yet migrated. Git is safe because attackers cannot exploit SHA-1 collisions to create malicious commits without access.' },
      { q: 'When was SHA-1 deprecated?', a: 'NIST deprecated SHA-1 for digital signatures in 2011. Chrome, Firefox, and Microsoft removed SHA-1 certificate support in January 2017. Most systems should have migrated to SHA-256 by now.' },
      { q: 'What should I use instead of SHA-1?', a: 'SHA-256 for general purpose. SHA-384 or SHA-512 for higher security requirements. bcrypt/Argon2 for passwords. SHA-3 for applications requiring algorithmic diversity.' },
      { q: 'Is SHA-1 the same as SHA-0?', a: 'No. SHA-0 was the original 1993 standard quickly withdrawn. SHA-1 (1995) fixed a flaw in SHA-0. SHA-2 (2001) is the current generation. SHA-3 (2015) is the newest standard.' },
    ],
    aiQA: [
      { q: 'What is SHA-1?', a: 'A cryptographic hash function producing a 160-bit (40 hex character) output. Deprecated for security use.' },
      { q: 'Is SHA-1 secure?', a: 'No. SHA-1 has known collision attacks. Do not use for new systems.' },
      { q: 'How long is a SHA-1 hash?', a: '40 hexadecimal characters (160 bits).' },
      { q: 'What uses SHA-1 today?', a: 'Git version control (transitioning away), legacy systems, some non-security checksums.' },
      { q: 'What replaced SHA-1?', a: 'SHA-256 (recommended for most applications).' },
    ],
  },

  'crc32': {
    quickAnswer: 'CRC32 is a 32-bit (8 hex character) cyclic redundancy check. It is designed for error detection in data transmission, not cryptographic security. CRC32("hello") = 907060870.',
    whatIs: 'The CRC32 Generator computes the CRC32 cyclic redundancy check value for any text or binary data. CRC32 is designed to detect accidental errors in data storage and transmission (bit flips, truncation), not to provide cryptographic security. Used in ZIP files, PNG images, Ethernet frames, and storage systems.',
    howToUse: ['Enter text or data.', 'The CRC32 value is computed instantly and shown as both decimal and hexadecimal.', 'Compare to the original CRC32 to verify data integrity.'],
    formula: 'CRC32 uses a polynomial division algorithm with the polynomial 0x04C11DB7 (IEEE 802.3 standard). Output: 32 bits = 8 hex characters = 4 bytes. Not a cryptographic hash — optimized for hardware speed in error detection, not security.',
    examples: [
      { title: 'ZIP File Integrity', scenario: 'ZIP format stores CRC32 of each compressed file.', result: 'When extracting, ZIP recomputes CRC32 and compares. Mismatch = corrupted archive.' },
      { title: 'Network Packet', scenario: 'Ethernet frame CRC32 check.', result: 'Sender appends CRC32 of frame data. Receiver recomputes CRC32. Mismatch = transmission error, frame discarded.' },
    ],
    useCases: ['ZIP and archive file integrity verification.', 'Network packet error detection.', 'Storage system (SSD/HDD) data integrity.', 'PNG and other file format checksums.'],
    faqs: [
      { q: 'Is CRC32 a hash function?', a: 'CRC32 is a checksum, not a cryptographic hash. It is designed for error detection (accidental bit flips) not security. CRC32 has many collisions (different inputs with same CRC32) and is trivially reversible by motivated attackers.' },
      { q: 'What is the difference between CRC32 and MD5?', a: 'CRC32: 32 bits, very fast, designed for hardware error detection, not secure. MD5: 128 bits, slower, designed for data fingerprinting, not collision-resistant. Neither is suitable for security applications — use SHA-256.' },
      { q: 'Why do file formats use CRC32?', a: 'CRC32 is extremely fast in hardware (a single CPU instruction on modern processors), provides good detection of random bit errors, and produces a short (4-byte) checksum. For format integrity (not security), this is sufficient.' },
      { q: 'What errors does CRC32 detect?', a: 'Single bit errors: 100% detection. Two-bit errors: 100% detection. Burst errors up to 32 bits: 100% detection. Random errors: 99.9999977% detection rate. It does NOT detect malicious modification (use cryptographic hashes for that).' },
      { q: 'What is the difference between CRC32 and Adler-32?', a: 'Both are 32-bit checksums. CRC32: better error detection, slightly slower. Adler-32: simpler algorithm, faster in software. Adler-32 is used in zlib (gzip). CRC32 is used in ZIP, Ethernet, USB, Bluetooth.' },
    ],
    aiQA: [
      { q: 'What is CRC32?', a: 'A 32-bit cyclic redundancy check used for error detection in data transmission and storage.' },
      { q: 'Is CRC32 secure?', a: 'No. CRC32 is not a cryptographic hash. It only detects accidental errors, not malicious modification.' },
      { q: 'How long is a CRC32 output?', a: '8 hexadecimal characters (32 bits = 4 bytes).' },
      { q: 'What uses CRC32?', a: 'ZIP files, PNG images, Ethernet frames, USB, Bluetooth, and many storage systems.' },
      { q: 'What is the difference between CRC32 and SHA-256?', a: 'CRC32 is for error detection (fast, 32-bit, not secure). SHA-256 is for cryptographic integrity (slower, 256-bit, secure against attacks).' },
    ],
  },
};
