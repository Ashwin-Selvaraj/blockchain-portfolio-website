import React, { useState, useEffect, useRef } from 'react';
import { BlockData } from '@/types/blockchain';
import { blockchainData } from '@/data/blockchainData';
import { BlockComponent } from './BlockComponent';
import { TimelineConnector } from './TimelineConnector';
import { BlockModal } from './BlockModal';
import { TransactionGame } from './TransactionGame';
import { TransactionFeedback } from './TransactionFeedback';
import { Monitor, Smartphone } from 'lucide-react';

export const BlockchainTimeline: React.FC = () => {
  const [activeBlock, setActiveBlock] = useState(0);
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [validatedTransaction, setValidatedTransaction] = useState<any>(null);
  const [fraudulentTransaction, setFraudulentTransaction] = useState<any>(null);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentBlockIndex = Math.round(scrollY / windowHeight);
      
      if (currentBlockIndex !== activeBlock && currentBlockIndex < blockchainData.length) {
        setActiveBlock(currentBlockIndex);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Skip wheel handling on mobile - use touch instead
      if (isMobile) return;
      
      e.preventDefault();
      if (isScrolling) return;

      // Add scroll threshold - require more deliberate scrolling
      const newAccumulator = scrollAccumulator + e.deltaY;
      setScrollAccumulator(newAccumulator);

      // Only move blocks when accumulator exceeds threshold
      const threshold = 50; // Adjust this value to make it more/less sensitive
      
      if (Math.abs(newAccumulator) > threshold) {
        setIsScrolling(true);
        const direction = newAccumulator > 0 ? 1 : -1;
        const nextBlock = Math.max(0, Math.min(blockchainData.length - 1, activeBlock + direction));
        
        if (nextBlock !== activeBlock) {
          setActiveBlock(nextBlock);
          window.scrollTo({
            top: nextBlock * window.innerHeight,
            behavior: 'smooth'
          });
        }

        // Reset accumulator after movement
        setScrollAccumulator(0);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    // Mobile touch handling
    let touchStartY = 0;
    let touchEndY = 0;
    let touchStartTime = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      if (!isMobile) return;
      touchStartY = e.changedTouches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isMobile || isScrolling) return;
      e.preventDefault(); // Prevent default scrolling
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isMobile || isScrolling) return;
      
      touchEndY = e.changedTouches[0].clientY;
      const swipeDistance = touchStartY - touchEndY;
      const swipeTime = Date.now() - touchStartTime;
      
      // More precise thresholds like desktop - require deliberate swipe
      const minDistance = 50;
      const maxTime = 300; // Must be a quick swipe

      if (Math.abs(swipeDistance) > minDistance && swipeTime < maxTime) {
        setIsScrolling(true);
        const direction = swipeDistance > 0 ? 1 : -1;
        const nextBlock = Math.max(0, Math.min(blockchainData.length - 1, activeBlock + direction));
        
        if (nextBlock !== activeBlock) {
          setActiveBlock(nextBlock);
        }
        
        // Timeout similar to desktop for consistent feel
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (!isMobile) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeBlock, isScrolling, scrollAccumulator]);

  const handleBlockClick = (blockId: string) => {
    setExpandedBlock(blockId);
  };

  const handleTransactionValidated = (transaction: any) => {
    setValidatedTransaction(transaction);
    setTimeout(() => setValidatedTransaction(null), 100);
  };

  const handleFraudDetected = (transaction: any) => {
    setFraudulentTransaction(transaction);
    setTimeout(() => setFraudulentTransaction(null), 100);
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div className="relative">
      {/* Transaction Game - Hidden on mobile */}
      <div className="hidden lg:block">
        <TransactionGame
          onTransactionValidated={handleTransactionValidated}
          onFraudDetected={handleFraudDetected}
        />

        {/* Transaction Feedback */}
        <TransactionFeedback
          validatedTransaction={validatedTransaction}
          fraudulentTransaction={fraudulentTransaction}
        />
      </div>

      {/* Timeline Navigation - Hidden on mobile */}
      <div className="hidden md:flex fixed top-4 right-2 md:right-4 z-50 flex-col space-y-1 md:space-y-2">
        {blockchainData.map((block, index) => (
          <button
            key={block.id}
            onClick={() => {
              setActiveBlock(index);
              window.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth'
              });
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full border transition-all duration-300 ${
              activeBlock === index
                ? 'bg-primary border-primary shadow-[0_0_10px_hsl(var(--primary))]'
                : 'bg-transparent border-muted-foreground hover:border-primary'
            }`}
            title={`Block ${block.blockNumber}: ${block.title}`}
          />
        ))}
      </div>

      {/* Mobile View - Show only first block with desktop recommendation */}
      {isMobile ? (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          {/* First Block */}
          <div className="w-full max-w-sm mb-8">
            <BlockComponent
              block={blockchainData[0]}
              isActive={true}
              isPrevious={false}
              isNext={false}
              onClick={() => handleBlockClick(blockchainData[0].id)}
            />
          </div>

          {/* Desktop Recommendation */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 max-w-sm text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Monitor className="w-8 h-8 text-primary" />
              <Smartphone className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-cyber text-primary mb-2">
              Experience the Full Blockchain Journey
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              This interactive blockchain timeline is optimized for desktop viewing. 
              Switch to a larger screen to explore the complete blockchain journey 
              with 3D animations and interactive elements.
            </p>
            <div className="text-xs text-muted-foreground">
              <p>• 3D Block Transitions</p>
              <p>• Interactive Timeline</p>
              <p>• Transaction Game</p>
              <p>• Full Blockchain Experience</p>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop View - Full timeline experience */
        <div 
          ref={timelineRef} 
          className="relative px-4 md:px-8"
          style={{ 
            height: `${blockchainData.length * 100}vh`,
            overflow: 'visible'
          }}
        >
          {blockchainData.map((block, index) => (
              <div
                key={block.id}
                ref={(el) => blockRefs.current[index] = el}
                className="min-h-screen flex items-center justify-center relative"
                style={{ 
                  transform: `translateZ(${(index - activeBlock) * 50}px)`,
                  opacity: (Math.abs(index - activeBlock) > 2 ? 0.3 : 1),
                  position: 'relative',
                  transition: 'none'
                }}
            >
              {/* Timeline Connector */}
              {index < blockchainData.length - 1 && (
                <TimelineConnector
                  startBlock={block}
                  endBlock={blockchainData[index + 1]}
                  isActive={activeBlock >= index}
                />
              )}

              {/* Block Component */}
              <BlockComponent
                block={block}
                isActive={activeBlock === index}
                isPrevious={activeBlock > index}
                isNext={activeBlock < index}
                onClick={() => handleBlockClick(block.id)}
                style={{
                  transform: `
                    perspective(1000px)
                    rotateX(${(index - activeBlock) * 10}deg)
                    rotateY(${(index - activeBlock) * 5}deg)
                    translateX(${block.position.x}px)
                    translateY(${block.position.y}px)
                    translateZ(${block.position.z + (index - activeBlock) * 100}px)
                    scale(${activeBlock === index ? 1 : 0.8})
                  `
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Block Details Modal */}
      {expandedBlock && (
        <BlockModal
          block={blockchainData.find(b => b.id === expandedBlock)!}
          onClose={() => setExpandedBlock(null)}
        />
      )}

      {/* Current Block Info - Hidden on mobile */}
      <div className="hidden md:block fixed bottom-4 left-2 md:left-4 z-40 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-2 md:p-4 max-w-[200px] md:max-w-sm">
        <div className="text-xs md:text-sm text-muted-foreground font-mono">
          Block #{blockchainData[activeBlock]?.blockNumber}
        </div>
        <div className="text-primary font-cyber font-bold text-sm md:text-base truncate">
          {blockchainData[activeBlock]?.title}
        </div>
        <div className="text-[10px] md:text-xs text-muted-foreground">
          Hash: {blockchainData[activeBlock]?.hash.substring(0, 12)}...
        </div>
      </div>
    </div>
  );
};