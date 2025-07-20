import { BlockData } from '@/types/blockchain';

// Generate cryptographic-looking hashes for visual effect
const generateHash = (input: string): string => {
  return '0x' + Array.from(input).map((_, i) => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('').substring(0, 64);
};

export const blockchainData: BlockData[] = [
  {
    id: 'genesis',
    blockNumber: 0,
    timestamp: '1999-08-24T00:00:00Z',
    title: 'Genesis Block',
    subtitle: 'The Origin Story',
    description: 'Every blockchain starts with a genesis block. This is where the journey began.',
    details: {
      content: `My blockchain journey began in 2019 through crypto trading, with Ethereum as the entry point. What started with charts soon turned into a deeper interest in smart contracts and decentralized systems. That curiosity grew into a passion for building — leading me to develop smart contracts and contribute to web3 projects ever since.`,
      achievements: [
        'Discovered Ethereum in 2019',
        'Started with crypto trading and on-chain exploration',
        'Transitioned from trader to blockchain developer',
        'Built and deployed smart contracts across EVM chains'
      ],
      photos: [
        {
          id: 'photo-1',
          url: '/photos/photo1.jpg',
          title: 'Photo 1',
          metadata: {
            hash: '0xa1b2c3d4e5f6789012345678901234567890abcdef',
            capturedOn: '2024-01-15',
            blockRef: 'genesis-0x001'
          }
        },
        {
          id: 'photo-2',
          url: '/photos/photo2.jpg',
          title: 'Photo 2',
          metadata: {
            hash: '0xf6e5d4c3b2a1098765432109876543210fedcba',
            capturedOn: '2024-01-16',
            blockRef: 'genesis-0x002'
          }
        },
        {
          id: 'photo-3',
          url: '/photos/photo3.jpeg',
          title: 'Photo 3',
          metadata: {
            hash: '0x123456789abcdef0123456789abcdef012345678',
            capturedOn: '2024-01-17',
            blockRef: 'genesis-0x003'
          }
        },
        {
          id: 'photo-4',
          url: '/photos/photo4.png',
          title: 'Photo 4',
          metadata: {
            hash: '0x456789abcdef123456789abcdef123456789abc',
            capturedOn: '2024-01-18',
            blockRef: 'genesis-0x004'
          }
        },
        {
          id: 'photo-5',
          url: '/photos/photo5.jpeg',
          title: 'Photo 5',
          metadata: {
            hash: '0x789abcdef123456789abcdef123456789abcdef',
            capturedOn: '2024-01-19',
            blockRef: 'genesis-0x005'
          }
        },
        {
          id: 'photo-6',
          url: '/photos/photo6.jpeg',
          title: 'Photo 6',
          metadata: {
            hash: '0xabcdef123456789abcdef123456789abcdef12',
            capturedOn: '2024-01-20',
            blockRef: 'genesis-0x006'
          }
        },
        {
          id: 'photo-7',
          url: '/photos/photo7.jpeg',
          title: 'Photo 7',
          metadata: {
            hash: '0xdef123456789abcdef123456789abcdef12345',
            capturedOn: '2024-01-21',
            blockRef: 'genesis-0x007'
          }
        },
        {
          id: 'photo-8',
          url: '/photos/photo8.jpeg',
          title: 'Photo 8',
          metadata: {
            hash: '0xf123456789abcdef123456789abcdef1234567',
            capturedOn: '2024-01-22',
            blockRef: 'genesis-0x008'
          }
        },
        {
          id: 'photo-9',
          url: '/photos/photo9.jpeg',
          title: 'Photo 9',
          metadata: {
            hash: '0x23456789abcdef123456789abcdef123456789',
            capturedOn: '2024-01-23',
            blockRef: 'genesis-0x009'
          }
        },
        {
          id: 'photo-10',
          url: '/photos/photo10.jpeg',
          title: 'Photo 10',
          metadata: {
            hash: '0x56789abcdef123456789abcdef123456789abc',
            capturedOn: '2024-01-24',
            blockRef: 'genesis-0x010'
          }
        },
        {
          id: 'photo-11',
          url: '/photos/photo11.jpeg',
          title: 'Photo 11',
          metadata: {
            hash: '0x89abcdef123456789abcdef123456789abcdef',
            capturedOn: '2024-01-25',
            blockRef: 'genesis-0x011'
          }
        },
        {
          id: 'photo-12',
          url: '/photos/photo12.jpeg',
          title: 'Photo 12',
          metadata: {
            hash: '0xbcdef123456789abcdef123456789abcdef123',
            capturedOn: '2024-01-26',
            blockRef: 'genesis-0x012'
          }
        },
        {
          id: 'photo-13',
          url: '/photos/photo13.jpeg',
          title: 'Photo 13',
          metadata: {
            hash: '0xef123456789abcdef123456789abcdef123456',
            capturedOn: '2024-01-27',
            blockRef: 'genesis-0x013'
          }
        },
        {
          id: 'photo-14',
          url: '/photos/photo14.jpeg',
          title: 'Photo 14',
          metadata: {
            hash: '0x123456789abcdef123456789abcdef12345678',
            capturedOn: '2024-01-28',
            blockRef: 'genesis-0x014'
          }
        },
        {
          id: 'photo-15',
          url: '/photos/photo15.jpeg',
          title: 'Photo 15',
          metadata: {
            hash: '0x456789abcdef123456789abcdef123456789ab',
            capturedOn: '2024-01-29',
            blockRef: 'genesis-0x015'
          }
        },
        {
          id: 'photo-16',
          url: '/photos/photo16.jpeg',
          title: 'Photo 16',
          metadata: {
            hash: '0x789abcdef123456789abcdef123456789abcde',
            capturedOn: '2024-01-30',
            blockRef: 'genesis-0x016'
          }
        }
      ]
    },
    hash: generateHash('genesis'),
    previousHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    nonce: 0,
    position: { x: 0, y: 0, z: 0 }
  },
  {
    id: 'education-foundation',
    blockNumber: 1,
    timestamp: '2017-08-01T00:00:00Z',
    title: 'Education Foundation',
    subtitle: 'Engineering the Future',
    description: 'Bachelor of Engineering – where theory met curiosity.',
    details: {
      content: `Completed formal education in Engineering at Kongu Engineering College, where I built a strong foundation in mathematics, programming, and system design. This phase laid the groundwork for my transition into blockchain development, as I deepened my understanding of algorithms, distributed systems, and cryptography.

    Throughout my academic journey, I actively participated in programming contests and honed practical skills through real-world projects and hackathons. My passion for decentralized technology grew during this time, ultimately shaping my career in web3.`,
      technologies: ['C', 'Java', 'Solidity', 'JavaScript', 'SQL'],
      achievements: [
        'Graduated with a CGPA of 8.43/10.0',
        'Built early-stage technical projects in web and blockchain',
        'Actively participated in hackathons and won prizes in tech events',
        'Completed blockchain certifications from iNeuron and Coursera'
      ]
    },
    hash: generateHash('education'),
    previousHash: generateHash('genesis'),
    nonce: 1337,
    position: { x: 200, y: -100, z: 50 }
  },
  {
    id: 'blockchain-entry',
    blockNumber: 1,
    timestamp: '2018-01-10T00:00:00Z',
    title: 'Blockchain Entry',
    subtitle: 'First Smart Contract',
    description: 'Wrote the first smart contract and fell down the Ethereum rabbit hole.',
    details: {
      content: `The crypto winter of 2018 was the perfect time to start learning. While prices were down, the technology was maturing. Spent countless hours reading documentation, following tutorials, and experimenting with Solidity.

First smart contract was a simple token following ERC-20 standard, but it opened up a whole new world of possibilities. Realized that blockchain wasn't just about cryptocurrency - it was about programmable money, decentralized governance, and trustless systems.`,
      technologies: ['Solidity', 'Web3.js', 'Truffle', 'Ganache', 'MetaMask'],
      achievements: [
        'Deployed first smart contract on Ethereum mainnet',
        'Built decentralized voting system',
        'Completed 100DaysOfCode challenge focused on blockchain',
        'Active contributor to Ethereum Stack Exchange'
      ],
      codeSnippet: `// My first smart contract
pragma solidity ^0.8.0;

contract MyToken {
    mapping(address => uint256) public balances;
    uint256 public totalSupply;
    
    constructor(uint256 _supply) {
        totalSupply = _supply;
        balances[msg.sender] = _supply;
    }
    
    function transfer(address _to, uint256 _amount) public {
        require(balances[msg.sender] >= _amount);
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }
}`,
      links: [
        { label: 'First Contract on Etherscan', url: '#', type: 'website' }
      ]
    },
    hash: generateHash('blockchain-entry'),
    previousHash: generateHash('education'),
    nonce: 4096,
    position: { x: 300, y: 50, z: 100 }
  },
  {
    id: 'evm-chains',
    blockNumber: 2,
    timestamp: '2020-03-20T00:00:00Z',
    title: 'EVM Mastery',
    subtitle: 'Multi-Chain Development',
    description: 'Became proficient across Ethereum, Polygon, BSC, Avalanche, and Arbitrum.',
    details: {
      content: `The DeFi summer of 2020 brought explosive growth to Ethereum and the birth of alternative EVM-compatible chains. This was an incredible learning opportunity to understand how different chains optimize for different use cases.

Worked on projects across multiple chains, learning the nuances of each - Polygon's low fees, BSC's speed, Avalanche's subnets, and Arbitrum's optimistic rollups. Each chain taught valuable lessons about trade-offs in blockchain design.`,
      technologies: [
        'Ethereum', 'Polygon (Matic)', 'Binance Smart Chain', 'Avalanche', 'Arbitrum',
        'Hardhat', 'OpenZeppelin', 'Chainlink', 'IPFS', 'The Graph'
      ],
      achievements: [
        'Deployed contracts on 8+ different EVM chains',
        'Built cross-chain bridge protocol',
        'Audited 50+ smart contracts',
        'Contributed to OpenZeppelin library',
        'Speaker at 3 blockchain conferences'
      ],
      links: [
        { label: 'Multi-Chain DeFi Protocol', url: '#', type: 'github' },
        { label: 'Cross-Chain Bridge', url: '#', type: 'demo' }
      ]
    },
    hash: generateHash('evm-chains'),
    previousHash: generateHash('blockchain-entry'),
    nonce: 8192,
    position: { x: -200, y: -50, z: 80 }
  },
  {
    id: 'solana-ton',
    blockNumber: 3,
    timestamp: '2021-11-08T00:00:00Z',
    title: 'Beyond EVM',
    subtitle: 'Solana & TON Development',
    description: 'Expanded expertise to non-EVM chains: Solana (Rust/Anchor) and TON (Tact).',
    details: {
      content: `Venturing beyond the EVM ecosystem opened up new paradigms in blockchain development. Solana's account model and parallel processing required a complete shift in thinking, while TON's actor model brought lessons from Telegram's massive scale.

Learning Rust for Solana development was challenging but rewarding - the language's emphasis on memory safety and performance aligned perfectly with blockchain's requirements for security and efficiency.`,
      technologies: [
        'Rust', 'Anchor Framework', 'Solana CLI', 'Phantom Wallet',
        'Tact Language', 'TON Blockchain', 'FunC', 'TON Connect'
      ],
      achievements: [
        'Built high-frequency trading bot on Solana',
        'Developed NFT marketplace with 10K+ transactions',
        'Created TON-based gaming DApp',
        'Optimized transaction costs by 90% using Solana accounts',
        'Rust contributor to Anchor framework'
      ],
      codeSnippet: `// Solana program using Anchor
use anchor_lang::prelude::*;

#[program]
pub mod my_solana_program {
    use super::*;
    
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let account = &mut ctx.accounts.my_account;
        account.bump = *ctx.bumps.get("my_account").unwrap();
        Ok(())
    }
}`,
      links: [
        { label: 'Solana DeFi Protocol', url: '#', type: 'github' },
        { label: 'TON Gaming DApp', url: '#', type: 'demo' }
      ]
    },
    hash: generateHash('solana-ton'),
    previousHash: generateHash('evm-chains'),
    nonce: 16384,
    position: { x: 100, y: 150, z: -50 }
  },
  {
    id: 'major-projects',
    blockNumber: 4,
    timestamp: '2022-07-15T00:00:00Z',
    title: 'Major Projects',
    subtitle: 'DeFi, NFTs & GameFi',
    description: 'Led development of large-scale DeFi protocols, NFT marketplaces, and GameFi platforms.',
    details: {
      content: `This period marked the transition from learning to leading. Architected and developed several major projects that handled millions in TVL and thousands of active users.

Each project brought unique challenges: DeFi required deep understanding of financial primitives and MEV protection, NFTs demanded efficient metadata handling and royalty systems, while GameFi combined the complexity of both with real-time gaming mechanics.`,
      technologies: [
        'DeFi Protocols', 'NFT Marketplaces', 'GameFi Platforms', 'MEV Protection',
        'Royalty Systems', 'Real-time Gaming', 'Cross-chain Integration'
      ],
      achievements: [
        'Built DeFi protocol with $50M+ TVL',
        'Developed NFT marketplace with 100K+ users',
        'Created GameFi platform with 10K+ daily active users',
        'Implemented MEV protection saving users $2M+',
        'Led team of 15+ developers across 3 continents'
      ],
      links: [
        { label: 'DeFi Protocol', url: '#', type: 'demo' },
        { label: 'NFT Marketplace', url: '#', type: 'github' },
        { label: 'GameFi Platform', url: '#', type: 'demo' }
      ]
    },
    hash: generateHash('major-projects'),
    previousHash: generateHash('solana-ton'),
    nonce: 32768,
    position: { x: 250, y: -100, z: 120 }
  },
  {
    id: 'current-focus',
    blockNumber: 5,
    timestamp: '2024-01-01T00:00:00Z',
    title: 'Current Focus',
    subtitle: 'Innovation & Leadership',
    description: 'Leading blockchain innovation and mentoring the next generation of developers.',
    details: {
      content: `Currently focused on pushing the boundaries of what's possible in blockchain technology. Working on cutting-edge projects that combine multiple blockchain paradigms and exploring new consensus mechanisms.

Mentoring junior developers and contributing to open-source projects. Passionate about making blockchain technology more accessible and building the infrastructure for the next generation of decentralized applications.`,
      technologies: [
        'Zero-Knowledge Proofs', 'Layer 2 Solutions', 'Cross-chain Protocols',
        'Decentralized Identity', 'AI Integration', 'Quantum-resistant Cryptography'
      ],
      achievements: [
        'Published 3 research papers on blockchain scalability',
        'Mentored 50+ developers in blockchain development',
        'Contributed to 20+ open-source blockchain projects',
        'Speaker at 10+ international blockchain conferences',
        'Advisor to 5 blockchain startups'
      ],
      links: [
        { label: 'Research Papers', url: '#', type: 'website' },
        { label: 'Open Source Contributions', url: '#', type: 'github' },
        { label: 'Conference Talks', url: '#', type: 'linkedin' }
      ]
    },
    hash: generateHash('current-focus'),
    previousHash: generateHash('major-projects'),
    nonce: 65536,
    position: { x: -300, y: 200, z: -80 }
  }
];

export const getBlockByNumber = (blockNumber: number): BlockData | undefined => {
  return blockchainData.find(block => block.blockNumber === blockNumber);
};

export const getNextBlock = (currentBlockNumber: number): BlockData | undefined => {
  return blockchainData.find(block => block.blockNumber === currentBlockNumber + 1);
};

export const getPreviousBlock = (currentBlockNumber: number): BlockData | undefined => {
  return blockchainData.find(block => block.blockNumber === currentBlockNumber - 1);
};