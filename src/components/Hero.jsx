import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const GRID_SIZE = 20;
const CELL_SIZE = 20; // px
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

const Hero = () => {
  const { name, title, about } = portfolioData;
  
  // Game State
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 15, y: 10 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate random food
  const generateFood = useCallback(() => {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    return { x, y };
  }, []);

  // Reset Game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    setFood(generateFood());
    setIsPlaying(true);
  };

  // Handle Key Press
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isPlaying) return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPlaying]);

  // Game Loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const moveSnake = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Check collisions
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE ||
          prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 1);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, GAME_SPEED);

    return () => clearInterval(moveSnake);
  }, [direction, food, gameOver, isPlaying, generateFood]);

  return (
    <section className="hero container">
      <div className="hero-content">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="greeting">Hi, my name is</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="name">{name}.</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="title">{title}.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="description">{about}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#projects" className="cta-btn">Check out my work!</a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-game"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="game-terminal">
            <div className="terminal-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">snake_game.exe</span>
            </div>
            <div className="game-board" style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}>
              {!isPlaying ? (
                <div className="game-overlay">
                  <p>Press Start to Play</p>
                  <button onClick={resetGame} className="start-btn">Start Game</button>
                </div>
              ) : gameOver ? (
                <div className="game-overlay">
                  <p>Game Over!</p>
                  <p>Score: {score}</p>
                  <button onClick={resetGame} className="start-btn">Try Again</button>
                </div>
              ) : null}
              
              {snake.map((segment, i) => (
                <div
                  key={i}
                  className="snake-segment"
                  style={{
                    left: segment.x * CELL_SIZE,
                    top: segment.y * CELL_SIZE,
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                  }}
                ></div>
              ))}
              <div
                className="food"
                style={{
                  left: food.x * CELL_SIZE,
                  top: food.y * CELL_SIZE,
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                }}
              ></div>
            </div>
            <div className="game-status">
              <span>Score: {score}</span>
              <span>Use Arrow Keys</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Account for fixed navbar */
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
          align-items: center;
          width: 100%;
        }
        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .greeting {
          color: var(--accent-color);
          font-family: var(--font-mono);
          font-size: 1rem;
          margin-bottom: 20px;
          display: block;
        }
        .name {
          font-size: clamp(40px, 8vw, 70px);
          font-weight: 600;
          color: #ccd6f6;
          line-height: 1.1;
        }
        .title {
          font-size: clamp(30px, 6vw, 60px);
          font-weight: 600;
          color: #8892b0;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .description {
          max-width: 540px;
          font-size: 1.1rem;
          color: #8892b0;
          margin-bottom: 50px;
        }
        .cta-btn {
          border: 1px solid var(--accent-color);
          color: var(--accent-color);
          padding: 1.25rem 1.75rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 1rem;
          background: transparent;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .cta-btn:hover {
          background: rgba(100, 255, 218, 0.1);
        }

        /* Game Styles */
        .hero-game {
          display: flex;
          justify-content: center;
        }
        .game-terminal {
          background: #0a192f;
          border-radius: 8px;
          box-shadow: 0 20px 50px -15px rgba(2, 12, 27, 0.7);
          border: 1px solid #233554;
          overflow: hidden;
          width: fit-content;
        }
        .terminal-header {
          background: #112240;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid #233554;
        }
        .dots {
          display: flex;
          gap: 8px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .dot.red { background-color: #ff5f56; }
        .dot.yellow { background-color: #ffbd2e; }
        .dot.green { background-color: #27c93f; }
        .terminal-title {
          color: #8892b0;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }
        .game-board {
          position: relative;
          background: rgba(17, 34, 64, 0.5);
          margin: 10px;
          border: 1px solid #233554;
        }
        .snake-segment {
          position: absolute;
          background-color: var(--accent-color);
          border-radius: 2px;
        }
        .food {
          position: absolute;
          background-color: #ff5f56;
          border-radius: 50%;
          box-shadow: 0 0 10px #ff5f56;
        }
        .game-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 25, 47, 0.85);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #ccd6f6;
          z-index: 10;
        }
        .start-btn {
          margin-top: 15px;
          padding: 8px 16px;
          background: transparent;
          border: 1px solid var(--accent-color);
          color: var(--accent-color);
          font-family: var(--font-mono);
          cursor: pointer;
          transition: all 0.2s;
        }
        .start-btn:hover {
          background: rgba(100, 255, 218, 0.1);
        }
        .game-status {
          padding: 10px 15px;
          display: flex;
          justify-content: space-between;
          color: #8892b0;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          border-top: 1px solid #233554;
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text {
            align-items: center;
          }
          .hero-game {
            margin-top: 40px;
            display: none; /* Hide game on smaller tablets/mobile to save space */
          }
        }
        @media (min-width: 1025px) {
           .hero-game {
             display: flex;
           }
        }
      `}</style>
    </section>
  );
};

export default Hero;
