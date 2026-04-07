export interface ToolSEO {
  quickAnswer: string;
  whatIs: string;
  howToUse: string[];
  formula?: string;
  examples: { title: string; scenario: string; result: string }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  aiQA: { q: string; a: string }[];
}

export type ToolSEOMap = Record<string, ToolSEO>;

import { BUSINESS_SEO } from './business';
import { FINANCE_SEO } from './finance';
import { DATETIME_SEO } from './datetime';
import { HEALTH_SEO } from './health';
import { FITNESS_SEO } from './fitness';
import { TRANSPORTATION_SEO } from './transportation';
import { CONSTRUCTION_SEO } from './construction';
import { MATHEMATICS_SEO } from './mathematics';
import { GEOMETRY_SEO } from './geometry';
import { TRIGONOMETRY_SEO } from './trigonometry';
import { STATISTICS_SEO } from './statistics';
import { PHYSICS_SEO } from './physics';
import { DATA_SEO } from './data-tools';
import { CRYPTOGRAPHY_SEO } from './cryptography';
import { COOKING_SEO } from './cooking';
import { OTHER_SEO } from './other';
import { RANDOMIZERS_SEO } from './randomizers';
import { CONVERTERS1_SEO } from './converters1';
import { CONVERTERS2_SEO } from './converters2';
import { CONVERTERS3_SEO } from './converters3';

export const TOOL_SEO: ToolSEOMap = {
  ...BUSINESS_SEO,
  ...FINANCE_SEO,
  ...DATETIME_SEO,
  ...HEALTH_SEO,
  ...FITNESS_SEO,
  ...TRANSPORTATION_SEO,
  ...CONSTRUCTION_SEO,
  ...MATHEMATICS_SEO,
  ...GEOMETRY_SEO,
  ...TRIGONOMETRY_SEO,
  ...STATISTICS_SEO,
  ...PHYSICS_SEO,
  ...DATA_SEO,
  ...CRYPTOGRAPHY_SEO,
  ...COOKING_SEO,
  ...OTHER_SEO,
  ...RANDOMIZERS_SEO,
  ...CONVERTERS1_SEO,
  ...CONVERTERS2_SEO,
  ...CONVERTERS3_SEO,
};
