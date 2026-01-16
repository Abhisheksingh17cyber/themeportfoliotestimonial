import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTerminal, FiCopy, FiCheck, FiPlay } from 'react-icons/fi';
import './CodeEditor.css';

const CodeEditor = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [displayedCode, setDisplayedCode] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');

  const codeSnippet = `// Adam's Software Architecture Blueprint
class SoftwareArchitect {
  constructor() {
    this.name = "Adam Smith";
    this.role = "Head of Software Engineering";
    this.expertise = [
      "System Design",
      "Cloud Architecture", 
      "Team Leadership",
      "AI/ML Integration"
    ];
    this.yearsOfExperience = 10;
  }

  async buildScalableSystem(requirements) {
    const architecture = await this.design(requirements);
    const infrastructure = this.setupCloud(architecture);
    const team = this.assembleTeam(requirements.complexity);
    
    return {
      architecture,
      infrastructure,
      team,
      deliveryDate: this.calculateTimeline()
    };
  }

  getPhilosophy() {
    return "Clean code, scalable systems, happy teams.";
  }
}

// Initialize the architect
const adam = new SoftwareArchitect();
console.log(adam.getPhilosophy());`;

  const outputText = `> Initializing Software Architect...
> Loading expertise modules...
✓ System Design: Ready
✓ Cloud Architecture: Ready
✓ Team Leadership: Ready
✓ AI/ML Integration: Ready
> Philosophy loaded:
"Clean code, scalable systems, happy teams."
> Architect ready for deployment! 🚀`;

  useEffect(() => {
    if (inView) {
      let charIndex = 0;
      let currentLineIndex = 0;
      
      const typeCode = () => {
        if (charIndex < codeSnippet.length) {
          setDisplayedCode(codeSnippet.slice(0, charIndex + 1));
          
          // Track current line
          const currentText = codeSnippet.slice(0, charIndex + 1);
          currentLineIndex = currentText.split('\n').length;
          setCurrentLine(currentLineIndex);
          
          charIndex++;
          setTimeout(typeCode, 15);
        }
      };

      setTimeout(typeCode, 500);
    }
  }, [inView, codeSnippet]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setOutput('');
    
    let index = 0;
    const lines = outputText.split('\n');
    
    const printLine = () => {
      if (index < lines.length) {
        setOutput(prev => prev + (prev ? '\n' : '') + lines[index]);
        index++;
        setTimeout(printLine, 300);
      } else {
        setIsRunning(false);
      }
    };
    
    setTimeout(printLine, 500);
  };

  const syntaxHighlight = (code) => {
    return code
      .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
      .replace(/\b(class|constructor|async|await|return|const|this|new)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="boolean">$1</span>')
      .replace(/"([^"]+)"/g, '<span class="string">"$1"</span>')
      .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
      .replace(/(\w+)\(/g, '<span class="function">$1</span>(')
      .replace(/\.([\w]+)/g, '.<span class="property">$1</span>');
  };

  return (
    <section className="code-editor-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Live Code Preview
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Watch the architecture come to life
        </motion.p>

        <div className="editor-container">
          <motion.div
            className="code-window"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Window Header */}
            <div className="window-header">
              <div className="window-buttons">
                <span className="window-btn close"></span>
                <span className="window-btn minimize"></span>
                <span className="window-btn maximize"></span>
              </div>
              <div className="window-title">
                <FiTerminal />
                <span>architect.js</span>
              </div>
              <div className="window-actions">
                <motion.button
                  className="action-btn"
                  onClick={handleCopy}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </motion.button>
                <motion.button
                  className="action-btn run-btn"
                  onClick={handleRun}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isRunning}
                >
                  <FiPlay />
                </motion.button>
              </div>
            </div>

            {/* Code Area */}
            <div className="code-area">
              <div className="line-numbers">
                {codeSnippet.split('\n').map((_, i) => (
                  <motion.span
                    key={i}
                    className={`line-number ${i + 1 === currentLine ? 'active' : ''}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i < currentLine ? 1 : 0.3 }}
                  >
                    {i + 1}
                  </motion.span>
                ))}
              </div>
              <pre className="code-content">
                <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(displayedCode) }} />
                <motion.span
                  className="cursor"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </pre>
            </div>

            {/* Output Terminal */}
            {output && (
              <motion.div
                className="terminal-output"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="terminal-header">
                  <span>Terminal Output</span>
                </div>
                <pre className="terminal-content">
                  {output.split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`terminal-line ${line.startsWith('✓') ? 'success' : line.startsWith('>') ? 'info' : ''}`}
                    >
                      {line}
                    </motion.div>
                  ))}
                </pre>
              </motion.div>
            )}
          </motion.div>

          {/* Floating Elements */}
          <div className="editor-decorations">
            <motion.div
              className="floating-bracket bracket-1"
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {'{ }'}
            </motion.div>
            <motion.div
              className="floating-bracket bracket-2"
              animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              {'< />'}
            </motion.div>
            <motion.div
              className="floating-bracket bracket-3"
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {'( )'}
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          className="tech-tags"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Go', 'Rust', 'SQL'].map((tech, i) => (
            <motion.span
              key={tech}
              className="tech-tag"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodeEditor;
