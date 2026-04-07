import type { ToolSEOMap } from './index';

export const DATA_SEO: ToolSEOMap = {
  'download-time': {
    quickAnswer: 'Download time = File size / Download speed. A 1 GB file at 100 Mbps takes 80 seconds (1,000 MB / 12.5 MB/s = 80 seconds). Enter your file size and speed to calculate.',
    whatIs: 'The Download Time Calculator estimates how long it takes to download or upload a file given a connection speed. It handles unit conversions between bits and bytes (remember: 8 bits = 1 byte) and accounts for real-world overhead (typically 80-90% of theoretical speed).',
    howToUse: ['Enter the file size (in MB, GB, or TB).', 'Enter your internet speed in Mbps or Gbps.', 'Click Calculate to see estimated download time.'],
    formula: 'Time = File Size (bytes) / Speed (bytes/sec). Convert: 1 Mbps = 0.125 MB/s. Example: 500 MB file at 50 Mbps: Time = 500 / (50 x 0.125) = 500 / 6.25 = 80 seconds.',
    examples: [
      { title: '4K Movie Download', scenario: '15 GB movie on 100 Mbps connection.', result: '15,000 MB / 12.5 MB/s = 1,200 seconds = 20 minutes.' },
      { title: 'Software Update', scenario: '2 GB update on 25 Mbps internet.', result: '2,000 / 3.125 = 640 seconds ≈ 10.7 minutes.' },
    ],
    useCases: ['Planning large file transfers and backups.', 'Estimating game download times.', 'Evaluating internet plan adequacy.', 'Data center bandwidth planning.'],
    faqs: [
      { q: 'Why is my download slower than the Mbps rating?', a: 'ISPs advertise theoretical maximum speeds. Real-world speeds are 60-80% of advertised due to network congestion, overhead, Wi-Fi limitations, and server speed.' },
      { q: 'What is the difference between Mbps and MB/s?', a: '8 Mbps = 1 MB/s. Internet speeds are measured in megabits per second (Mbps). File sizes are measured in megabytes (MB). Divide Mbps by 8 to get MB/s transfer rate.' },
      { q: 'What is a good download speed?', a: 'Basic browsing: 5 Mbps. HD streaming: 15-25 Mbps. 4K streaming: 50 Mbps. Remote work: 50+ Mbps. Household with multiple users: 100-500 Mbps.' },
      { q: 'What affects download speed?', a: 'ISP bandwidth, network congestion, server capacity, Wi-Fi vs. wired, distance from ISP equipment, number of devices sharing the connection, and VPN overhead.' },
      { q: 'What is latency vs. download speed?', a: 'Download speed is bandwidth (how much data per second). Latency (ping) is delay (how long to get a response). Gaming and video calls need low latency. File downloads need high bandwidth.' },
    ],
    aiQA: [
      { q: 'How long to download 1 GB at 100 Mbps?', a: '1 GB = 8,000 Mb. 8,000 / 100 = 80 seconds.' },
      { q: 'How do I convert Mbps to MB/s?', a: 'Divide by 8. 100 Mbps = 12.5 MB/s.' },
      { q: 'How long to download 10 GB at 50 Mbps?', a: '10,000 MB / 6.25 MB/s = 1,600 seconds ≈ 26.7 minutes.' },
      { q: 'What is a good internet speed for streaming 4K?', a: '25+ Mbps for single stream. 100+ Mbps for multiple simultaneous 4K streams.' },
      { q: 'How much data does Netflix use?', a: 'SD: ~1 GB/hour. HD: ~3 GB/hour. 4K: ~7 GB/hour.' },
    ],
  },

  'raid': {
    quickAnswer: 'RAID 0: full combined capacity, no redundancy. RAID 1: half capacity, full mirror. RAID 5: (n-1) drives usable. RAID 6: (n-2) drives usable. RAID 10: half capacity, high performance.',
    whatIs: 'The RAID Calculator computes usable storage capacity, fault tolerance, and read/write performance for different RAID levels. RAID (Redundant Array of Independent Disks) combines multiple drives to achieve redundancy, performance, or both. Essential for IT infrastructure, NAS systems, and data center planning.',
    howToUse: ['Select the RAID level (0, 1, 5, 6, 10, 50, 60).', 'Enter the number of drives and capacity per drive.', 'Click Calculate to see usable space, overhead, and fault tolerance.'],
    formula: 'RAID 0: usable = n x capacity. RAID 1: usable = capacity (1 drive). RAID 5: usable = (n-1) x capacity. RAID 6: usable = (n-2) x capacity. RAID 10: usable = n/2 x capacity.',
    examples: [
      { title: 'RAID 5 NAS', scenario: '4 x 4 TB drives in RAID 5.', result: 'Usable = (4-1) x 4 TB = 12 TB. 4 TB overhead (parity). Can survive 1 drive failure.' },
      { title: 'RAID 6 Enterprise', scenario: '8 x 8 TB drives in RAID 6.', result: 'Usable = (8-2) x 8 = 48 TB. 16 TB overhead. Can survive 2 simultaneous drive failures.' },
    ],
    useCases: ['NAS and home server storage planning.', 'Enterprise data center storage design.', 'Backup and redundancy system configuration.', 'Database server RAID selection.'],
    faqs: [
      { q: 'Which RAID level should I choose?', a: 'RAID 0: maximum performance, no redundancy (scratch space). RAID 1: simple mirror for critical data. RAID 5: balance of capacity and redundancy (most popular). RAID 6: higher fault tolerance. RAID 10: performance + redundancy (databases).' },
      { q: 'Is RAID a backup?', a: 'No. RAID protects against drive failure but not against accidental deletion, ransomware, fire, or theft. Always maintain a separate backup — ideally following the 3-2-1 rule (3 copies, 2 media types, 1 offsite).' },
      { q: 'What is RAID rebuild time?', a: 'When a drive fails and is replaced in RAID 5/6, the array must rebuild — reconstructing lost data from parity. Large drives (8+ TB) can take 24-48+ hours. During rebuild, performance drops and another failure could be catastrophic.' },
      { q: 'What is the minimum number of drives for each RAID level?', a: 'RAID 0: 2. RAID 1: 2. RAID 5: 3. RAID 6: 4. RAID 10: 4. RAID 50: 6. RAID 60: 8.' },
      { q: 'What is hot spare?', a: 'An additional idle drive that automatically replaces a failed drive, initiating rebuild immediately without manual intervention. Recommended for all RAID configurations with redundancy.' },
    ],
    aiQA: [
      { q: 'What is RAID?', a: 'Redundant Array of Independent Disks — combines multiple drives for performance and/or redundancy.' },
      { q: 'What is the usable space in RAID 5 with 4x4TB drives?', a: '(4-1) x 4 = 12 TB.' },
      { q: 'What is the difference between RAID 5 and RAID 6?', a: 'RAID 5 tolerates 1 drive failure. RAID 6 tolerates 2 simultaneous drive failures (double parity).' },
      { q: 'Is RAID a substitute for backup?', a: 'No. RAID protects against hardware failure only. Backups protect against all data loss scenarios.' },
      { q: 'What is RAID 10?', a: 'A combination of RAID 1 (mirroring) and RAID 0 (striping). High performance and redundancy. Requires minimum 4 drives. Usable = 50% of total capacity.' },
    ],
  },

  'data-storage': {
    quickAnswer: '1 KB = 1,024 bytes. 1 MB = 1,024 KB. 1 GB = 1,024 MB. 1 TB = 1,024 GB. Note: disk manufacturers use 1 KB = 1,000 bytes (decimal), so a "1 TB" drive holds ~931 GiB.',
    whatIs: 'The Data Storage Converter converts between bits, bytes, kilobytes, megabytes, gigabytes, terabytes, petabytes, and their binary equivalents (KiB, MiB, GiB, TiB). It clarifies the distinction between SI (decimal: 1 KB = 1,000 bytes) and IEC (binary: 1 KiB = 1,024 bytes) standards.',
    howToUse: ['Enter a data size value.', 'Select the input unit (bytes, KB, MB, GB, TB, etc.).', 'Click Convert to see the value in all other units.'],
    formula: 'Binary (IEC): 1 KiB = 2^10 = 1,024 bytes. 1 MiB = 2^20 = 1,048,576 bytes. Decimal (SI): 1 KB = 10^3 = 1,000 bytes. 1 MB = 10^6 = 1,000,000 bytes. 1 TB drive (decimal) = 1,000,000,000,000 / 1,073,741,824 = 931 GiB.',
    examples: [
      { title: 'Hard Drive Discrepancy', scenario: 'A "1 TB" hard drive (manufacturer uses decimal).', result: 'Actual: 1,000,000,000,000 bytes / 2^40 = 909.5 GiB. Your OS shows "909 GB" for a "1 TB" drive.' },
      { title: 'File Size', scenario: '2.5 GB video file in bytes.', result: '2.5 GB = 2.5 x 1,073,741,824 = 2,684,354,560 bytes (binary).' },
    ],
    useCases: ['Understanding hard drive capacity discrepancies.', 'Cloud storage planning and billing.', 'Database size estimation.', 'Network data transfer planning.'],
    faqs: [
      { q: 'Why does my drive show less space than advertised?', a: 'Manufacturers use decimal (1 TB = 10^12 bytes). Your OS uses binary (1 TB = 2^40 = 1.099 x 10^12 bytes). A "1 TB" drive has 909 GiB as shown by your OS.' },
      { q: 'What is the difference between GB and GiB?', a: '1 GB (gigabyte) = 10^9 bytes = 1,000,000,000 bytes (decimal). 1 GiB (gibibyte) = 2^30 bytes = 1,073,741,824 bytes (binary). The difference is about 7.4%.' },
      { q: 'What is a petabyte?', a: '1 PB = 10^15 bytes (decimal) = 1,000 TB. Facebook stores ~100 petabytes of photos. The human genome is about 3 GB. 1 PB could store 500 billion pages of text.' },
      { q: 'How much storage do I need?', a: 'OS + apps: 50-100 GB. Photos (50 MP): ~10 MB each. 4K video: ~50-100 GB/hour. Music: ~5 MB/song. A typical user needs 500 GB-2 TB for personal use.' },
      { q: 'What is SSD vs. HDD storage capacity?', a: 'Consumer SSDs: 250 GB to 8 TB. HDDs: 500 GB to 20+ TB per drive. SSDs are faster and more reliable; HDDs offer more capacity per dollar for bulk storage.' },
    ],
    aiQA: [
      { q: 'How many bytes in a gigabyte?', a: '1 GB = 1,000,000,000 bytes (decimal). 1 GiB = 1,073,741,824 bytes (binary).' },
      { q: 'How many MB in 1 GB?', a: '1 GB = 1,000 MB (decimal) or 1 GiB = 1,024 MiB (binary).' },
      { q: 'How many GB in 1 TB?', a: '1 TB = 1,000 GB (decimal) or 1 TiB = 1,024 GiB (binary).' },
      { q: 'How many bits in a byte?', a: '8 bits = 1 byte.' },
      { q: 'What is a terabyte?', a: '1 TB = 10^12 bytes = 1,000 GB (decimal). Enough for about 250,000 photos at 4 MB each.' },
    ],
  },

  'grams-to-ml': {
    quickAnswer: 'For water: grams = milliliters (density 1 g/mL). For other liquids: mL = grams / density. Milk: ~1.03 g/mL. Olive oil: ~0.91 g/mL.',
    whatIs: 'The Grams to mL Calculator converts mass (grams) to volume (milliliters) for common liquids using their density. Since density varies by substance, this calculator includes a reference table for water, milk, oil, alcohol, honey, and more. Essential for cooking, chemistry, and pharmaceutical applications.',
    howToUse: ['Enter the mass in grams.', 'Select the liquid type or enter a custom density.', 'Click Calculate to see the volume in milliliters.'],
    formula: 'Volume (mL) = Mass (g) / Density (g/mL). Example: 200g of honey (density 1.42 g/mL): V = 200/1.42 = 140.8 mL. For water: V (mL) = mass (g) exactly.',
    examples: [
      { title: 'Cooking Oil', scenario: '100g of olive oil (density 0.911 g/mL).', result: 'V = 100 / 0.911 = 109.8 mL ≈ 110 mL.' },
      { title: 'Honey', scenario: '250g of honey (density 1.42 g/mL).', result: 'V = 250 / 1.42 = 176 mL ≈ about 3/4 cup.' },
    ],
    useCases: ['Cooking recipes that specify ingredients by weight.', 'Chemistry lab: liquid mass to volume conversion.', 'Pharmaceutical dosage calculations.', 'Homemade cosmetics formulation.'],
    faqs: [
      { q: 'Why is 1g of water equal to 1 mL?', a: 'Water has density 1.000 g/mL at 4°C (very close to 1 at room temperature). This is not coincidental — the gram was originally defined as the mass of 1 cm^3 of water.' },
      { q: 'What is the density of common cooking liquids?', a: 'Water: 1.000 g/mL. Milk: 1.030 g/mL. Olive oil: 0.911 g/mL. Vegetable oil: 0.920 g/mL. Honey: 1.420 g/mL. Alcohol (ethanol): 0.789 g/mL.' },
      { q: 'Why do recipes use grams instead of mL?', a: 'Mass (grams) is more accurate than volume (mL/cups) because it doesn\'t depend on how tightly the ingredient is packed and is unaffected by temperature or altitude. Professional bakers always use weight measurements.' },
      { q: 'Does temperature affect density?', a: 'Yes. Most liquids expand slightly when heated, reducing density. For water, the density at 20°C is 0.998 g/mL vs. 1.000 at 4°C — negligible for cooking but significant for precise chemistry.' },
      { q: 'What is the density of blood?', a: 'Whole blood: approximately 1.06 g/mL (slightly denser than water). Plasma: 1.025 g/mL. Red blood cells: 1.09 g/mL.' },
    ],
    aiQA: [
      { q: 'How many mL is 100g of water?', a: '100 mL (water density = 1 g/mL).' },
      { q: 'How many mL is 100g of olive oil?', a: '100 / 0.911 ≈ 110 mL.' },
      { q: 'Is 1 gram always 1 mL?', a: 'Only for water. For other substances, mL = grams / density.' },
      { q: 'What is the density of whole milk?', a: 'Approximately 1.030 g/mL.' },
      { q: 'How do I convert grams to mL for honey?', a: 'Divide grams by honey\'s density (1.42 g/mL). 100g honey = 70.4 mL.' },
    ],
  },

  'bits-bytes-converter': {
    quickAnswer: '8 bits = 1 byte. 1 Kb (kilobit) = 1,000 bits. 1 KB (kilobyte) = 8,000 bits. Internet speeds are in bits/s; file sizes are in bytes. Always check the case: b = bits, B = bytes.',
    whatIs: 'The Bits and Bytes Converter converts between bits, kilobits, megabits, gigabits, bytes, kilobytes, megabytes, and gigabytes. Critically important because internet speeds are measured in bits while storage is measured in bytes — causing widespread confusion when comparing speeds to file sizes.',
    howToUse: ['Enter a value.', 'Select the input unit (bits, bytes, Kbps, MB, etc.).', 'Click Convert to see all equivalent values.'],
    formula: '8 bits = 1 byte. 1 kilobit (Kb) = 1,000 bits. 1 kilobyte (KB) = 1,024 bytes = 8,192 bits. 1 Mbps (megabits/sec) = 0.125 MB/s. Transfer time: seconds = file size (bits) / speed (bps).',
    examples: [
      { title: 'ISP Speed to Real Download', scenario: '100 Mbps internet plan.', result: '100 Mbps = 100,000,000 bits/s / 8 = 12.5 MB/s actual file download rate.' },
      { title: 'File Size in Bits', scenario: '500 MB file.', result: '500 MB = 500 x 1,048,576 bytes x 8 = 4,194,304,000 bits = 4.19 Gb.' },
    ],
    useCases: ['Understanding internet speed vs. download rate.', 'Network bandwidth calculation.', 'Data science: understanding storage vs. transfer.', 'Streaming bitrate analysis.'],
    faqs: [
      { q: 'Why do ISPs advertise Mbps but files are in MB?', a: 'Historical convention: telecommunications uses bits (lower number sounds impressive). Computing uses bytes (natural storage unit). Always divide ISP Mbps by 8 to get your real download speed in MB/s.' },
      { q: 'What is the difference between Kb and KB?', a: 'Kb (lowercase b) = kilobits. KB (uppercase B) = kilobytes. 1 KB = 8 Kb. This capitalization distinction matters a lot: 56 Kbps dial-up = 7 KB/s.' },
      { q: 'What is Kbps vs. KB/s?', a: 'Kbps = kilobits per second (internet speed measure). KB/s = kilobytes per second (file transfer rate). 100 Kbps = 12.5 KB/s.' },
      { q: 'What is a bit?', a: 'The smallest unit of digital data: 0 or 1. Everything in computing ultimately reduces to bits. 8 bits form 1 byte, which can represent values 0-255.' },
      { q: 'What is the difference between decimal and binary prefixes?', a: 'Decimal (SI): 1 Kb = 1,000 bits, 1 MB = 1,000,000 bytes. Binary (IEC): 1 Kib = 1,024 bits, 1 MiB = 1,048,576 bytes. Most networking uses decimal; storage uses binary.' },
    ],
    aiQA: [
      { q: 'How many bits in a byte?', a: '8 bits = 1 byte.' },
      { q: 'What is 100 Mbps in MB/s?', a: '100 / 8 = 12.5 MB/s.' },
      { q: 'How many bytes in a megabit?', a: '1 Mb = 125,000 bytes = 125 KB.' },
      { q: 'What is 1 Gbps in MB/s?', a: '1,000 / 8 = 125 MB/s.' },
      { q: 'Is 1 Mbps fast enough for Netflix HD?', a: 'No. Netflix HD requires 5 Mbps; 4K requires 25 Mbps.' },
    ],
  },

  'internet-speed': {
    quickAnswer: 'Good internet speed: 25 Mbps for HD streaming, 100 Mbps for a household, 1 Gbps for heavy users. Test your speed at speedtest.net and compare to your plan.',
    whatIs: 'The Internet Speed Converter converts between bits per second, kilobits, megabits, gigabits, and corresponding byte-rate equivalents. It helps users understand what their internet speed actually means for real-world tasks like streaming, downloading games, and video conferencing.',
    howToUse: ['Enter your speed value.', 'Select the unit (Kbps, Mbps, Gbps).', 'Click Convert to see the equivalent in all other speed units and estimated download times for common file sizes.'],
    formula: 'Download rate (MB/s) = Speed (Mbps) / 8. 1 Gbps = 1,000 Mbps = 125 MB/s. Streaming bitrates: Netflix 4K = 25 Mbps. Zoom HD = 3.8 Mbps. Online gaming = 3-6 Mbps.',
    examples: [
      { title: '100 Mbps Plan', scenario: 'What can I do with 100 Mbps?', result: 'Download rate: 12.5 MB/s. Can stream 4K to 4 devices simultaneously. Download 1 GB in 80 seconds.' },
      { title: 'Gigabit Fiber', scenario: '1 Gbps connection real-world use.', result: 'Download rate: 125 MB/s. A 50 GB game downloads in ~7 minutes.' },
    ],
    useCases: ['Choosing the right internet plan for household needs.', 'Troubleshooting slow speeds.', 'Calculating download times for large files.', 'Understanding streaming quality requirements.'],
    faqs: [
      { q: 'What is a good internet speed?', a: 'Minimum for 1 person: 25 Mbps. Small household: 100 Mbps. Heavy users/large household: 300-500 Mbps. Power users: 1 Gbps (gigabit).' },
      { q: 'What is download vs. upload speed?', a: 'Download: speed receiving data (streaming, browsing). Upload: speed sending data (video calls, cloud backup). Most plans have asymmetric speeds (faster download). Video conferencing needs good upload speed.' },
      { q: 'What is ping/latency?', a: 'The time for a data packet to travel to a server and back (measured in ms). Low latency is critical for gaming (< 50 ms ideal). High latency makes video calls choppy even with fast speeds.' },
      { q: 'What causes slow internet speeds?', a: 'Network congestion, weak Wi-Fi signal, outdated router, too many devices, ISP throttling, server limitations, or you\'re not getting the speed you\'re paying for. Test speed directly via ethernet cable to isolate Wi-Fi issues.' },
      { q: 'What is fiber vs. cable internet?', a: 'Fiber (FTTH): symmetric speeds up to 10 Gbps, very low latency, most reliable. Cable (DOCSIS): asymmetric, up to 1-2 Gbps download, more widely available. DSL: uses phone lines, slower but widespread.' },
    ],
    aiQA: [
      { q: 'What does 100 Mbps mean?', a: '100 megabits per second = 12.5 MB/s download rate.' },
      { q: 'How fast do I need to stream Netflix 4K?', a: '25 Mbps recommended per stream.' },
      { q: 'What internet speed do I need for gaming?', a: '3-6 Mbps download, 1-3 Mbps upload, and low latency (< 50 ms ping) are ideal.' },
      { q: 'What is 1 Gbps in MB/s?', a: '1,000 Mbps / 8 = 125 MB/s.' },
      { q: 'How many Mbps do I need for a family of 4?', a: 'At least 100-200 Mbps for multiple simultaneous streams and devices.' },
    ],
  },

  'screen-size': {
    quickAnswer: 'Screen size is the diagonal measurement in inches. A 27" monitor with 16:9 ratio has width ≈ 23.5" and height ≈ 13.2". Pixel density (PPI) depends on resolution and size.',
    whatIs: 'The Screen Size Calculator computes screen dimensions (width, height, diagonal), aspect ratio, and pixel density (PPI) from any combination of diagonal size and resolution. Compare monitors, TVs, phones, and tablets to find the best fit for your setup.',
    howToUse: ['Enter the screen diagonal in inches.', 'Enter the resolution (e.g., 1920 x 1080).', 'Optionally enter the aspect ratio.', 'Click Calculate to see width, height, and PPI.'],
    formula: 'For 16:9 ratio: width = diagonal x 16/sqrt(16^2+9^2) = diagonal x 0.872. height = diagonal x 0.490. PPI = sqrt(pixels_w^2 + pixels_h^2) / diagonal. Example: 27" 1920x1080: PPI = sqrt(1920^2+1080^2)/27 = 81.6 PPI.',
    examples: [
      { title: '27" 4K Monitor', scenario: '27 inch diagonal, 3840x2160 resolution.', result: 'Width: 23.5", Height: 13.2". PPI = sqrt(3840^2+2160^2)/27 = 163.2 PPI.' },
      { title: 'iPhone 15 (6.1")', scenario: '6.1 inch, 2556x1179 at 60:27.8 ratio.', result: 'PPI ≈ 460 PPI — super-sharp Retina display.' },
    ],
    useCases: ['Comparing monitors and TVs for purchase decisions.', 'Calculating optimal viewing distances for pixel visibility.', 'UI/UX design: understanding device display characteristics.', 'TV size selection for room dimensions.'],
    faqs: [
      { q: 'What is a good PPI for a monitor?', a: 'For desktop monitors (27-32"): 96-110 PPI is standard. 4K at 27" = 163 PPI — very sharp. Smartphones: 300+ PPI (Retina). Below 70 PPI at normal viewing distance shows individual pixels.' },
      { q: 'What is the ideal TV viewing distance?', a: 'THX recommends: distance = 2.5 x screen height. 55" 4K TV (screen height ≈ 27"): ideal distance ≈ 5.6 feet (1.7 m). Closer is fine for 4K due to higher pixel density.' },
      { q: 'What is aspect ratio?', a: 'Width:Height ratio. 16:9 = standard widescreen (most monitors, TVs). 21:9 = ultrawide. 4:3 = old standard. 1:1 = square. 16:9 has become universal for HD content.' },
      { q: 'What is pixel density?', a: 'PPI (pixels per inch) = sqrt(horizontal_pixels^2 + vertical_pixels^2) / diagonal_inches. Higher PPI = sharper image. Apple calls 264+ PPI on larger screens "Retina" (individual pixels not distinguishable at normal viewing distance).' },
      { q: 'Is 4K worth it on a 24" monitor?', a: 'At 24", 4K provides 183 PPI vs. 92 PPI for 1080p — significantly sharper for fine detail work. However, you may need to use scaling (125-150%), and the benefit is less noticeable for gaming vs. photo editing.' },
    ],
    aiQA: [
      { q: 'What does screen size mean?', a: 'The diagonal measurement from corner to corner, in inches.' },
      { q: 'What is PPI?', a: 'Pixels per inch — a measure of display sharpness. Higher PPI = sharper image.' },
      { q: 'What is the resolution of 1080p?', a: '1920 x 1080 pixels (Full HD).' },
      { q: 'What is the aspect ratio of a typical TV?', a: '16:9 (widescreen).' },
      { q: 'Is a 55" TV big enough for a living room?', a: 'Depends on viewing distance. 55" is ideal for viewing distances of 6-9 feet.' },
    ],
  },

  'aspect-ratio': {
    quickAnswer: 'Aspect ratio is width:height. 16:9 = standard widescreen. 4:3 = classic TV. 21:9 = ultrawide cinematic. If width = 1920 and ratio is 16:9, height = 1920 x 9/16 = 1080.',
    whatIs: 'The Aspect Ratio Calculator computes dimensions, resizes while maintaining aspect ratio, and converts between ratio formats. Use it to find a new width or height when scaling video, designing images, sizing displays, or preparing social media assets.',
    howToUse: ['Enter the original width and height (or the ratio directly).', 'Enter the new width or height.', 'Click Calculate to see the other dimension while maintaining the original ratio.'],
    formula: 'Ratio = Width / Height (simplified). New Height = New Width x (Original Height / Original Width). New Width = New Height x (Original Width / Original Height). Example: 1920x1080 → new width 1280: height = 1280 x 1080/1920 = 720.',
    examples: [
      { title: 'Video Resize', scenario: 'Resize 1920x1080 HD video to 1280 width.', result: 'Height = 1280 x (1080/1920) = 720. New size: 1280x720 (keeps 16:9 ratio).' },
      { title: 'Instagram Square', scenario: 'Crop a 3:2 photo (6000x4000) to 1:1 square.', result: 'Keep 4000x4000 center crop. 2000 pixels removed from width sides.' },
    ],
    useCases: ['Video production: maintaining aspect ratios when resizing.', 'Web design: responsive image sizing.', 'Social media: format images for different platforms.', 'Photography: print size calculation.'],
    faqs: [
      { q: 'What aspect ratios do social media platforms use?', a: 'Instagram: 1:1 (square), 4:5 (portrait), 1.91:1 (landscape). YouTube: 16:9. TikTok/Reels: 9:16. Twitter: up to 16:9. LinkedIn: 1.91:1 recommended.' },
      { q: 'What is letterboxing?', a: 'Black bars added to top/bottom of 16:9 video when displayed on a 4:3 screen (or wider ratio content on narrower screen). Pillarboxing is black bars on sides when narrower content is on wider screen.' },
      { q: 'What is 21:9 ultrawide?', a: '21:9 (2560x1080 or 3440x1440) provides a much wider field of view than 16:9. Great for productivity and immersive gaming. Most movies are filmed at approximately 2.39:1 or 2.35:1 (similar to 21:9).' },
      { q: 'What is the golden ratio?', a: 'The golden ratio ≈ 1.618:1 (approximately 16:9.9). Considered aesthetically pleasing in art and nature. While close to 16:10 (1.6:1) monitor ratio, 16:9 became dominant for TV content compatibility.' },
      { q: 'Why is 16:9 the standard?', a: '16:9 is a compromise aspect ratio that can display 4:3 (old TV), 2.39:1 (cinema), and widescreen 1.78:1 with minimal letterboxing/pillarboxing. It became the HD broadcast and Blu-ray standard.' },
    ],
    aiQA: [
      { q: 'What is aspect ratio?', a: 'The proportional relationship between width and height. 16:9 means for every 16 units of width, there are 9 units of height.' },
      { q: 'What is 16:9 in decimal?', a: '16/9 = 1.778.' },
      { q: 'What height corresponds to 1920 width at 16:9?', a: '1920 x 9/16 = 1080.' },
      { q: 'What is the aspect ratio of a typical smartphone?', a: 'Most modern smartphones: 9:19.5 or 9:20 (taller than 16:9).' },
      { q: 'What is 4:3 in common terms?', a: 'The old standard-definition TV ratio. 640x480, 800x600, 1024x768 are all 4:3.' },
    ],
  },

  'pixel-density': {
    quickAnswer: 'PPI (Pixels Per Inch) = sqrt(w^2 + h^2) / diagonal. 27" 4K = 163 PPI. iPhone 15 Pro = 460 PPI. Higher PPI = sharper display.',
    whatIs: 'The Pixel Density (PPI) Calculator computes the pixel density of any display from its resolution and physical size. PPI determines display sharpness and is the key metric for comparing phones, monitors, and TVs. Apple coined "Retina Display" for screens where individual pixels are not visible at normal viewing distances.',
    howToUse: ['Enter the horizontal and vertical resolution in pixels.', 'Enter the screen diagonal in inches.', 'Click Calculate to see PPI and DPI.'],
    formula: 'PPI = sqrt(w_px^2 + h_px^2) / diagonal_inches. Example: 1920x1080 on 24": PPI = sqrt(1920^2 + 1080^2) / 24 = 2202.9 / 24 = 91.8 PPI.',
    examples: [
      { title: '32" 4K TV', scenario: '3840x2160 resolution on 32" diagonal.', result: 'PPI = sqrt(3840^2+2160^2)/32 = 137.7 PPI.' },
      { title: 'Samsung Galaxy S24', scenario: '2340x1080 on 6.2" screen.', result: 'PPI = sqrt(2340^2+1080^2)/6.2 = 416 PPI — very sharp.' },
    ],
    useCases: ['Comparing smartphones and monitors by sharpness.', 'Determining optimal screen size for a given resolution.', 'UI design: understanding device density classes.', 'Print design: converting between screen and print resolution.'],
    faqs: [
      { q: 'What PPI is considered "Retina"?', a: 'Apple defines Retina as the PPI where individual pixels cannot be distinguished at the intended viewing distance. iPhone: 326+ PPI at ~10". MacBook: 220+ PPI at ~18". iMac: 218 PPI.' },
      { q: 'What is the difference between PPI and DPI?', a: 'PPI (Pixels Per Inch) = digital display pixel density. DPI (Dots Per Inch) = print dot density. For screens, PPI is the correct term. DPI is for printers. 300 DPI is standard for photographic print quality.' },
      { q: 'Is higher PPI always better?', a: 'Beyond ~300 PPI at normal viewing distances, additional PPI provides diminishing returns. For monitors at 24" away, 100+ PPI is sufficient. The real benefit is text clarity and fine detail in photo/design work.' },
      { q: 'What is density-independent pixels?', a: 'Android uses dp (density-independent pixels) and iOS uses pt (points) to create consistent UI sizes across different-density screens. Apps scale automatically to maintain physical size regardless of screen PPI.' },
      { q: 'Does higher resolution mean higher PPI?', a: 'Not necessarily. PPI depends on both resolution AND physical size. A 27" 4K monitor (163 PPI) has higher PPI than a 55" 4K TV (80 PPI) despite identical resolution.' },
    ],
    aiQA: [
      { q: 'What is PPI?', a: 'Pixels Per Inch — a measure of display sharpness. Higher PPI = sharper image.' },
      { q: 'What is the PPI of a 27" 1080p monitor?', a: 'PPI = sqrt(1920^2+1080^2)/27 = 81.6 PPI.' },
      { q: 'What is iPhone Retina display PPI?', a: 'Most iPhones: 326 PPI. iPhone Pro Max: 460 PPI (Super Retina XDR).' },
      { q: 'Is 4K better than 1080p on a 65" TV?', a: 'Yes, especially at viewing distances under 10 feet. 4K at 65" = 67.8 PPI vs. 33.9 PPI for 1080p.' },
      { q: 'What resolution do I need for a 27" monitor to get 160 PPI?', a: 'Approximately 3840x2160 (4K). 27" 4K = 163.2 PPI.' },
    ],
  },

  'number-to-words': {
    quickAnswer: '1,234,567 in words is "one million two hundred thirty-four thousand five hundred sixty-seven." Use this tool to convert any number to its written English form.',
    whatIs: 'The Number to Words Converter transforms numerical values into their written English equivalents. It handles integers, decimals, and large numbers up to quintillions. Essential for writing checks, legal documents, formal correspondence, and educational purposes.',
    howToUse: ['Enter any number (integer or decimal).', 'Select the format: standard English or ordinal (1st, 2nd, 3rd).', 'Click Convert to see the number in words.'],
    formula: 'No formula — algorithmic conversion using place value names. Ones, tens, hundreds, thousands, millions, billions, trillions, quadrillions, quintillions. Decimals: integer part + "and" + decimal digits as individual or whole number.',
    examples: [
      { title: 'Check Writing', scenario: 'Check amount: $2,547.83.', result: '"Two thousand five hundred forty-seven and 83/100 dollars."' },
      { title: 'Large Number', scenario: '1,000,000,000', result: '"One billion."' },
    ],
    useCases: ['Writing checks and payment amounts.', 'Legal documents requiring spelled-out numbers.', 'Educational exercises for number literacy.', 'Accessibility: reading numbers aloud for screen readers.'],
    faqs: [
      { q: 'How do I write a check correctly?', a: 'On the "Amount in Words" line: write the whole dollar amount in words, then "and" followed by the cents as a fraction (e.g., "XX/100"). Draw a line through remaining space to prevent fraud.' },
      { q: 'What is the largest named number?', a: 'In common use: googol (10^100), googolplex (10^googol). Named large numbers: million (10^6), billion (10^9), trillion (10^12), quadrillion (10^15), quintillion (10^18), sextillion (10^21).' },
      { q: 'What is the difference between billion in US vs. UK?', a: 'US (short scale): 1 billion = 10^9. UK traditionally used long scale (1 billion = 10^12, "milliard" = 10^9) but has largely adopted US short scale for finance. Most international business uses the US convention.' },
      { q: 'How do you write ordinal numbers?', a: '1st (first), 2nd (second), 3rd (third), 4th (fourth)... 11th, 12th, 13th (special exceptions). 21st, 22nd, 23rd then 24th-29th follow the -th pattern.' },
      { q: 'How are decimals written in words?', a: '3.14 = "three point one four" (digit by digit) or "three and fourteen hundredths" (fraction form). For money: "three dollars and fourteen cents."' },
    ],
    aiQA: [
      { q: 'How do you write 1000 in words?', a: 'One thousand.' },
      { q: 'How do you write 1,000,000 in words?', a: 'One million.' },
      { q: 'How do you write 1,000,000,000 in words?', a: 'One billion.' },
      { q: 'How do you write 45.75 in words?', a: 'Forty-five and seventy-five hundredths (or: forty-five point seven five).' },
      { q: 'How do you write 21 as an ordinal?', a: 'Twenty-first (21st).' },
    ],
  },

  'random-string': {
    quickAnswer: 'Generate random strings of any length with letters, numbers, and special characters. A 16-character alphanumeric random string has 36^16 ≈ 7.96 x 10^24 possible values.',
    whatIs: 'The Random String Generator creates cryptographically random strings for passwords, API keys, tokens, test data, and unique identifiers. Choose your character set (alphanumeric, hex, base64, custom) and length. All strings are generated client-side — nothing is sent to any server.',
    howToUse: ['Enter the desired string length.', 'Select the character set (alphanumeric, letters only, numbers only, hex, custom).', 'Click Generate to create a random string.', 'Click again for a new random string.'],
    formula: 'Entropy bits = length x log2(charset_size). A 16-char alphanumeric string: entropy = 16 x log2(62) = 95.3 bits — extremely secure. UUID (128 bits): randomly generated, collision probability negligible.',
    examples: [
      { title: 'API Key', scenario: 'Generate a 32-character alphanumeric API key.', result: 'Example: "k7mN2pQw8rT1vY4xZ9hA3bE6cF0jL5s" — 32 chars, 62 possible each = 190 bits of entropy.' },
      { title: 'Token', scenario: 'Generate a 64-character hex token.', result: '64 hex chars = 256 bits of entropy — suitable for cryptographic tokens.' },
    ],
    useCases: ['Generating secure API keys and access tokens.', 'Creating unique identifiers for database records.', 'Test data generation for software development.', 'Temporary password generation.'],
    faqs: [
      { q: 'Is this random string generator truly random?', a: 'Yes — it uses the browser\'s window.crypto.getRandomValues() API, which provides cryptographically secure random numbers. Suitable for security-sensitive applications.' },
      { q: 'What character set should I use for passwords?', a: 'Use the full alphanumeric + special characters set for maximum entropy. A 12-character password from 95-character set has 78.7 bits of entropy — computationally infeasible to brute force.' },
      { q: 'What is a UUID?', a: 'Universally Unique Identifier: 128-bit value formatted as 32 hex digits in groups (e.g., 550e8400-e29b-41d4-a716-446655440000). UUID v4 is randomly generated. Collision probability across all UUIDs ever generated is negligible.' },
      { q: 'What is entropy in password security?', a: 'Entropy = log2(possible_values) in bits. 128 bits of entropy = 2^128 ≈ 3.4 x 10^38 possible values. Even with 10^15 guesses/second, cracking would take longer than the age of the universe.' },
      { q: 'What is base64 encoding?', a: 'A 64-character set (A-Z, a-z, 0-9, +, /) used to encode binary data as ASCII text. Commonly used in URLs, email attachments, and JWT tokens. Not encryption — just encoding for safe transmission.' },
    ],
    aiQA: [
      { q: 'What is a random string generator used for?', a: 'Generating passwords, API keys, tokens, and unique identifiers.' },
      { q: 'Is the random string generator secure?', a: 'Yes, it uses cryptographically secure random number generation (window.crypto).' },
      { q: 'What is the recommended length for a secure password?', a: 'At least 12-16 characters with mixed case, numbers, and symbols.' },
      { q: 'What is a UUID?', a: 'A 128-bit universally unique identifier, typically randomly generated.' },
      { q: 'What character set gives the most entropy?', a: 'The full printable ASCII set (95 characters). Each character adds log2(95) ≈ 6.57 bits of entropy.' },
    ],
  },

  'character-counter': {
    quickAnswer: 'Count characters, words, sentences, and paragraphs instantly. Twitter allows 280 characters. SMS: 160 characters per segment. Most meta descriptions should be 150-160 characters.',
    whatIs: 'The Character Counter counts characters (with and without spaces), words, sentences, paragraphs, and lines in any text. It shows reading time, keyword density, and character limits for popular platforms. Essential for social media posts, SEO meta tags, and writing.',
    howToUse: ['Paste or type your text into the input area.', 'The counter updates in real time showing characters, words, and more.', 'Check the platform limits panel for Twitter, LinkedIn, Meta Description, and SMS.'],
    formula: 'Characters = total character count including spaces. Words = count of space-separated tokens. Sentences = count of ". ! ?" occurrences. Reading time ≈ word count / 200 (average adult reading speed in words per minute).',
    examples: [
      { title: 'Tweet Optimization', scenario: 'Composing a Twitter post, need to stay under 280 characters.', result: 'Real-time counter turns red when approaching 280 characters. Shows remaining character allowance.' },
      { title: 'SEO Meta Description', scenario: 'Writing a meta description for Google search results.', result: 'Target: 150-160 characters. Google truncates beyond this in search results.' },
    ],
    useCases: ['Social media post character limit compliance.', 'SEO meta title and description optimization.', 'SMS message cost estimation (160 chars/segment).', 'Academic writing: essay word count tracking.'],
    faqs: [
      { q: 'What are the character limits for major platforms?', a: 'Twitter: 280. LinkedIn posts: 3,000. Instagram caption: 2,200. Facebook: 63,206. TikTok description: 2,200. SMS: 160 (single segment). WhatsApp: 65,536.' },
      { q: 'What is the SEO meta description length?', a: 'Google typically shows 155-160 characters. Titles should be 50-60 characters. Longer meta descriptions get truncated in search results with an ellipsis.' },
      { q: 'How many words per minute does the average person read?', a: '200-250 words per minute for adults. Speed readers: 400-700 WPM. Novel: 80,000-100,000 words ≈ 5-8 hours reading time.' },
      { q: 'How many characters are in a standard page?', a: 'Approximately 3,000 characters (with spaces) or 500 words per standard double-spaced page. Varies by font size and margins.' },
      { q: 'Does Twitter count URLs as full characters?', a: 'Twitter wraps all URLs to 23 characters using t.co shortener, regardless of the original URL length. So a long URL and short URL both count as 23 characters.' },
    ],
    aiQA: [
      { q: 'How many characters can a tweet have?', a: '280 characters (Twitter doubled the limit from 140 in 2017).' },
      { q: 'How long is an SMS message?', a: '160 characters for standard SMS. Longer messages are split into segments (each charged separately).' },
      { q: 'How many words is 500 characters?', a: 'Approximately 80-100 words (assuming average 5-6 characters per word including spaces).' },
      { q: 'What is the ideal blog post word count for SEO?', a: '1,000-2,000 words for most topics. Long-form content (2,000+ words) often ranks better for competitive keywords.' },
      { q: 'How do I count words in my text?', a: 'Count the number of space-separated tokens. Most word processors and this tool do this automatically.' },
    ],
  },

  'bitrate': {
    quickAnswer: 'Bitrate = Data / Time. Video bitrate for HD: 5-8 Mbps. 4K: 20-50 Mbps. Audio: MP3 320 kbps = excellent quality. Higher bitrate = better quality but larger files.',
    whatIs: 'The Bitrate Calculator computes video and audio file sizes from bitrate and duration, or calculates required bitrate to fit a target file size. Understanding bitrate is essential for video production, streaming platform encoding, podcast production, and bandwidth planning.',
    howToUse: ['Enter the bitrate in kbps or Mbps.', 'Enter the duration in hours, minutes, and seconds.', 'Click Calculate to see the file size. Or enter file size and duration to find required bitrate.'],
    formula: 'File size (bits) = Bitrate (bps) x Duration (seconds). File size (MB) = Bitrate (Mbps) x Duration (seconds) / 8. Example: 1 hour of video at 8 Mbps: 8 x 3600 / 8 = 3,600 MB = 3.6 GB.',
    examples: [
      { title: 'YouTube Upload', scenario: '10-minute 1080p video at 8 Mbps.', result: 'File size = 8 x 600 / 8 = 600 MB.' },
      { title: 'Podcast', scenario: '1-hour podcast at 128 kbps MP3.', result: 'File size = 0.128 x 3600 / 8 = 57.6 MB.' },
    ],
    useCases: ['Video production: calculating export file sizes.', 'Streaming platform bitrate selection.', 'Podcast audio quality and file size planning.', 'Network bandwidth planning for video streams.'],
    faqs: [
      { q: 'What bitrate should I use for YouTube?', a: 'YouTube recommends: 1080p 60fps: 8-12 Mbps. 1080p 30fps: 8 Mbps. 1440p: 16 Mbps. 4K 30fps: 35-45 Mbps. YouTube re-encodes everything anyway, so higher upload bitrate preserves more detail.' },
      { q: 'What is CBR vs. VBR?', a: 'CBR (Constant Bitrate): same bitrate throughout. VBR (Variable Bitrate): adjusts based on complexity. VBR produces better quality at the same average file size. VBR is preferred for streaming and storage.' },
      { q: 'What is a good audio bitrate for podcasts?', a: 'Mono speech: 64-96 kbps MP3. Stereo music: 192-320 kbps MP3. Lossless (FLAC): 900-1,400 kbps. For podcasts: 128 kbps stereo or 64 kbps mono is standard.' },
      { q: 'What is codec vs. bitrate?', a: 'Codec (H.264, H.265/HEVC, AV1, VP9) determines the compression algorithm. Bitrate determines the data rate. H.265 achieves the same quality as H.264 at roughly half the bitrate.' },
      { q: 'What is the bitrate of Blu-ray?', a: 'Blu-ray average: 25-40 Mbps. Maximum: 54 Mbps (1080p). 4K Blu-ray: up to 128 Mbps. Netflix 4K HDR streams at 15-20 Mbps using more efficient codecs.' },
    ],
    aiQA: [
      { q: 'What is bitrate?', a: 'The amount of data processed per unit of time, measured in bits per second (bps, kbps, Mbps).' },
      { q: 'What bitrate should I use for 1080p streaming?', a: '5-8 Mbps for 30fps. 8-12 Mbps for 60fps.' },
      { q: 'What is the file size of a 1-hour video at 4 Mbps?', a: '4 x 3600 / 8 = 1,800 MB = 1.8 GB.' },
      { q: 'What is a good audio bitrate for music?', a: '320 kbps MP3 is considered transparent quality. Lossless (FLAC) for audiophile use.' },
      { q: 'Does higher bitrate always mean better video quality?', a: 'Above a certain threshold for the content complexity, additional bitrate provides diminishing returns. A talking-head video requires less bitrate than fast action sports.' },
    ],
  },

  'upload-time': {
    quickAnswer: 'Upload time = File size / Upload speed. A 1 GB file with 10 Mbps upload takes 800 seconds (13.3 minutes). Upload speeds are typically much slower than download speeds.',
    whatIs: 'The Upload Time Calculator estimates how long it takes to upload files to the internet, cloud storage, or servers. Since upload speeds are often 5-20x slower than download speeds on asymmetric connections (cable, DSL), upload time calculations are critical for video creators, backup planning, and remote work.',
    howToUse: ['Enter the file size (in MB, GB, or TB).', 'Enter your upload speed in Mbps.', 'Click Calculate to see upload time and tips for faster uploads.'],
    formula: 'Upload time = File size (MB) x 8 / Speed (Mbps). In seconds = File_MB x 8 / Mbps. Example: 5 GB video at 20 Mbps: 5,000 x 8 / 20 = 2,000 seconds = 33.3 minutes.',
    examples: [
      { title: 'YouTube Video', scenario: 'Upload 10 GB 4K video with 50 Mbps upload.', result: '10,000 x 8 / 50 = 1,600 seconds = 26.7 minutes.' },
      { title: 'Cloud Backup', scenario: '500 GB backup with 10 Mbps upload speed.', result: '500,000 x 8 / 10 = 400,000 seconds = 4.6 days. Use a faster connection or incremental backup.' },
    ],
    useCases: ['YouTube and Vimeo video upload planning.', 'Cloud backup time estimation.', 'Remote work: large file sharing with clients.', 'Choosing internet plan for content creators.'],
    faqs: [
      { q: 'Why is upload speed so much slower than download?', a: 'Most home internet plans are asymmetric: cable and DSL prioritize downstream (consumer demand). A 200 Mbps download plan may only have 10-20 Mbps upload. Fiber often provides symmetric speeds.' },
      { q: 'What upload speed do I need for streaming?', a: 'Twitch/YouTube Live: 720p at 3-4 Mbps. 1080p at 4-6 Mbps. 4K at 15-25 Mbps. Add 20-30% overhead for network stability headroom.' },
      { q: 'Does file compression help with upload time?', a: 'Yes. Compressing a 10 GB file to 2 GB reduces upload time by 80%. ZIP, 7-zip, and platform-specific codecs (H.265 for video) reduce file size before uploading.' },
      { q: 'What is the fastest way to transfer large files?', a: 'Locally: USB 3.1 (10 Gbps) or Thunderbolt 4 (40 Gbps) drive is fastest. Cloud: fiber internet (symmetric 1 Gbps). Physical: "sneakernet" (mailing drives) can outperform internet for very large transfers.' },
      { q: 'How do I check my upload speed?', a: 'Visit speedtest.net or fast.com and run a speed test. Repeat from different times of day. Test via ethernet cable (not Wi-Fi) for most accurate result.' },
    ],
    aiQA: [
      { q: 'How long to upload 1 GB at 10 Mbps?', a: '1,000 x 8 / 10 = 800 seconds ≈ 13.3 minutes.' },
      { q: 'What is a good upload speed for remote work?', a: '10+ Mbps for video conferencing. 50+ Mbps for regular large file transfers.' },
      { q: 'Why is my upload speed slower than download?', a: 'Most cable and DSL connections are asymmetric — optimized for downloading content, not uploading.' },
      { q: 'How long to upload 10 GB at 100 Mbps?', a: '10,000 x 8 / 100 = 800 seconds ≈ 13.3 minutes.' },
      { q: 'What internet speed do YouTubers need?', a: 'At minimum 20-50 Mbps upload for reasonable upload times. 100+ Mbps for large 4K files.' },
    ],
  },

  'ordinal-number': {
    quickAnswer: '1 = 1st (first), 2 = 2nd (second), 3 = 3rd (third), 4 = 4th (fourth). Special cases: 11th, 12th, 13th. Enter any number to convert to its ordinal form.',
    whatIs: 'The Ordinal Number Converter transforms cardinal numbers (1, 2, 3) into their ordinal forms (1st, 2nd, 3rd) and written-out equivalents (first, second, third). Essential for ranking lists, legal documents, event descriptions, and formal writing.',
    howToUse: ['Enter any positive integer.', 'Click Convert to see the ordinal form (1st, 2nd) and the written form (first, second).'],
    formula: 'Rules: Numbers ending in 1 = -st (except 11th). Ending in 2 = -nd (except 12th). Ending in 3 = -rd (except 13th). All others = -th. 11th, 12th, 13th are special exceptions.',
    examples: [
      { title: 'Competition Rankings', scenario: 'Place 1 through 10 in a race.', result: '1st (first), 2nd (second), 3rd (third), 4th, 5th, 6th, 7th, 8th, 9th, 10th.' },
      { title: 'Dates', scenario: 'The 21st of March.', result: '21st — ends in 1 but is not 11, so "-st" suffix applies.' },
    ],
    useCases: ['Ranking lists and leaderboards.', 'Date formatting in formal writing.', 'Legal documents referencing sections.', 'Sports and competition results.'],
    faqs: [
      { q: 'Why is 11th not 11st?', a: '11, 12, and 13 are exceptions because they come from "eleven," "twelve," "thirteen" — not "oneteen," "twoteen," "threeteen." The -th suffix applies to avoid the awkward "eleven-first" sound.' },
      { q: 'How do you write 101st?', a: '101st — ends in 1 (not 11), so -st. 102nd, 103rd, 104th... 111th, 112th, 113th (exceptions again), then 121st, 122nd, 123rd...' },
      { q: 'How are ordinals used in British vs. American English?', a: 'Both use the same -st, -nd, -rd, -th suffixes. British English sometimes writes "1st January" while American English writes "January 1st." Both are correct.' },
      { q: 'What are the ordinal names for 1-10?', a: 'First, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth.' },
      { q: 'How do fractions relate to ordinals?', a: '1/3 = "one-third." 1/4 = "one-fourth" or "one-quarter." 3/4 = "three-fourths" or "three-quarters." The denominator uses the ordinal form.' },
    ],
    aiQA: [
      { q: 'What is the ordinal of 1?', a: '1st (first).' },
      { q: 'What is the ordinal of 11?', a: '11th (eleventh) — special exception, not 11st.' },
      { q: 'What is the ordinal of 21?', a: '21st (twenty-first).' },
      { q: 'What is the ordinal of 100?', a: '100th (one hundredth).' },
      { q: 'What suffix do most ordinals use?', a: '-th (e.g., 4th, 5th, 10th, 20th). Exceptions: -st (1st, 21st), -nd (2nd, 22nd), -rd (3rd, 23rd).' },
    ],
  },

  'number-formatter': {
    quickAnswer: 'Format numbers with commas, decimal places, currency symbols, and percentage signs. 1234567.89 formatted as currency: $1,234,567.89. As percentage: 0.1234 = 12.34%.',
    whatIs: 'The Number Formatter converts raw numbers into formatted strings with thousand separators, decimal precision, currency symbols, scientific notation, and percentage formats. Handles different locale formats (US: 1,234.56 vs. European: 1.234,56).',
    howToUse: ['Enter the raw number.', 'Select format type: standard, currency, percentage, scientific notation.', 'Choose decimal places, separator style, and currency symbol.', 'Click Format to see the result.'],
    formula: 'Thousand separators: add comma every 3 digits from right. Scientific notation: N x 10^e format. Percentage: multiply by 100 and add % sign. Currency: add symbol and round to 2 decimal places.',
    examples: [
      { title: 'Financial Report', scenario: 'Raw value: 1234567.891.', result: 'US Currency: $1,234,567.89. European: 1.234.567,89 €. Scientific: 1.23 x 10^6.' },
      { title: 'Percentage Display', scenario: 'Decimal 0.08735.', result: 'Percentage: 8.74%. Rounded to 2 decimal places.' },
    ],
    useCases: ['Financial and business reporting.', 'Data visualization number formatting.', 'Internationalization of numbers for different locales.', 'Scientific data presentation.'],
    faqs: [
      { q: 'What is the difference between US and European number formats?', a: 'US (and UK): period as decimal separator, comma as thousands separator (1,234.56). European: comma as decimal separator, period or space as thousands separator (1.234,56 or 1 234,56).' },
      { q: 'What is scientific notation?', a: 'A way to express very large or small numbers: N x 10^e, where 1 ≤ N < 10. Example: 0.000045 = 4.5 x 10^-5. 123,000,000 = 1.23 x 10^8.' },
      { q: 'How many decimal places should currency use?', a: 'Most currencies: 2 decimal places. Japanese Yen (JPY) and Korean Won (KRW) use 0 decimals. Kuwaiti Dinar (KWD) uses 3. Cryptocurrency often uses 8 (Bitcoin) or 18 (Ethereum).' },
      { q: 'What is the difference between precision and significant figures?', a: 'Decimal places: fixed number of digits after decimal (3.14159 to 2 places = 3.14). Significant figures: total meaningful digits (3.14159 to 4 sig figs = 3.142).' },
      { q: 'What is number abbreviation (K, M, B)?', a: 'K = thousands (1K = 1,000). M = millions (1M = 1,000,000). B = billions (1B = 1,000,000,000). Used in social media follower counts, financial summaries. 1.2M = 1,200,000.' },
    ],
    aiQA: [
      { q: 'How do you format 1000000 with commas?', a: '1,000,000.' },
      { q: 'How do you write 0.05 as a percentage?', a: '5%.' },
      { q: 'What is 1500000 in scientific notation?', a: '1.5 x 10^6.' },
      { q: 'How do you format $1234.5 as currency?', a: '$1,234.50.' },
      { q: 'What does 2.5K mean?', a: '2,500.' },
    ],
  },
};
