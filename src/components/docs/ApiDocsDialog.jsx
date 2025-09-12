import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; 
import CodeSnippet from '../common/CodeSnippet.jsx';

const ApiDocsDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: '#111827', 
          color: '#e2e8f0',          
          borderRadius: '1rem',
          border: '1px solid #334155'
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="text-2xl font-bold gradient-text">
          Tyche Allocator API Documentation
        </span>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ borderColor: '#334155' }}>
        <p className="text-center text-slate-400 mb-8">
            Our powerful API is designed for simplicity and flexibility. Here are the four main endpoints you can use to integrate our dynamic allocation algorithm into your services.
        </p>
        
        {/* Endpoint 1 */}
        <div className="mb-8">
            <h5 className="text-xl font-bold text-sky-300">1. Custom Recommendation</h5>
            <p className="text-slate-400 mt-2">
                Perform a "what-if" analysis on a hypothetical portfolio to understand its calculated risk.
            </p>
            <p className="font-mono bg-slate-800 inline-block px-2 py-1 rounded-md text-sky-300 my-2 text-sm">POST /api/v1/recommendation/custom</p>
            <CodeSnippet code={`{\n  "initial_capital": 100000,\n  "risk_aversion": 0.5,\n  "portfolio": {\n    "assets": {\n      "MSFT": 0.40,\n      "GLD": 0.30,\n      "TLT": 0.30\n    },\n    "edges": []\n  }\n}`} language="json" />
        </div>
        
        {/* Endpoint 2 */}
        <div className="mb-8">
            <h5 className="text-xl font-bold text-sky-300">2. Live Recommendation</h5>
            <p className="text-slate-400 mt-2">
                Analyze your actual, live portfolio from a connected broker to determine the ideal risk profile.
            </p>
            <p className="font-mono bg-slate-800 inline-block px-2 py-1 rounded-md text-sky-300 my-2 text-sm">POST /api/v1/recommendation/live</p>
            <CodeSnippet code={`{\n  "broker": "alpaca",\n  "risk_tolerance": "medium"\n}`} language="json" />
        </div>

        {/* Endpoint 3 */}
        <div className="mb-8">
            <h5 className="text-xl font-bold text-sky-300">3. Custom Autonomous Trading</h5>
            <p className="text-slate-400 mt-2">
                Provide a specific target portfolio. The API will intelligently rebalance your live account to match this target.
            </p>
            <p className="font-mono bg-slate-800 inline-block px-2 py-1 rounded-md text-sky-300 my-2 text-sm">POST /api/v1/autonomous/custom</p>
            <CodeSnippet code={`{\n  "broker": "alpaca",\n  "portfolio": {\n    "AAPL": 0.60,\n    "GOOGL": 0.40\n  }\n}`} language="json" />
        </div>

        {/* Endpoint 4 */}
        <div>
            <h5 className="text-xl font-bold text-sky-300">4. Live Autonomous Trading</h5>
            <p className="text-slate-400 mt-2">
                The true "self-driving" mode. The API analyzes your live portfolio and automatically executes trades to match the ideal allocation.
            </p>
            <p className="font-mono bg-slate-800 inline-block px-2 py-1 rounded-md text-sky-300 my-2 text-sm">POST /api/v1/autonomous/live</p>
            <CodeSnippet code={`{\n  "broker": "alpaca",\n  "risk_tolerance": "medium"\n}`} language="json" />
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default ApiDocsDialog;
