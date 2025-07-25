export interface PhotoData {
  id: string;
  url: string;
  title: string;
  metadata: {
    hash: string;
    capturedOn: string;
    blockRef: string;
  };
}

export interface BlockData {
  id: string;
  blockNumber: number;
  timestamp: string;
  title: string;
  subtitle: string;
  description: string;
  details: {
    content: string;
    technologies?: string[];
    links?: Array<{
      label: string;
      url: string;
      type: 'github' | 'demo' | 'website' | 'linkedin' | 'email';
    }>;
    achievements?: string[];
    codeSnippet?: string;
    photos?: PhotoData[];
  };
  hash: string;
  previousHash: string;
  nonce: number;
  position: {
    x: number;
    y: number;
    z: number;
  };
}

export interface TimelineState {
  activeBlock: number;
  isScrolling: boolean;
  expandedBlock: string | null;
}